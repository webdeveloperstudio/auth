import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserTokenEntity } from './entities/user.token.entity';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/signin-user-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
    @InjectRepository(UserTokenEntity) private readonly repositoryToken: Repository<UserTokenEntity>,
    private jwtService: JwtService
  ) { }

  public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const vUser = await this.repository.create(createUserDto);
    const saltRounds = await bcrypt.genSalt(vUser._id);
    const hashPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds
    );
    createUserDto.password = hashPassword;
    return await vUser.save();
  }

  public async signin(pAuthDto: SignInDto): Promise<any> {
    try {
      const { identity, password } = pAuthDto;
      const vUser = await this.repository.findOne({
        where: { identity: identity },
      });
      if (vUser && (await bcrypt.compare(password, vUser.password))) {
        const payload = Object.assign({}, vUser);
        delete payload.password;
        const vExpireTime: Date = new Date(new Date().getTime() + pAuthDto.expiresIn);
        const accessToken: string = this.jwtService.sign(payload, {
          algorithm: 'HS256',
          encoding: 'utf8',
          expiresIn: pAuthDto.expiresIn,
          subject: vUser._id.toString()
        });
        this.repositoryToken.create({
          token: accessToken,
          User: vUser,
          expireTime: vExpireTime
        });
        return {
          status: true,
          result: {
            accessToken: accessToken,
            refreshToken: accessToken,
            expireTime: vExpireTime
          }
        };
      } else {
        throw new UnauthorizedException({
          status: false,
          result: 'Invalid credentials'
        });
      }
    } catch (e) {
      return {
        status: false,
        result: e.message
      };
    }
  }

  public async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<UserEntity> {
    return await this.repository.findOne({
      where: {
        _id: id
      }
    });
  }

  public async createToken(User: UserEntity, token: string, refreshToken: string, expireTime: Date): Promise<UserTokenEntity> {
    return await this.repositoryToken.create({
      User: User,
      token: token,
      refreshToken: refreshToken,
      expireTime: expireTime
    }).save();
  }

  public async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.repository.update({
      _id: id
    }, updateUserDto);
  }

  public async remove(id: number): Promise<any> {
    return await this.repository.delete({
      _id: id
    });
  }
}

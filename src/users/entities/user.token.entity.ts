import { Column, Entity, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { baseEntity } from "src/common/base/base.entity";

@Entity('user_tokens')
export class UserTokenEntity extends baseEntity {

    @ManyToOne(type => UserEntity, user => user.Token)
    public User: UserEntity;

    @Column('varchar', { length: 255, unique: true })
    public token: string;

    @Column('varchar', { length: 255, nullable: true })
    public refreshToken: string;

    @Column('datetime', { nullable: true })
    public expireTime: Date;
}
import { Column, ObjectIdColumn, Entity, BaseEntity, OneToMany } from 'typeorm';
import { UserTokenEntity } from './user.token.entity';

@Entity('users')
export class UserEntity extends BaseEntity {

    @ObjectIdColumn()
    public _id: number;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column('varchar', { length: 20, unique: true, nullable: false })
    public identity: string;

    @Column()
    public phone: string;

    @Column()
    public password: string;

    @Column()
    public status: number;

    @OneToMany(type => UserTokenEntity, token => token.User)
    public Token: UserTokenEntity;
}

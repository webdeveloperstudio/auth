import { BaseEntity, BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from "typeorm";

export class baseLogEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("datetime", { nullable: true })
    public created_at!: Date;

    @Column("datetime", { nullable: true })
    public updated_at?: Date;

    @Column("datetime", { nullable: false })
    public deleted_at!: Date;

    @BeforeInsert()
    public BeforeInsert() {
        this.deleted_at = new Date()
    }

    @BeforeUpdate()
    public BeforeUpdate() {
        this.updated_at = new Date()
    }

}
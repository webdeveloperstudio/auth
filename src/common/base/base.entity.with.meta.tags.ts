import { BaseEntity, BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from "typeorm";
import { baseMetaTagsInterface } from "./interfaces/base.meta.tags.interface";

export class baseWithMetatagsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('json', { nullable: true })
    public metaTags?: baseMetaTagsInterface;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP", nullable: false })
    public created_at!: Date;

    @Column("datetime", { default: () => null, nullable: true })
    public updated_at?: Date;

    @BeforeInsert()
    public BeforeInsert() {
        this.created_at = new Date()
    }

    @BeforeUpdate()
    public BeforeUpdate() {
        this.updated_at = new Date()
    }

}
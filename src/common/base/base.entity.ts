import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class baseEntity extends BaseEntity {

    @ObjectIdColumn()
    public _id: number;

    @CreateDateColumn({
        type: "timestamp",
        name: "created_at",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP"
    })
    public created_at!: Date;

    @UpdateDateColumn({
        type: "datetime",
        name: "updated_at",
        nullable: true,
        default: null
    })
    public updated_at?: Date;

}
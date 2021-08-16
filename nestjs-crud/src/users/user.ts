import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as crypto from 'crypto';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;
}
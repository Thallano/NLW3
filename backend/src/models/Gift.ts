import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('orphanages')

export default class Gift {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    wish: string;

    @Column()
    value: number;

    @ManyToOne(()=> Orphanage, orphanage => orphanage.gift)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}
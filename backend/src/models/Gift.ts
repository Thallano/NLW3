/*import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('gifts')

export default class Gift {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    wish: string;

    @ManyToOne(()=> Orphanage, orphanage => orphanage.gifts)

    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;

    @JoinColumn({name: 'orphanage_key'})
    orphanageKey: Orphanage;
}*/
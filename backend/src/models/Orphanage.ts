import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';
{/*import Gift from './Gift';*/}

@Entity('orphanages')

export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    key: string;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    whatsapp: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(()=> Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];

    /*@OneToMany(()=> Gift, gift => gift.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_keu'})
    gifts: Gift[];-*/ 
}
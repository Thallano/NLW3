import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';
const crypto = require('crypto');

import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository. find({
            relations:['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },

    async show(request: Request, response: Response){
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id,{
            relations:['images']
        });

        return response.json(orphanageView.render(orphanage));
    },

    async create(request: Request, response: Response){
        const { 
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            whatsapp
        } = request.body;

        const key = crypto.randomBytes(4).toString('HEX');

        const orphanagesRepository = getRepository(Orphanage);
        
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image =>{
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            whatsapp,
            open_on_weekends: open_on_weekends === 'true',
            images,
            key
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            key: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            whatsapp: Yup.string().required().max(10),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orphanage = orphanagesRepository.create(data);
        
        await orphanagesRepository.save(orphanage);
        
        return response.status(201).json(orphanage.key);
    },

    /*async gift(request: Request, response: Response){
        const { 
            name,
            wish,
            value,
        } = request.body;
               
        const data = {
            name,
            wish,
            value,
        };
        
        const giftRepository = getRepository(Orphanage);

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            wish: Yup.string().required(),
            value: Yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orphanage = orphanagesRepository.create(data);
        
        await orphanagesRepository.save(orphanage);
        
        return response.status(201).json(orphanage);
        }*/
};

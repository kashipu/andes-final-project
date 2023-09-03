import { Restaurant } from "../models/Restaurant.model";
import { COUNTRIESDATA } from "./Countries.data";

export const Restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Restaurante Africano',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[0],
        city: 'Ciudad 1',
        address: 'Dirección 1'
    },
    {
        id: '2',
        name: 'Restaurante Latinoamericano',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[1],
        city: 'Ciudad 2',
        address: 'Dirección 2'
    },
    {
        id: '3',
        name: 'Restaurante Asiatico',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[2],
        city: 'Ciudad 3',
        address: 'Dirección 3'
    },
    {
        id: '4',
        name: 'Restaurante Europeo',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[3],
        city: 'Ciudad 4',
        address: 'Dirección 4'
    },
    {
        id: '5',
        name: 'Restaurante Norteamericano',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[4],
        city: 'Ciudad 5',
        address: 'Dirección 5'
    },
    {
        id: '6',
        name: 'Restaurante Oceánico',
        image: 'https://placehold.co/600x400',
        country: COUNTRIESDATA[5],
        city: 'Ciudad 6',
        address: 'Dirección 6'
    },
];
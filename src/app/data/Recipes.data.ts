import { Recipe } from "../models/Recipe.model";
import { CULTUREDATA } from "./Culture.data";

export const Recipes: Recipe[] = [
    {
        id: '1',
        name: 'Receta Africana',
        image: 'https://placehold.co/600x400',
        ingredients: [
            {
                name: 'Ingrediente 1',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 2',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 3',
                amount: "500gr"

            },
            {
                name: 'Ingrediente 4',
                amount: "500gr"
            }
        ],
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        culture: CULTUREDATA[0],
        country: CULTUREDATA[0].countries[0],
    },
    {
        id: '1',
        name: 'Receta Latinoamericana',
        image: 'https://placehold.co/600x400',
        ingredients: [
            {
                name: 'Ingrediente 1',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 2',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 3',
                amount: "500gr"

            },
            {
                name: 'Ingrediente 4',
                amount: "500gr"
            }
        ],
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        culture: CULTUREDATA[1],
        country: CULTUREDATA[1].countries[1],
    },
    {
        id: '1',
        name: 'Receta Asiatica',
        image: 'https://placehold.co/600x400',
        ingredients: [
            {
                name: 'Ingrediente 1',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 2',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 3',
                amount: "500gr"

            },
            {
                name: 'Ingrediente 4',
                amount: "500gr"
            }
        ],
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        culture: CULTUREDATA[2],
        country: CULTUREDATA[2].countries[0],
    },
    {
        id: '1',
        name: 'Receta Europea',
        image: 'https://placehold.co/600x400',
        ingredients: [
            {
                name: 'Ingrediente 1',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 2',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 3',
                amount: "500gr"

            },
            {
                name: 'Ingrediente 4',
                amount: "500gr"
            }
        ],
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        culture: CULTUREDATA[3],
        country: CULTUREDATA[3].countries[1],
    },
    {
        id: '1',
        name: 'Receta Oceanica',
        image: 'https://placehold.co/600x400',
        ingredients: [
            {
                name: 'Ingrediente 1',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 2',
                amount: "500gr"
            },
            {
                name: 'Ingrediente 3',
                amount: "500gr"

            },
            {
                name: 'Ingrediente 4',
                amount: "500gr"
            }
        ],
        steps: ["Paso 1", "Paso 2", "Paso 3"],
        culture: CULTUREDATA[4],
        country: CULTUREDATA[4].countries[0],
    }
]
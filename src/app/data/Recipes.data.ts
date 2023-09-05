import { Recipe } from "../models/Recipe.model";
import { CULTUREDATA } from "./Culture.data";

export const Recipes: Recipe[] = [
    {
        RecipeId: '1',
        name: 'Receta Africana',
        description: 'Esta es una receta africana, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        image: 'https://www.cubaneandoconmario.com/wp-content/uploads/2017/01/quimbomb%C3%B32.jpg',
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
        recipeUrl: ""
    },
    {
        RecipeId: '2',
        name: 'Receta Latinoamericana',
        description: "Esta es una receta latinoamericana, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
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
        recipeUrl: ""
    },
    {
        RecipeId: '3',
        name: 'Receta Asiatica',
        description: "Esta es una receta asiatica, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
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
        recipeUrl: ""
    },
    {
        RecipeId: '4',
        name: 'Receta Europea',
        description: "Esta es una receta europea, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",        image: 'https://placehold.co/600x400',
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
        recipeUrl: ""
    },
    {
        RecipeId: '5',
        name: 'Receta Oceanica',
        description: "Esta es una receta oceanica, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
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
        recipeUrl: ""
    }
]

const urlGenerator = (recipes: Recipe[]) => {
    const Recipes = [...recipes];
    Recipes.forEach(recipe => {
        recipe.recipeUrl = recipe.name.replace(/\s/g, '-').toLowerCase();
    });
    return Recipes;
}

urlGenerator(Recipes);


// import '../css/app.css'
import TodayRecipes from './components/TodayRecipes.svelte';
import TmrRecipes from './components/TmrRecipes.svelte';
import IdeasRecipes from './components/IdeasRecipes.svelte';
import { renderHeaderFooter } from './utils';
import { mount } from 'svelte';

const Today = mount(TodayRecipes, {
  target: document.getElementById('mainToday'),
})

const Tmr = mount(TmrRecipes, {
  target: document.getElementById('mainTmr'),
})

const Ideas = mount(IdeasRecipes, {
  target: document.getElementById('mainTmr'),
})

// add to favorites button functions
let favorites = [];

function addToFavorites(recipe) {
    if (!favorites.some(fav => fav.id === recipe.id)) {
        favorites.push(recipe);
        console.log("Recipe added to favorites:", recipe);
    } else {
        console.log("Recipe is already in favorites.");
    }
    console.log("Current favorites:", favorites);
}

// Global array to store favorite recipes
let favorites = [];

function addToFavorites(recipe) {
    if (!favorites.some(fav => fav.id === recipe.id)) {
        favorites.push(recipe);
        console.log("Recipe added to favorites:", recipe);
    } else {
        console.log("Recipe is already in favorites.");
    }
    console.log("Current favorites:", favorites);
}

// Wait for DOM to load before adding event listener
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector("#addButton");

    if (addButton) {
        addButton.addEventListener("click", function(event) {
            console.log("Button clicked!"); // Debugging log

            // Find the closest recipe element **inside the click event**
            const recipeElement = event.target.closest(".recipe");

            if (recipeElement) {
                // Get recipe details
                const recipe = {
                    id: recipeElement.dataset.id,  // Assuming the recipe ID is stored in a data attribute
                    title: recipeElement.querySelector(".recipe-title").textContent,
                    image: recipeElement.querySelector("img").src
                };

                addToFavorites(recipe);
            } else {
                console.error("No recipe element found!");
            }
        });
    } else {
        console.error("Button with ID 'addButton' not found!");
    }
});

// document.querySelector("#addButton").addEventListener("click", function(event) {
//     // Find the closest recipe element
//     const recipeElement = event.target.closest(".recipe");
    
//     if (recipeElement) {
//         // Get recipe details
//         const recipe = {
//             id: recipeElement.dataset.id,  // Assuming the recipe ID is stored in a data attribute
//             title: recipeElement.querySelector(".recipe-title").textContent,
//             image: recipeElement.querySelector("img").src
//         };

//         addToFavorites(recipe);
//     }
// });

renderHeaderFooter();
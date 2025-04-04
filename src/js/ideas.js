const api = 'https://api.spoonacular.com';
const key = '6193542d0b6b4048852bcb497aecb59b';

import { renderHeaderFooter } from "./utils";
import { mount } from 'svelte';
import MealFilter from './components/MealFilter.svelte';

const mealFilter = mount(MealFilter, {
    target: document.getElementById('mealFilter'),
  })

renderHeaderFooter();

/*  params from api
        Search Recipes
        Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.
     * @param {String} query The (natural language) search query.
     * @param {String} [type] The type of recipe. See a full list of supported meal types.
     * @param {String} [tags] The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.
*/

// Function to display results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    results.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.textContent = recipe.title;
        resultsDiv.appendChild(recipeDiv);
    });
}

 //Function to fetch recipes based on a type
async function fetchRecipesByType(type) {
    const url = `${api}/recipes/complexSearch?type=${type}&apiKey=${key}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// Add event listener to the button
document.getElementById('filterButton').addEventListener('click', function() {
    const type = this.getAttribute('data-type'); // Get the type from the button's data attribute
    fetchRecipesByType(type);
})    
    
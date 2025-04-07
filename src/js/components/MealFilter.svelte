<script>
    import { onMount } from 'svelte';
    import { favorites } from '../stores.js';

    let recipes = [];
    const apiKey = 'aa6ac9f986a6471a92070b0c7e328fec'; // Hardcoded API key

    async function fetchRecipesByType(type) {
        try {
            console.log('Fetching recipes for type:', type);
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=${apiKey}`
            );
            const data = await response.json();
            console.log('API Response:', data); // Debugging
            recipes = data.results || [];
            console.log('Recipes:', recipes); // Debugging
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    onMount(async () => {
        try {
            console.log('Fetching random recipes...');
            recipes = await fetch(
                `https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`
            ).then(res => res.json()).then(data => data.recipes || []);
            console.log('Random Recipes:', recipes); // Debugging
        } catch (error) {
            console.error('Error fetching random recipes:', error);
        }
    });

    function addToFavorites(recipe) {
    favorites.update((currentFavorites) => {
      if (!currentFavorites.some(fav => fav.title === recipe.title)) {
        return [...currentFavorites, recipe]; 
      }
      console.log('currentFavorites:', currentFavorites);
      return currentFavorites;
    });
  } 
</script>

<main>
    <div class="filterButton">
        <button type="button" on:click={() => fetchRecipesByType('breakfast')}>Breakfast</button>
        <button type="button" on:click={() => fetchRecipesByType('main course')}>Main Course</button>
        <button type="button" on:click={() => fetchRecipesByType('dessert')}>Dessert</button>
    </div>
    <p>Here are some ideas for your next meal:</p>
    <div id="recipeContainer">
    <div id="results">
        {#if recipes.length > 0}
            {#each recipes as recipe}
            <div class="recipe">
                <img src={recipe.image} alt={recipe.title} />
                  <h2>{recipe.title}</h2>
                  <div class="buttonGroup">
                    <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
                    <button class="addButton" on:click={() => addToFavorites(recipe)}>Add to Favorites</button>
                  </div>
                  </div>
            {/each}
        {:else}
            <p>No recipes found.</p>
        {/if}
    </div></div>
</main>

<style>
    body {
        font-family: 'Zain', italic;
    }
    h2 {
        color: aliceblue;
    }
    .filterButton button {
        background-color: #151c4b;
        border-color: aliceblue;
        border-radius: 20px;
        color: aliceblue;
        height: min-content;
        padding: 10px;
        font-weight: 600;
        font-size: large;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3%;
    }
</style>
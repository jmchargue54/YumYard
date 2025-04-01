<script>
  import { onMount } from 'svelte';
  import { getRandomRecipes } from '../api.js';

  let recipes = [];
  let favorites = [];

  onMount(async () => {
      recipes = await getRandomRecipes();
  });

  function addToFavorites(recipe) {
    if (!favorites.find(fav => fav.id === recipe.id)) {
      favorites = [...favorites, recipe]; // Ensure reactivity
      console.log(favorites);
    }
  }
</script>

<main>
  <h2>Today</h2>
  <div id="recipeContainer">
      <!-- {#each recipes as recipe}
          <div class="recipe">
            <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
              <button id="addButton" on:click={() => addToFavorites(recipe)}>Add to Favorites</button>
            </div>
      {/each} -->
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>

    </div>
</main>

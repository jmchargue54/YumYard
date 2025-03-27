<script>
  import { onMount } from 'svelte';
  import { getRandomRecipes } from './js/api.js';
  import './css/main.css';

  let recipes = [];

  onMount(async () => {
      recipes = await getRandomRecipes();
  });
</script>

<main>
  <h1>Random Recipes</h1>
  <div id="recipe-container">
      {#each recipes as recipe}
          <div class="recipe">
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <!-- <p>{@html recipe.summary}</p> -->
              <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
          </div>
      {/each}
  </div>
</main>

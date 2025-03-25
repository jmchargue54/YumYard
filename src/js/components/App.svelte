<script>
  import { onMount } from 'svelte';
  import { getRandomRecipes } from '../api.js';

  let recipes = [];


  onMount(async () => {
      recipes = await getRandomRecipes();
  });
</script>

<main>
  <div id="recipe-container">
      <!-- {#each recipes as recipe}
          <div class="recipe">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <p>{@html recipe.summary}</p>
              <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
          </div>
      {/each} -->
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>

    </div>
</main>

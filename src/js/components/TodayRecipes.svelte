<script>
  import { onMount } from 'svelte';
  import { getRandomRecipes } from '../api.js';

  let recipes = [];


  onMount(async () => {
      recipes = await getRandomRecipes();
  });
</script>

<main>
  <h2>Today</h2>
  <div id="recipeContainer">
      {#each recipes as recipe}
          <div class="recipe">
            <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
              <button id="addButton">Add to Favorites</button>
            </div>
      {/each}
      <!-- <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div>
      <div class="recipe">Recipe Here</div> -->

    </div>
</main>

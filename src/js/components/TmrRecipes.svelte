<script>
    import { onMount } from 'svelte';
    import { getRandomRecipes } from '../api.js';
    import { favorites } from '../stores.js';

    let recipes = [];
  
    onMount(async () => {
        recipes = await getRandomRecipes();
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
    <h2>Tommorrow</h2>
        <div id="recipeContainer">
            <!-- {#each recipes as recipe}
                <div class="recipe">
                  <img src={recipe.image} alt={recipe.title} />
                    <h2>{recipe.title}</h2>
                    <div class="buttonGroup">
                      <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
                      <button class="addButton" on:click={() => addToFavorites(recipe)}>Add to Favorites</button>
                    </div>
                  </div>
            {/each} -->
        <div class="recipe">Recipe Here</div>
        <div class="recipe">Recipe Here</div>
        <div class="recipe">Recipe Here</div>
        <div class="recipe">Recipe Here</div>
        <div class="recipe">Recipe Here</div>
  
      </div>
  </main>
  
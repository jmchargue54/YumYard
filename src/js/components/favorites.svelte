<script>
    import { favorites } from '../stores.js';

    function RemoveFromFavorites(recipe) {
        favorites.update((currentFavorites) => {
            return currentFavorites.filter(fav => fav.title !== recipe.title);
        });
    }
  </script>
  
  <ul>
    {#each $favorites as recipe}
      <div class="recipe">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
          <button class="removeButton" on:click={() => RemoveFromFavorites(recipe)}>Remove from Favorites</button>
      </div>
    {/each}
  </ul>
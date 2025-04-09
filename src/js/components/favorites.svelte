<script>
    import { favorites } from '../stores.js';
    import { onMount } from 'svelte';
    import { checkLogin } from '../auth.mjs';
    import { userStore } from '../stores.svelte.js';

    let isLoggedIn;

    $: isLoggedIn = $userStore?.isLoggedIn;

    onMount(async () => {
      await checkLogin();
      if (!isLoggedIn) {
        window.location.href = "/html/login.html"; 
      }
    });

    function RemoveFromFavorites(recipe) {
        favorites.update((currentFavorites) => {
            return currentFavorites.filter(fav => fav.title !== recipe.title);
        });
    }
  </script>
  <div id="recipeContainer">
    {#if $favorites.length === 0}
      <p>No favorite recipes found.</p>
    {/if}

    {#each $favorites as recipe}
      <ul>
        <div class="recipe">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <div class="buttonGroup">
            <a href={recipe.sourceUrl} target="_blank">View Recipe</a>
            <button class="removeButton" on:click={() => RemoveFromFavorites(recipe)}>Remove from Favorites</button>
          </div>
        </div>
      </ul>
    {/each}
  </div>

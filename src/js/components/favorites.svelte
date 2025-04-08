<script>
    import { onMount } from 'svelte';
    import { checkLogin } from "../auth.mjs";
    import { userStore } from "../stores.svelte.js";
    // import { supabase } from "../supabaseClient.mjs"; // Adjust the path as necessary
    import { favorites } from '../stores.js';
    import { loadFavoritesForUser, removeFavorite } from '../favoritesService.js';

    onMount(async () => {
      await checkLogin();
      if (!userStore.isLoggedIn) {
        localStorage.setItem("redirectAfterLogin", window.location.pathname);
        window.location.href = "/html/login.html";
        return;
      }

      await loadFavoritesForUser(userStore.user.id);
    });

    function RemoveFromFavorites(recipe) {
      removeFavorite(recipe, userStore.user.id);
    }
  </script>

  <div id="recipeContainer">
    {#if $favorites.length === 0}
      <p>You have no favorites yet.</p>
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

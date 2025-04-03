<script>
    import { favorites } from '../stores.js';
  </script>
  
  <h2>Favorites List</h2>
  <ul>
    {#each $favorites as recipe}
      <li>
        <img src={recipe.image} alt={recipe.title} width="50" />
        <a href={recipe.sourceUrl} target="_blank">{recipe.title}</a>
      </li>
    {/each}
  </ul>
  
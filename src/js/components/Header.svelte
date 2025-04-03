<script>
  import { onMount } from 'svelte';

  let nav_button;
  let navlist;

  onMount(() => {
    nav_button = document.getElementById("nav-button");
    navlist = document.querySelector(`nav ul`);

    nav_button.addEventListener('click', () => {
      nav_button.classList.toggle("open");
      navlist.classList.toggle("open");
    });
  });
</script>

<style>
  div h1 {
    font-family: var(--main-font); 
    text-align: center;
    color: var(--main-color);
    font-size: 50px;
  }
  nav {
      display: flex;
      flex-direction: row;
      gap: 50px;
      text-align: center;
      justify-content: center;
      font-family: var(--body-font);
      a {
          font-size: 20px;
          padding: 5px;
          transition: background-color 0.3s ease;
          text-decoration: none;
          color: var(--main-color);
      }
      ul{
        display:none;
        padding-inline-start: 0px;
        list-style: none;}
  }
  #nav-button::before{
  content: "≡";
  }

  #nav-button.open::after{
  content: "X";
  }

  nav ul.open{
  display: flex;
  flex-direction: column;
  }

  nav ul li{
    text-align: center;
    margin: 10px;
    a{
      color: black;
      text-decoration: none;
      padding: 5px;
    }
  }
</style>

<div>
  <h1>Random Recipes</h1>
  <button id="nav-button" class="nav"></button>
  <nav class="navigation">
    <ul>
      <li><a href="index.html">Main</a></li>
      <li><a href="src/html/planner.html">Planner</a></li>
      <li><a href="src/html/favorite.html">Favorites</a></li>
      <li><a href="src/html/ideas.html">Ideas</a></li>
    </ul>
    
  </nav>
</div>

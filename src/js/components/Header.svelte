<script>
  import { onMount } from 'svelte';

  let nav_button;
  let navlist;

  const handleClick = () => {
      nav_button.classList.toggle("open");
      navlist.classList.toggle("open");
    };
  onMount(() => {});
</script>

<style>
  div h1 {
    font-family: var(--main-font); 
    text-align: center;
    color: var(--main-color);
    font-size: 50px;
    width: fit-content;
    margin: 0 auto;
    margin-top: .5em;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: var(--body-font);
    margin-right: 60px;
    a {
        font-size: 20px;
        padding: 5px;
        transition: background-color 0.3s ease;
        text-decoration: none;
        color: var(--main-color);
        width: fit-content;
    }
  }
  @media (max-width: 500px) {
    nav {
      align-items: center;
      margin: 0;
    }

    nav ul{
    display: none;
    padding-inline-start: 0px;
    }

    :global(nav ul.open){
    display: flex;
    flex-direction: column;
    }

    ul{
    list-style: none;
    }

    nav ul li{
      text-align: center;
      margin: 10px;
    }

    nav ul li a{
      color: black;
      text-decoration: none;
      padding: 5px;
    }
  }
  @media (min-width: 501px){
    #nav-button{
      display: none;
    }
    nav ul {
      list-style: none;
    }
  }
</style>

<div>
  <h1>Yum Yard</h1>
  <button id="nav-button" bind:this={nav_button} class="nav-button" onclick={handleClick}>≡</button>
  <nav>
    <ul bind:this={navlist}>
      <li><a href="/index.html">Main</a></li>
      <li><a href="/html/planner.html">Planner</a></li>
      <li><a href="/html/favorite.html">Favorites</a></li>
      <li><a href="/html/ideas.html">Ideas</a></li>
    </ul>
  </nav>
</div>
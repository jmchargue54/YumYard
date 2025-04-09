<script>
    import Login from "./Login.svelte";
    // import UserProfile from "./UserProfile.svelte";
    import { route, userStore } from "../stores.svelte.js";
    import { checkLogin, login } from "../auth.mjs";
    import { onMount } from "svelte";
    import Favorites from "../stores";
    import Planner from "./Planner.svelte";
    import Ideas from './Ideas.svelte';
  
    let urlParams = $state();
  
    const setRoute = () => {
      // see if there were any query params sent.
      const [hash, params] = window.location.hash.split("?");
      // if so lets turn them into a URLSearchParams object so we can use params.get(param)
      if (params) urlParams = new URLSearchParams("?" + params);
      if (hash === "#profile" && !userStore.isLoggedIn) {
        window.location.hash = "#login";
      } else {
        route.pathname = hash;
      }
    };
    window.addEventListener("popstate", setRoute);
    async function init() {
      await checkLogin();
      setRoute();
    }
  
    onMount(init);
  </script>
  
  <main>
    <h1>Sup demo</h1>
  
    <div class="card">
    {#if $userStore.isLoggedIn}
      {#if $route.pathname == "/html/index.html" || route.pathname == ""}
        <h2>Home</h2>
        <p>This is the home page.</p>
      {:else if $route.pathname == "/html/favorites.html"}
        <h2>Posts</h2>
        <Favorites />
      {:else if $route.pathname == "/html/planner.html"}
        <Planner />
      {:else if $route.pathname == "/html/ideas.html"}
        <Ideas />
      {:else}
        <h2>404</h2>
        <p>Page not found.</p>
      {/if}
    {/if}
    {:else}
        <Login />
    {/else}
    </div>
  </main>
  
  <style>
  </style>
  
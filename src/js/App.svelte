<script>
    import Login from "./components/Login.svelte";
    import UserProfile from "./components/UserProfile.svelte";
    import { userStore } from "./stores.svelte.js";
    import { checkLogin } from "./auth.mjs";
    import { onMount } from "svelte";

    import TodayRecipes from './components/TodayRecipes.svelte';
    import TmrRecipes from './components/TmrRecipes.svelte';
    import IdeasRecipes from './components/IdeasRecipes.svelte';
    // import Planner from './components/Planner.svelte';
  
    // let urlParams = $state(); // not sure what this is from — do you have a $state helper or store?
  
    let route = {
      pathname: window.location.pathname
    };
  
    function setRoute() {
      route.pathname = window.location.pathname;
    }
  
    window.addEventListener("popstate", setRoute);
  
    async function init() {
      await checkLogin();

      if (!userStore.isLoggedIn && (route.pathname === "/" || route.pathname === "/index.html")) {
        window.location.href = "/html/login.html";
    }

      setRoute();
    }
  
    onMount(init);
  </script>  
  <main>
    <!-- <Navbar /> -->
    <h1>Sup demo</h1>
  
    <div class="card">
      {#if route.pathname == "/index.html" || route.pathname == "/"}
        <TodayRecipes />
        <TmrRecipes />
        <IdeasRecipes />
      <!-- {:else if route.pathname == "/html/planner.html"} -->

      {:else if route.pathname == "/html/favorite.html"}
        <h2>Favorite Page</h2>
      {:else if route.pathname == "/html/ideas.html"}
        <h2>Ideas Page</h2>
      <!-- {:else if route.pathname == "#profile"}
        <UserProfile /> -->
      {:else}
        <h2>404</h2>
        <p>Page not found.</p>
      {/if}
    </div>
  </main>
  
  <style>
  </style>
  
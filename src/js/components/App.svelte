<script>
    import Login from "./Login.svelte";
    import UserProfile from "./UserProfile.svelte";
    import { userStore } from "../stores.svelte.js";
    import { checkLogin } from "../auth.mjs";
    import { onMount } from "svelte";
  
    let route = {
      pathname: window.location.pathname
    };
  
    function setRoute() {
      route = { ...route, pathname: window.location.pathname };
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
    <h1>Sup demo</h1>
  
    <div class="card">
        {#if route.pathname === "/index.html" || route.pathname === "/"}
          <h2>Main</h2>
          <p>This is the main page.</p>
        
        {:else if route.pathname === "/html/planner.html"}
          <h2>Planner</h2>
          <p>This is the planner page.</p>
          <!-- You can add a <Planner /> component or content here -->
      
        {:else if route.pathname === "/html/favorite.html"}
          <h2>Favorites</h2>
          <p>This is the favorites page.</p>
          <!-- <Favorites /> if you're using components -->
      
        {:else if route.pathname === "/html/ideas.html"}
          <h2>Ideas</h2>
          <p>This is the ideas page.</p>
          <!-- <Ideas /> if component-based -->
      
        {:else}
          <h2>404</h2>
          <p>Page not found.</p>
        {/if}
      </div>
        </main>
  
  <style>
  </style>
  
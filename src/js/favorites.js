import { renderHeaderFooter } from "./utils";
import { mount } from "svelte";
import Favorites from "./components/favorites.svelte";
// import { protectPage } from "./auth-check.js";

// protectPage();

const fav = mount(Favorites, {
    target: document.getElementById('favoriteListSection'),
  })
  

renderHeaderFooter();
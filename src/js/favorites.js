import { renderHeaderFooter } from "./utils";
import { mount } from "svelte";
import Favorites from "./components/favorites.svelte";

const fav = mount(Favorites, {
    target: document.getElementById('favoriteListSection'),
  })
  

renderHeaderFooter();
import { writable } from 'svelte/store';

// Load favorites from localStorage, or default to an empty array
const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const favorites = writable(storedFavorites);

// Subscribe to the store and update localStorage whenever it changes
favorites.subscribe(value => {
  localStorage.setItem('favorites', JSON.stringify(value));
});

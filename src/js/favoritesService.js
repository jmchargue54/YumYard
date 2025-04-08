import { supabase } from './supabaseClient.mjs';
import { favorites } from './stores.js';

export async function loadFavoritesForUser(userId) {
  const { data, error } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Error loading favorites:', error.message);
    return;
  }

  favorites.set(data); // store them in the Svelte store
}

export async function addFavorite(recipe, userId) {
  const { data, error } = await supabase
    .from('favorites')
    .insert([{ 
      user_id: userId,
      title: recipe.title,
      image: recipe.image,
      source_url: recipe.sourceUrl
    }]);

  if (error) {
    console.error('Error adding favorite:', error.message);
    return;
  }

  favorites.update(favs => [...favs, data[0]]);
}

export async function removeFavorite(recipe, userId) {
  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', userId)
    .eq('title', recipe.title);

  if (error) {
    console.error('Error removing favorite:', error.message);
    return;
  }

  favorites.update(favs => favs.filter(f => f.title !== recipe.title));
}

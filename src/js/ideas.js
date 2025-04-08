const api = 'https://api.spoonacular.com';
const key = import.meta.env.SPOONACULAR_API_KEY || 'aa6ac9f986a6471a92070b0c7e328fec';

import { renderHeaderFooter } from "./utils";
import { mount } from 'svelte';
import MealFilter from './components/MealFilter.svelte';

const mealFilter = mount(MealFilter, {
    target: document.getElementById('mealFilter'),
});

renderHeaderFooter();
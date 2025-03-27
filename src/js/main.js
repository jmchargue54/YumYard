// import '../css/app.css'
import TodayRecipes from './components/TodayRecipes.svelte';
import TmrRecipes from './components/TmrRecipes.svelte';
import IdeasRecipes from './components/IdeasRecipes.svelte';
import { renderHeaderFooter } from './utils';
import { mount } from 'svelte';

const Today = mount(TodayRecipes, {
  target: document.getElementById('mainToday'),
})

const Tmr = mount(TmrRecipes, {
  target: document.getElementById('mainTmr'),
})

const Ideas = mount(IdeasRecipes, {
  target: document.getElementById('mainTmr'),
})


renderHeaderFooter();
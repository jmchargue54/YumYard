import Login from './components/Login.svelte';
import { mount } from 'svelte';
import { renderHeaderFooter } from './utils';

const login = mount(Login, {
    target: document.getElementById('login'),
  })

renderHeaderFooter();
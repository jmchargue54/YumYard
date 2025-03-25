// import '../css/app.css'
import App from './components/App.svelte';
import { renderHeaderFooter } from './utils';
import { mount } from 'svelte';

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app


renderHeaderFooter();
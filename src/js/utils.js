import Header from './components/Header.svelte';
import Footer from './components/Footer.svelte';
import { mount } from 'svelte';

export function renderHeaderFooter() {
  const header = mount(Header, {
    target: document.querySelector('#indexHeader')
  });
  const footer = mount(Footer,{
    target: document.querySelector("#indexFooter")
  });
}

import Login from "./components/Login.svelte";
import { mount } from "svelte";

const login = mount(Login, {
    target: document.getElementById("login")
  });
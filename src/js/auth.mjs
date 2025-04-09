import { supabase } from "./supabaseClient.mjs";
import { userStore, route } from "./stores.svelte.js";

export async function signUp(user) {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password
    });
    if (error) throw error;
    return data;
  }
  
  export async function login(user) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password
    });
    if (error) throw error;
  
    userStore.set({ isLoggedIn: true, user: data.user });    userStore.user = data.user;
    route.set({ pathname: "/html/index.html" });  
    return data;
  }
  
export async function checkLogin() {
  const {
    data: { session },
    error
  } = await supabase.auth.getSession();

 if (session) {
    userStore.set({ isLoggedIn: true, user: session.user }); // ✅
  } else {
    userStore.set({ isLoggedIn: false, user: null }); // ✅
  }  console.log(session);
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  userStore.set({ isLoggedIn: false, user: null });
}

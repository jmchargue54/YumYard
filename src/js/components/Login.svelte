<script>
    import { signUp, login } from "../auth.mjs";
    import '/css/login.css';
    
    // import { userStore } from "./stores.svelte.js";
    let email = "";
    let password = "";
    let loading = false;
    let errorMessage = "";
  
    async function handleSignup() {
        try {
            loading = true;
            await signUp({ email, password });
        } catch (err) {
            errorMessage = err.message;
        } finally {
            loading = false;
        }
    }

    async function handleLogin(e) {
        e.preventDefault();
        try {
            loading = true;
            await login({ email, password });
        } catch (err) {
            errorMessage = err.message;
        } finally {
            loading = false;
        }
    }
  </script>
  
  <p>Sign in Below</p>
  <form on:submit={handleLogin}>
    <p>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" bind:value={email}/>
    </p>
    <p>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" bind:value={password}/>
    </p>
    {#if errorMessage}
      <p>{errorMessage}</p>
    {/if}
    <button disabled={loading}>Login</button>
    <button type="button" disabled={loading} on:click={handleSignup}>Signup</button>
  </form>
  
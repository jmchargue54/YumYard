<script>
  import { signUp, login } from "../auth.mjs";
  import { userStore } from "../stores.svelte.js";

  let email = "";
  let password = "";
  let loading = false;
  let errorMessage = "";

  async function handleSignup(e) {
    try {
      loading = true;
      const { error } = await signUp({ email, password });
      if (error) {
        throw error.message;
      }

      // Optional: redirect or auto-login after signup
      window.location.href = "/index.html";
    } catch (err) {
      errorMessage = err;
    } finally {
      loading = false;
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      loading = true;
      const { error } = await login({ email, password });
      if (error) {
        throw error.message;
      }

      // Redirect to main page on successful login
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/index.html";
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirectPath;
    } catch (err) {
      errorMessage = err;
    } finally {
      loading = false;
    }
  }
</script>

<p>Sign in Below</p>
<form on:submit={handleLogin}>
  <p>
    <label for="email">Email</label>
    <input type="text" id="email" name="email" bind:value={email} />
  </p>
  <p>
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      bind:value={password}
    />
  </p>
  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}
  <button disabled={loading}>Login</button>
  <button type="button" disabled={loading} on:click={handleSignup}>
    Signup
  </button>
</form>

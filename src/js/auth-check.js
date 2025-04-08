import { checkLogin } from "./auth.mjs"; // or wherever your actual logic is

export async function protectPage() {
  const isLoggedIn = await checkLogin();

  if (!isLoggedIn) {
    window.location.href = "/html/login.html"; // Redirect to login
  }
}

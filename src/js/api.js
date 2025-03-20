const api = 'https://api.spoonacular.com';
const key = '6193542d0b6b4048852bcb497aecb59b'; // Jenna's API key

export async function getRandomRecipes(number = 5) {
    try {
        const response = await fetch(`${api}/recipes/random?apiKey=${key}&number=${number}`);
        const data = await response.json();
        return data.recipes; // Return recipes to be used in Svelte
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}
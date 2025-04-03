const api = 'https://api.spoonacular.com';
// const key = '6193542d0b6b4048852bcb497aecb59b'; // Jenna's API key
//const key = 'aa6ac9f986a6471a92070b0c7e328fec'; //Allie's API Key
const key = 'a9c6cb67c6fa482790fe19445e2aba8d'; //Sadie's API Key

export async function getRandomRecipes(number = 2) {
    try {
        const response = await fetch(`${api}/recipes/random?apiKey=${key}&number=${number}`);
        const data = await response.json();
        return data.recipes; // Return recipes to be used in Svelte
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}
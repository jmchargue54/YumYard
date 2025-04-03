<script>
    let favorites = [];

    function addToFavorites(recipe) {
        if (!favorites.find(fav => fav.id === recipe.id)) {
        favorites = [...favorites, recipe]; // Ensure reactivity
        console.log(favorites);
        }
    }
</script>
<script>
    import { onMount } from 'svelte';
    import { getRandomRecipes } from '../api.js';
    let recipes = [];
    onMount(async () => {
        recipes = await getRandomRecipes();
    });
</script>

<body>
    <main>
    <h2>Ideas</h2>
    <div class="filterButton">
        <button type="button" data-type="breakfast">Breakfast</button>
        <button type="button" data-type="mainCourse">Main Course</button>
        <button type="button" data-type="dessert">Dessert</button>
    </div>
    <p>Here are some ideas for your next meal:</p>
    </main>
</body>


<style>
    /* @import './universal.css'; */
    body{ font-family: 'Zain', italic; }
    h2{color:aliceblue;}
    .filterButton button{
        background-color: #151c4b;
        border-color: aliceblue;
        border-radius: 20px;
        color: aliceblue;
        height: min-content;
        padding: 10px;
        font-weight: 600;
        font-size: large;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3%;
    }
</style>
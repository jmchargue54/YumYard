import { renderHeaderFooter } from "./utils";
import { mount } from "svelte";
import Planner from "./components/Planner.svelte";

const planner = mount(Planner, {
    target: document.getElementById("planner")
});

renderHeaderFooter();

// document.getElementById('dropbtn').addEventListener('click', function() {
//     let dropContent = document.getElementById('dropContent');
//     if (dropContent.style.display === 'none' || dropContent.style.display === '') {
//         dropContent.style.display = 'block';
//         populateDropdown();
//     } else {
//         dropContent.style.display = 'none';
//     }
// });

// function populateDropdown() {
//     let dropdown = document.getElementById('dropContent');
//     dropdown.innerHTML = '';

//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//     favorites.forEach((recipe, index) => {
//         if (!recipe || !recipe.title) return;

//         let a = document.createElement('a');
//         a.href = '#';
//         a.textContent = recipe.title;
//         a.style.display = 'block';
//         a.style.padding = '12px 16px';
//         a.style.textDecoration = 'none';
//         a.style.color = 'black';

//         a.addEventListener('click', () => {
//             addRecipeToPlanner(recipe, 'sunday-breakfast-slot');
//             document.getElementById('dropContent').style.display = 'none';
//         });
        
//         dropdown.appendChild(a);
//     });
// }

// function addRecipeToPlanner(recipe, targetSlotId) {
//     const slot = document.getElementById(targetSlotId);
//     if (!slot) return;

//     const recipeCard = document.createElement('div');
//     recipeCard.className = 'recipe';

//     recipeCard.innerHTML = `
//         <img src="${recipe.image}" alt="${recipe.title}" />
//         <h2>${recipe.title}</h2>
//         <div class="buttonGroup">
//             <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
//             <button class="removeBtn">Remove from Planner</button>
//         </div>
//     `;

//     // Add the remove button logic
//     recipeCard.querySelector('.removeBtn').addEventListener('click', () => {
//         slot.removeChild(recipeCard);
//     });

//     slot.appendChild(recipeCard);
// }

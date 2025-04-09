<script>
    import PlannerInput from "./PlannerInput.svelte";

    import { onMount } from 'svelte';
    import { checkLogin } from '../auth.mjs';
    import { userStore } from '../stores.svelte.js';

    onMount(async () => {
      await checkLogin();
      if (!userStore.isLoggedIn) {
        window.location.href = "/html/login.html"; 
      }
    });
</script>

<div class="cards">
    <section class="meal-card">
    <div class="card-header">
        <h3>Sunday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>

        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Monday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Tuesday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Wednesday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Thursday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Friday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
    <section class="meal-card">
    <div class="card-header">
        <h3>Saturday</h3>
    </div>
    <div class="meals">
        <div class="breakfast">
        <h4>Breakfast:</h4>
        <PlannerInput/>
        </div>
        <div class="lunch">
        <h4>Lunch:</h4>
        <PlannerInput/>
        </div>
        <div class="dinner">
        <h4>Dinner:</h4>
        <PlannerInput/>
        </div>
    </div>
    </section>
</div>

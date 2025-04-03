<script>

</script>

<style>
  div h1 {
    font-family: var(--main-font); 
    text-align: center;
    color: var(--main-color);
    font-size: 50px;
    width: fit-content;
    margin: 0 auto;
    margin-top: .5em;
}
nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: var(--body-font);
    margin-right: 60px;
    a {
        font-size: 20px;
        padding: 5px;
        transition: background-color 0.3s ease;
        text-decoration: none;
        color: var(--main-color);
        width: fit-content;
    }
}
@media (max-width: 500px) {
    nav {
      align-items: center;
      margin: 0;
    }
}
</style>

<div>
  <h1>Yum Yard</h1>
  <nav>
    <a href="/index.html">Main</a>
    <a href="/html/planner.html">Planner</a>
    <a href="/html/favorite.html">Favorites</a>
    <a href="/html/ideas.html">Ideas</a>
  </nav>
</div>


<script setup>
import ListeLivre from "./components/ListeLivre.vue";
</script>


<template>
  <h1>
    <img src="./assets/reading.png" alt="lecture" /> Ma petite librairie
    <img src="./assets/petitepile.png" alt="lvres entassés" />
  </h1>
  <h2>Bienvenue sur l'application librairie d'Amélie !</h2>
  <img id="am" src="./assets/dragon.png" alt="à dos de dragon" />
  <img id="bibli" src="./assets/imagebibliotheque.jpg" alt="bibliothèques" />
  <ListeLivre></ListeLivre>
</template>

<style>
#app {
  font-family: Avenir, cursive, fantasy, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgoldenrodyellow;
}

#bibli {
  text-align: center;
}
h1 {
  color: lightcoral;
}

h2 {
  color: white;
  background-color: lightcoral;
}

h3 {
  background-color: orange;
  color: lightgoldenrodyellow;
  border-radius: 40%;
  padding-bottom: 25px;
  padding-top: 15px;
}
button {
  background-color: orange;
  border-color: white;
  border-radius: 40%;
  font-family: cursive;
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
}

li {
  list-style-type: "\1F4D6";
}
</style>

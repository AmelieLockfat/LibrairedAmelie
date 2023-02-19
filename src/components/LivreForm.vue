<script setup>
import { defineEmits, ref } from "vue";
import Livre from "../Livre.js";
const titre = ref("");
const emit = defineEmits(["addL"]);
</script>

<template>
  <h3><img src="../assets/livres.png" /> Ajouter un livre à la librairie :</h3>
  <form @submit.prevent="$emit('addL', titre, prix, qtestock)">
    <input type="text" v-model="titre" placeholder="titre ?" />
    <input type="text" v-model="prix" placeholder="prix ?" />
    <input type="text" v-model="qtestock" placeholder="stock ?" />
    <input type="submit" value="Valider" />
  </form>
</template>

<style>
h3:hover {
  background-color: lightsalmon;
  color: black;
}
</style>
<script setup>
import Livre from "../Livre.js";
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "addstockL", "deleteoneL"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <button @click="$emit('deleteL', livre.id)">Supprimer totalement</button>
    <button @click="$emit('deleteoneL', livre.id)">-</button>
    <button @click="$emit('addstockL', livre.id)">+</button>
  </li>
</template>

<style/>
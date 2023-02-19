<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre.js";
import LivreView from "./LivreView.vue";
import LivreForm from "./LivreForm.vue";
import LivreRecherche from "./LivreRecherche.vue";
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/25/livres";
const listeL = reactive([]);

function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };

  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}

function modifieLivre(livre) {
  console.log(livre);
  // -- faire la chose
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(livre),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
      // actualiser la liste des choses
    })
    .catch((error) => console.log(error));
}

function downStockLivre(id) {
  const fetchOptions = { method: "GET" };
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((livre) => {
      console.log(livre);
      livre.qtestock = livre.qtestock - 1;
      modifieLivre(livre);
    })
    .catch((error) => console.log(error));
}
function upStockLivre(id) {
  const fetchOptions = { method: "GET" };
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((livre) => {
      console.log(livre);
      livre.qtestock = livre.qtestock + 1;
      modifieLivre(livre);
    })
    .catch((error) => console.log(error));
}
function handlerAdd(titre, prix, qtestock) {
  console.log(titre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le libelle de la nouvelle chose est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      titre: titre,
      qtestock: qtestock,
      prix: prix,
    }),
  };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}

function handlerSearch(recherche) {
  const fetchOptions = { method: "GET" };
  const urlsearch =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/25/livres?search=";
  document.getElementById("listeTrouve").innerHTML = "";
  fetch(urlsearch + recherche, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let listeDTrouve = dataJSON;
      let r = "";
      for (let i of listeDTrouve) {
        r +=
          "<li>" +
          i.titre +
          " (Stock :" +
          i.qtestock +
          ") (Prix :" +
          i.prix +
          ")</li>";
      }
      document.getElementById("listeTrouve").innerHTML += r;
    })
    .catch((error) => console.log(error));
}

function getLivre() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // -- vider la liste des choses
      listeL.splice(0, listeL.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Chose
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) =>
        listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}

onMounted(() => {
  getLivre();
});
</script>


<template>
  <LivreForm @addL="handlerAdd"></LivreForm>
  <LivreRecherche @searchL="handlerSearch"></LivreRecherche>
  <h3><img src="../assets/livrestexte.png" /> Liste de livres disponibles :</h3>
  <ul>
    <LivreView
      v-for="livre of listeL"
      :key="livre.id"
      :livre="livre"
      @deleteL="handlerDelete"
      @deleteoneL="downStockLivre"
      @addstockL="upStockLivre"
    />
  </ul>
</template>

<style>
</style>
<template>
  <app-header></app-header>
  <main-list></main-list>
</template>

<script>
import Header from "./components/Header.vue";
import mainList from "./views/mainList.vue";

export default {
  components: {
    appHeader: Header,
    mainList,
  },
};
</script>

<style>
</style>
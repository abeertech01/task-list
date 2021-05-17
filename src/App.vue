<template>
  <app-header></app-header>
  <div class="app">
    <auth-comp></auth-comp>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AuthComp from "./components/AuthComp.vue";
// import mainList from "./views/mainList.vue";

import { provide } from "vue";
import store from "@/store";

export default {
  components: {
    appHeader: Header,
    // mainList,
    AuthComp,
  },
  setup() {
    provide("store", store);
  },
};
</script>

<style lang="scss">
.app {
  padding: 0 15%;
}
</style>
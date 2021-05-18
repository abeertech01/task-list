<template>
  <div class="each-task-page">
    <div class="each-task">
      <div class="sign-part">
        <i class="far fa-circle" v-if="!task.isDone" @click="changeSign"></i>
        <i class="fas fa-check-circle" v-else @click="changeSign"></i>
      </div>
      <div class="task-part">
        <span class="the-task">{{ task.task }}</span>
      </div>
      <!-- <div class="date-part">({{ date }})</div> -->
      <button class="menu-btn" @click="cMenuOpen">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <context-menu :taskId="task.id" class="context-menu" v-if="cMenu"></context-menu>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
import { ref, computed, inject } from "vue";

export default {
  props: ["task"],
  components: {
    ContextMenu,
  },
  setup(props) {
    const store = inject("store");

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = computed(() => {
      const today = new Date();
      const cDate = today.getDate();
      const cMonth = monthNames[today.getMonth()];
      const cYear = today.getFullYear();

      return cDate + " " + cMonth + " " + cYear;
    });

    const changeSign = function () {
      store.methods.makeDone(props.task);
    };

    const cMenu = ref(false);

    const cMenuOpen = function () {
      cMenu.value = !cMenu.value;
    };

    return {
      date,
      changeSign,
      cMenu,
      cMenuOpen,
    };
  },
};
</script>

<style lang="scss">
@import "../sass/variables.scss";

.each-task-page {
  position: relative;
}

.each-task {
  width: 100%;
  background-color: $dark;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 5px;
  color: $green;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 22px auto 40px;
  clear: both;

  .sign-part {
    i {
      cursor: pointer;
    }
  }

  .task-part {
    margin-left: 12px;
  }
  .menu-btn {
    margin-left: 5px;
    height: 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
}

.context-menu {
  position: absolute;
  right: 70px;
  top: 12px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>
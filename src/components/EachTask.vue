<template>
  <div class="each-task-page">
    <div class="each-task">
      <div class="sign-part">
        <i class="far fa-circle" v-if="!task.isDone" @click="changeSign"></i>
        <i class="fas fa-check-circle" v-else @click="changeSign"></i>
      </div>
      <div class="task-part">
        <span class="the-task" v-if="!inputOn">{{ task.task }}</span>
        <input
          type="text"
          v-else
          v-model="taskText"
          @focusout="inputFocusout"
        />
      </div>
      <!-- <div class="date-part">({{ date }})</div> -->
      <button class="menu-btn" @click="cMenuOpen">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <context-menu
      :taskId="task.id"
      :taskDate="task.date"
      @editTask="editAll"
      class="context-menu"
      v-if="cMenu"
    ></context-menu>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
import { ref, inject } from "vue";

export default {
  props: ["task"],
  components: {
    ContextMenu,
  },
  setup(props) {
    const store = inject("store");

    const cMenu = ref(false);
    const taskText = ref("");
    const inputOn = ref(false);

    const changeSign = function () {
      store.methods.makeDone(props.task);
    };

    const cMenuOpen = function () {
      cMenu.value = !cMenu.value;
    };

    const editAll = function () {
      inputOn.value = true;
      taskText.value = props.task.task;
      cMenu.value = false;
    };

    const inputFocusout = function () {
      inputOn.value = false;
    };

    return {
      changeSign,
      cMenu,
      cMenuOpen,
      editAll,
      taskText,
      inputOn,
      inputFocusout,
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
    position: relative;
    margin-left: 12px;

    input {
      position: absolute;
      left: 0;
      // top: -1px;
      border: none;
      outline: none;
      width: 100%;
      color: white;
      background: none;
    }
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
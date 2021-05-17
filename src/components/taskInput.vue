<template>
  <div class="input">
    <i class="far fa-circle" v-if="tap"></i>
    <i class="fas fa-plus" v-else></i>
    <input
      type="text"
      class="newTask"
      id="newTask"
      @focus="focusOn"
      @focusout="focusOff"
      placeholder="Add a task"
      v-model="task"
      @keydown.enter="addTask"
    />
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  setup() {
    const store = inject("store");

    const tap = ref(false);
    const task = ref("");

    const focusOn = function () {
      tap.value = true;
    };

    const focusOff = function () {
      if (task.value === "") {
        tap.value = false;
      } else {
        tap.value = true;
      }
    };

    const addTask = function () {
      store.methods.setTask(task.value);
    };

    return { store, tap, task, focusOn, focusOff, addTask };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.input {
  width: 100%;
  background-color: $green;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 5px;
  color: white;

  .newTask {
    position: relative;
    bottom: 0px;
    left: 12px;
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 20px;
  }

  .newTask::placeholder {
    color: rgba(255, 255, 255, 0.623);
  }
}
</style>
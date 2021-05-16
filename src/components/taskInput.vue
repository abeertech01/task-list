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
      v-model.lazy="task"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
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

    return { tap, task, focusOn, focusOff };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.input {
  width: 60%;
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
<template>
  <div class="main-list">
    <task-input></task-input>
  </div>
</template>

<script>
import taskInput from "../components/taskInput.vue";

export default {
  components: {
    taskInput,
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.main-list {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
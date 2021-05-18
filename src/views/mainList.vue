<template>
  <div class="main-list">
    <each-task
      v-for="task in store.state.allTasks"
      :key="task.id"
      :task="task"
    ></each-task>
    <task-input></task-input>
  </div>
</template>

<script>
import taskInput from "../components/taskInput.vue";
import EachTask from "../components/EachTask.vue";

import { inject } from "vue";

export default {
  components: {
    taskInput,
    EachTask,
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.main-list {
  margin-top: 15px;
  // display: flex;
  // justify-content: center;
}
</style>
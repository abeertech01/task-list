<template>
  <div class="menu">
    <button class="edit" @click="editIt">Edit</button>
    <button class="date">Date</button>
    <button class="delete" @click="deleteIt">Delete</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["taskId"],
  setup(props, context) {
    const store = inject("store");

    const deleteIt = function () {
      store.methods.deleteTask(props.taskId);
    };

    const editIt = function () {
      context.emit("editTask");
    };

    return {
      deleteIt,
      editIt,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.menu {
  width: 200px;

  .edit {
    border-bottom: 1px solid $grey;
    border-radius: 5px 5px 0 0;
  }
  .delete {
    border-top: 1px solid $grey;
    border-radius: 0 0 5px 5px;
  }
}
.menu button {
  padding: 5px 10px;
  text-align: center;
  min-width: inherit;
  display: block;
  width: 100%;
  border: none;
  background-color: #eee;
  font-size: 17px;
  font-weight: 500;
  color: $dark;
}
</style>
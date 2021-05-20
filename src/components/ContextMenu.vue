<template>
  <div class="menu" v-if="showMenu">
    <button class="edit" @click="editIt">Edit</button>
    <button class="date" @click="showDate">Date</button>
    <button class="delete" @click="deleteIt">Delete</button>
  </div>
  <div class="showingDate" v-else>
    <button class="back-btn" @click="getBack">Back</button>
    <div class="the-date">{{ taskDate }}</div>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  props: ["taskId", "taskDate"],
  setup(props, context) {
    const store = inject("store");

    const deleteIt = function () {
      store.methods.deleteTask(props.taskId);
    };

    const editIt = function () {
      context.emit("editTask");
    };

    const showMenu = ref(true);

    const showDate = function () {
      showMenu.value = false;
    };

    const getBack = function () {
      showMenu.value = true;
    };

    return {
      deleteIt,
      editIt,
      showDate,
      getBack,
      showMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";

.menu {
  width: 420px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  .edit {
    border-right: 1px solid $grey;
    border-radius: 5px 0 0 5px;
  }
  .delete {
    border-left: 1px solid $grey;
    border-radius: 0 5px 5px 0;
  }
}
.menu button {
  padding: 5px 10px;
  text-align: center;
  min-width: inherit;
  display: inline;
  width: 140px;
  border: none;
  background-color: #eee;
  font-size: 17px;
  font-weight: 500;
  color: $dark;
}

.showingDate {
  border: 1px solid $grey;
  width: 190px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  .back-btn {
    padding: 5px 10px;
    border: none;
    border-right: 1px solid $grey;
  }

  .the-date {
    display: inline-block;
    padding-left: 18px;
    color: $green;
  }
}
</style>
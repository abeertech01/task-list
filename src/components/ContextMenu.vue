<template>
  <div class="menu">
    <button class="edit">Edit</button>
    <button class="date">Date</button>
    <button class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  // props: ['taskId']
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
  // border-bottom: 1px solid $dark;
  // border-right: 1px solid $dark;
  // border-left: 1px solid $dark;
  background-color: #eee;
  font-size: 17px;
  font-weight: 500;
  color: $dark;
}
</style>
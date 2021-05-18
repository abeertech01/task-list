<template>
  <div class="each-task">
    <div class="sign-part">
      <i class="far fa-circle" v-if="!task.isDone" @click="changeSign"></i>
      <i class="fas fa-check-circle" v-else @click="changeSign"></i>
    </div>
    <div class="task-part">
      <span class="the-task">{{ task.task }}</span>
    </div>
    <div class="date-part">({{ date }})</div>
  </div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  props: ["task"],
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
      // const val = {
      //   id: props.task.id,
      //   isDone: props.task.isDone,
      // };
      store.methods.makeDone(props.task);
    };
    return {
      date,
      changeSign,
    };
  },
};
</script>

<style lang="scss">
@import "../sass/variables.scss";

.each-task {
  width: 100%;
  background-color: $dark;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 5px;
  color: $green;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 22px auto 140px;

  .sign-part {
    i {
      cursor: pointer;
    }
  }

  .task-part {
    margin-left: 12px;
  }
  .date-part {
    padding: 1px 4px;
    border-radius: 5px;
    position: relative;
    bottom: 3px;
    margin-left: 5px;
    text-align: center;
  }
}
</style>
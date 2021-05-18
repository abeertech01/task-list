import { reactive } from 'vue';

const state = reactive({
  allTasks: [],
  id: 1,
  isAuthenticated: false
})

const methods = {
  setTask(val) {
    const newTask = {
      id: state.id++,
      task: val,
      isDone: false
    }
    state.allTasks.push(newTask);
    console.log(state.allTasks);
  },
  makeDone(val) {
    const elIndex = state.allTasks.findIndex((el) => el.id === val.id);
    state.allTasks[elIndex].isDone = !state.allTasks[elIndex].isDone;
  }
}

export default {
  state,
  methods
}
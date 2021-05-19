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
  },
  makeDone(val) {
    const elIndex = state.allTasks.findIndex((el) => el.id === val.id);
    state.allTasks[elIndex].isDone = !state.allTasks[elIndex].isDone;
  },
  deleteTask(id) {
    const elIndex = state.allTasks.findIndex((el) => el.id === id);
    state.allTasks.splice(elIndex, 1);
  }
}

export default {
  state,
  methods
}
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
      task: val
    }
    state.allTasks.push(newTask);
    console.log(state.allTasks);
  }
}

export default {
  state,
  methods
}
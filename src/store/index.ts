import { createStore } from 'vuex'
import TodoModel from './todo'
import UserModel from './user'

const store = createStore({
  modules: {
    todoList: TodoModel,
    user: UserModel
  }
})

export default store

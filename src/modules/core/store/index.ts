import { createStore } from 'vuex'
import TodoRepository from '@/modules/todo/repositories'
import UserRepository from '@/modules/user/repositories'

const store = createStore({
  modules: {
    todoList: TodoRepository,
    user: UserRepository
  }
})

export default store

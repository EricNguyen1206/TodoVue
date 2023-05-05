import { Commit, Dispatch } from 'vuex'

import type { TodoState } from './todo/typings'
import type { UserState } from './user/typings'
interface RootState {
  todoList: TodoState
  user: UserState
}

export interface Model<T> {
  data: T
  loading: boolean
  error: boolean
}

export interface AppAction<T> {
  type: String
  payload: T
}

export interface AppContext<S> {
  dispatch: Dispatch
  commit: Commit
  state: S
  getters: any
  rootState: RootState
  rootGetters: any
}

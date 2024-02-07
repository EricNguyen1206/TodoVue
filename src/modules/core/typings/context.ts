import { Commit, Dispatch } from "vuex"


export interface AppContext<S> {
    dispatch: Dispatch
    commit: Commit
    state: S
    getters: any
    rootState: any
    rootGetters: any
  }
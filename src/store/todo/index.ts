import actions from './actions'
import mutations, { initialState } from './mutations'
import getters from './getters'

const store = {
  state: initialState,
  mutations,
  actions,
  getters
}

export default store

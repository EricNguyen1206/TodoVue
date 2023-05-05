import type { User } from '@/declaration'
import type { UserState } from './typings'

export const initialState = {
  data: {
    username: '',
    password: '',
    index: 0
  },
  fetching: false,
  error: false
}

export default {
  setUser: (state: UserState, payload?: User) => {
    state.data = payload || initialState.data
  }
}

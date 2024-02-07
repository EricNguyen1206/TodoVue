import type { UserState } from './typings'

export default {
  username: (state: UserState) => state.data.username,
  password: (state: UserState) => state.data.password,
  index: (state: UserState) => state.data.index
}

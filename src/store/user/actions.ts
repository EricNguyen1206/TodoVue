import router from '@/router'
import type { AppAction, AppContext } from '../typings'
import { getUserData, postNewUser, updateUser } from '@/services/user'
import { useToast } from 'vue-toast-notification'
import type { UserState } from './typings'
import type { User } from '@/declaration'

export default {
  /**
   * commit addTodo mutation to update store after 1s
   */
  async loginAction(
    { commit }: AppContext<UserState>,
    { payload }: AppAction<{ username: string; password: string }>
  ) {
    try {
      const user = await getUserData(payload.username)
      const $toast = useToast()
      if (user.password === payload.password) {
        $toast.success(`Welcome back ${user.username}`)
        commit('setUser', user)
        sessionStorage.setItem('userData', JSON.stringify(user))
        router.push('/')
      } else {
        $toast.error('Wrong password!')
      }
    } catch (e: any) {
      if (e.message === 'Error: 401') {
        const $toast = useToast()
        $toast.error('Login failed!\nUser not found!')
      }
    }
  },
  /**
   * create new account in database and redirect to login on success
   * or-else error notify to register again
   * {string} username
   * {string} password
   */
  async registerAction(
    _: AppContext<UserState>,
    { payload }: AppAction<{ username: string; password: string }>
  ) {
    const $toast = useToast()
    try {
      await postNewUser(payload.username, payload.password)
      $toast.success('Create account successfully!')
      router.push('/login')
    } catch (e: any) {
      if (e.message === 'Error: 409') {
        $toast.error('Username exited! \nPlease use another name!')
      }
    }
  },
  /**
   * create new account in database and redirect to login on success
   * or-else error notify to register again
   * {string} username
   * {string} password
   */
  async incrementIndexAction(context: AppContext<UserState>) {
    try {
      const newData: User = {
        username: context.getters.username,
        password: context.getters.password,
        index: context.getters.index + 1
      }
      context.commit('setUser', newData)
      await updateUser(newData)
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

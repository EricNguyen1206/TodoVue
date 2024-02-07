import { useToast } from 'vue-toast-notification'

import router from '@/router'
import {
  getUserData,
  postNewUser,
  updateUser
} from '@/modules/user/services/user.service'
import type { UserState } from './typings'
import type { AppAction, AppContext } from '@/modules/core/typings'
import { User } from '../entities'

export default {
  /**
   * commit addTodo mutation to update store after 1s
   */
  async loginAction(
    { commit }: AppContext<UserState>,
    { payload }: AppAction<{ username: string; password: string }>
  ) {
    try {
      console.log('TEST 1')
      const user = await getUserData(payload.username)
      console.log('TEST user', user)
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
      const $toast = useToast()
      if (e.message === 'Error: 401') {
        $toast.error('Login failed!\nUser not found!')
        return
      }
      console.error(e)
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

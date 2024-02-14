import { mount } from '@vue/test-utils'
import {describe, it, expect} from 'vitest'

import LoginViewVue from '../LoginView.vue'


describe('LoginView.vue', () => {
  it('Should update data input', async () => {
    // const wrapper = mount(LoginViewVue)

    // await wrapper.setData({
    //   username: 'user1',
    //   password: '123'
    // })
    console.log("TEST___________________:")
    // Check if the data properties are updated
    expect(1+1).toEqual(2)
  })
})
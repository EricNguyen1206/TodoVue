import { describe, it } from 'node:test'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import LoginViewVue from '@/views/LoginView.vue'

describe('LoginView.vue', () => {
  it('Should update data input', async () => {
    const wrapper = mount(LoginViewVue)

    await wrapper.setData({
      username: 'user1',
      password: '123'
    })

    // Check if the data properties are updated
    expect(wrapper.vm.username).to.equal('user1')
    expect(wrapper.vm.password).to.equal('123')
  })
})

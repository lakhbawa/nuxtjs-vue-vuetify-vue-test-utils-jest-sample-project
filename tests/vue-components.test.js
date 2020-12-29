// import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo'
import GlobalModuleUsage from '@/components/GlobalModuleUsage'

import helpers from '~/utils/GeneralHelpers'

export const addVuetify = (context) => {
  context.vuetify = require('vuetify')
  context.vue.use(context.vuetify)
  // eslint-disable-next-line new-cap
  context.vuetifyInstance = new context.vuetify()
}

export const addVuex = (context) => {
  context.vuex = require('vuex')
  context.vue.use(context.vuex)
}

export const addHelpers = () => {
  return (context) => {
    context.vue.prototype.$helpers = helpers
  }
}

export const addI18n = (options) => {
  return (context) => {
    context.i18n = require('vue-i18n')
    context.vue.use(context.i18n)
    // eslint-disable-next-line new-cap
    context.i18nInstance = new context.i18n(options)
  }
}

export const addFilter = (name, lambda) => {
  return context => context.vue.filter(name, lambda)
}

export const compositeConfiguration = (...configs) => {
  return context => configs.forEach(config => config(context))
}

export const bootstrapVueContext = (configureContext) => {
  const context = {}
  const teardownVueContext = () => {
    jest.unmock('vue')
    Object.keys(context).forEach(key => delete context[key])
    jest.resetModules()
  }

  jest.isolateModules(() => {
    context.vueTestUtils = require('@vue/test-utils')
    context.vueTestUtils.config.stubs.nuxt = { template: '<div />' }
    context.vueTestUtils.config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
    context.vueTestUtils.config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
    context.vue = context.vueTestUtils.createLocalVue()

    jest.doMock('vue', () => context.vue)

    configureContext && configureContext(context)
  })

  return {
    teardownVueContext,
    ...context
  }
}

// describe('Logo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = shallowMount(Logo)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })

describe('Logo', () => {
  let vueContext = null

  beforeEach(() => {
    vueContext = bootstrapVueContext(
      compositeConfiguration(addVuex, addVuetify, addHelpers())
    )
  })

  afterEach(() => {
    vueContext.teardownVueContext()
  })

  test('Test Logo Component', () => {
    const wrapper = vueContext.vueTestUtils.shallowMount(Logo, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance
    })

    expect(wrapper.text()).toMatch('Logo')
  })

  test('Test Vuetify Logo Component', () => {
    const wrapper = vueContext.vueTestUtils.shallowMount(VuetifyLogo, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance
    })

    expect(wrapper.text()).toMatch('Logo')
  })

  test('Test Global Variables', () => {
    const wrapper = vueContext.vueTestUtils.shallowMount(GlobalModuleUsage, {
      localVue: vueContext.vue,
      vuetify: vueContext.vuetifyInstance
    })

    expect(wrapper.text()).toMatch('91')
  })
})

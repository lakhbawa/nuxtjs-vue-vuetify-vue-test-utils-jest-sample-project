import Vue from 'vue'
// import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'

Vue.config.silent = true

// Vue.config.ignoredElements = ['nuxt-link']
// Mock Nuxt components
config.stubs.nuxt = { template: '<div />' }
config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
config.stubs['no-ssr'] = { template: '<span><slot /></span>' }

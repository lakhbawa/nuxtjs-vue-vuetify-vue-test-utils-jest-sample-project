import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo'
import GlobalModuleUsage from '@/components/GlobalModuleUsage'
import {
  addHelpers,
  addVuetify,
  addVuex,
  bootstrapVueContext,
  compositeConfiguration,
  customWrapper
} from '~/tests/utils'

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
    const wrapper = customWrapper(Logo, vueContext)
    expect(wrapper.text()).toMatch('Logo')
  })

  test('Test Vuetify Logo Component', () => {
    const wrapper = customWrapper(VuetifyLogo, vueContext)
    expect(wrapper.text()).toMatch('Logo')
  })

  test('Test Global Variables', () => {
    // const wrapper = customWrapper(VuetifyLogo, vueContext)vueContext.vueTestUtils.shallowMount(GlobalModuleUsage, {
    //   localVue: vueContext.vue,
    //   vuetify: vueContext.vuetifyInstance
    // })
    const wrapper = customWrapper(GlobalModuleUsage, vueContext)
    expect(wrapper.text()).toMatch('91')
  })
})

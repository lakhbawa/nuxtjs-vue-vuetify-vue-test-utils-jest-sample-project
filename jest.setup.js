import constants from './tests/constants'

const { Nuxt, Builder } = require('nuxt')

const nuxtConfig = require('./nuxt.config.js')

// these boolean switches turn off the build for all but the store
const resetConfig = {
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: true,
    layouts: false,
    meta: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: false,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: false
  }
}

// we take our nuxt config, lay the resets on top of it,
// and lastly we apply the non-boolean overrides
const finalConfig = Object.assign({}, nuxtConfig.default, resetConfig, {
  server: { port: constants.port },
  buildDir: constants.buildDir,
  ignore: ["/components//", "/layouts//", "/pages//*"]
})

const buildNuxt = async () => {
  const nuxt = new Nuxt(finalConfig)
  await new Builder(nuxt).build()
  return nuxt
}

module.exports = async () => {
  const nuxt = await buildNuxt()

  // we surface this path as an env var now
  // so we can import the store dynamically later on
  process.env.buildDir = nuxt.options.buildDir
}

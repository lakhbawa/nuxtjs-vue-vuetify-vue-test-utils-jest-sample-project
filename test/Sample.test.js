const { resolve } = require('path')
const { Nuxt, Builder } = require('nuxt')
// const request = require('supertest')

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {
  const config = {
    dev: process.env.NODE_ENV === 'production',
    rootDir: resolve(__dirname, '../'),
    mode: 'universal',
  }

  nuxt = new Nuxt(config)

  await new Builder(nuxt).build()

  await nuxt.server.listen(3001, 'localhost')
}, 30000)

// Example of testing only generated html
describe('GET /', () => {
  test('Route / exits and render HTML', async () => {
    const { html } = await nuxt.renderRoute('/', {})

    expect(html).toContain('Vuetify')
  })
})

// describe('GET /', () => {
//   test('returns status code 200', async () => {
//     const response = await request(nuxt.server.app).get('/')
//     expect(response.statusCode).toBe(200)
//   })
// })

// describe('GET /test', () => {
//   test('returns status code 404', async () => {
//     const response = await request(nuxt.server.app).get('/test')
//     expect(response.statusCode).toBe(404)
//   })
// })

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})

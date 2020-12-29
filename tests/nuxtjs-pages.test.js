
const { Nuxt } = require('nuxt')
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const request = require('supertest')
// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

let buildDir
// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {
  buildDir = process.env.buildDir
  nuxt = new Nuxt({ buildDir })

  await nuxt.server.listen()
}, 300000)

// Example of testing only generated html
describe('GET /', () => {
  test('Route / exits and render HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/', {})

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

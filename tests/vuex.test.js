import { isArray, isFunction} from 'lodash'
import constants from '~/tests/constants'
describe('store/movies', () => {
// ----------------------------------------------------
// focus on the code from here...
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${constants.buildDirRootPath}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  // ...to here is what matters
  // ----------------------------------------------------

  describe('disney', () => {
    let disney

    beforeEach(() => {
      disney = store.getters['test_store_movies/disney']
    })

    test('getter is a function', () => {
      expect(isArray(disney)).toBe(true)
    })

    test('should be 6 movies total', () => {
      expect(disney.length).toBe(6)
    })
  })

  describe('byStudio', () => {
    let byStudio

    beforeEach(() => {
      byStudio = store.getters['test_store_movies/byStudio']
    })

    test('is a function', () => {
      expect(isFunction(byStudio)).toBe(true)
    })

    test('matches what the disney getter returns', () => {
      const movies = store.getters['test_store_movies/byStudio']('Disney')
      const disney = store.getters['test_store_movies/disney']
      expect(movies).toEqual(disney)
    })

    test('shows all other studios with one entry each', () => {
      expect(byStudio('sony').length).toBe(1)
      expect(byStudio('warner bros.').length).toBe(1)
      expect(byStudio('universal').length).toBe(1)
      expect(byStudio('beijing enlight').length).toBe(1)
    })
  })
})

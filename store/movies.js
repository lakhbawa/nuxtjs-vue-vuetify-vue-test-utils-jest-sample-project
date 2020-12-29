// highest grossing movies of 2019
const movies = [
  {
    title: 'Avengers: Endgame',
    studio: 'Disney',
    worldwideGross: 2797800564
  },
  {
    title: 'The Lion King',
    studio: 'Disney',
    worldwideGross: 1656556149
  },
  {
    title: 'Frozen II',
    studio: 'Disney',
    worldwideGross: 1167989889
  },
  {
    title: 'Spider-Man: Far From Home',
    studio: 'Sony',
    worldwideGross: 1131927996
  },
  {
    title: 'Captain Marvel',
    studio: 'Disney',
    worldwideGross: 1128274794
  },
  {
    title: 'Toy Story 4',
    studio: 'Disney',
    worldwideGross: 1073394593
  },
  {
    title: 'Joker',
    studio: 'Warner Bros.',
    worldwideGross: 1062994002
  },
  {
    title: 'Aladdin',
    studio: 'Disney',
    worldwideGross: 1050693953
  },
  {
    title: 'Hobbs & Shaw',
    studio: 'Universal',
    worldwideGross: 758910100
  },
  {
    title: 'Ne Zha',
    studio: 'Beijing Enlight',
    worldwideGross: 728993357
  }
]

const state = () => {
  return movies
}

const mutations = {
}

const actions = {}

const getters = {
  byStudio (state) {
    return (studioName) => {
      return state.filter(({ studio }) => {
        return studio.toLowerCase() === studioName.toLowerCase()
      })
    }
  },
  disney (state) {
    return state.filter(({ studio }) => {
      return studio === 'Disney'
    })
  }
}

export default { state, mutations, actions, getters }

import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
}

export function searchFilterByCategory({ commit }, cat) {
    axiosClient.get(`filter.php?c=${cat}`)
      .then(({ data }) => {
        commit('setFilterByCategories', data.meals)
      })
  }
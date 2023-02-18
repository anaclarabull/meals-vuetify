export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals
}

export function setFilterByCategories(state, meals) {
    state.filterByCategory = meals || []
  }

  export function setCategory(state, category) {
    state.category = category
  }
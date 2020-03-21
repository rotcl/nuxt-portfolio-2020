export const state = () => ({
  theme: 'light',
  menu: false,
})

export const getters = {
  getTheme: state => {
    return state.theme
  },
  getMenu: state => {
    return state.menu
  },
}

export const mutations = {
  changeTheme(state, value) {
    state.theme = value
  },
  changeMenu(state, value) {
    state.menu = value
  },
}
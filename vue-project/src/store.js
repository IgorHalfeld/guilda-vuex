import Vue from 'vue'
import Vuex from 'vuex'
import * as apiMethods from './services';

Vue.use(Vuex)

export const SET_USERS = 'SET_USERS';
export const SET_LOADING = 'SET_LOADING';

export default new Vuex.Store({
  state: {
    users: [],
    isLoading: false,
  },
  mutations: {
    [SET_USERS]: (state, users) => {
      state.users = users;
    },
    [SET_LOADING]: (state, status) => {
      state.isLoading = status;
    },
  },
  actions: {
    api(_, { entity, action, payload = {} }) {
      return apiMethods[entity][action](payload);
    },

    async fetchUsers({ commit, dispatch }) {
      commit(SET_LOADING, true);
      const { data: users } = await dispatch('api', { entity: 'users', action: 'get' });
      commit(SET_USERS, users);
      commit(SET_LOADING, false);
    },
  },
});

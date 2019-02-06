<template>
  <div class="container">
    <div class="loading" v-if="isLoading">
      <div class="loading-spinner"></div>
    </div>
     <h1 class="container-title">The Amazing App! 😍</h1>
    <ul class="container-list">
      <li class="container-list--item" v-for="(user, index) in users" :key="index">
        <p>{{ user.name }}</p>
        <span>{{ user.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      users: state => state.users,
    }),
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<style>
@import url('./style.css');
</style>

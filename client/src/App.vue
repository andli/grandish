<template>
  <div id="app">
    <NavBar title="Grandish" />
    <b-container class="py-3">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    NavBar
  },
  computed: {
    ...mapState([
        'loginSuccessful',
        'registerSuccessful',
      ]),
  },
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
  }
}
</script>



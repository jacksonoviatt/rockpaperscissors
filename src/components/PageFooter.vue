<template>
  <footer>
    <div v-if="loginTokenStore" @click="logOutFunction">
      <router-link to="/">Logout</router-link>
    </div>
  </footer>
</template>

<script>
import cookies from "vue-cookies";
export default {
  name: "page-footer",
  computed: {
    loginTokenStore() {
      return this.$store.state.loginToken;
    },
  },
  methods: {
    // on click, the login token cookie will be removed and the page will reload, logging out the user
    logOutFunction: function () {
      cookies.remove("token");
      location.reload();
    },
  },
};
</script>

<style scoped>
footer {
  height: 10vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 0;
}
div {
  display: grid;
  place-items: center;
  padding: 20px;
}
</style>
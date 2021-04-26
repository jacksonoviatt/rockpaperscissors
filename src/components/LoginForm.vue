<template>
  <div>
    <form action="javascript:void(0)" v-if="!loginTokenStore">
      <p>Username</p>
      <input type="text" id="emailInput" />
      <p>Password</p>
      <input type="password" id="passwordInput" />
      <br />

      <input
        type="submit"
        value="Login"
        id="loginButton"
        @click="attemptLogin"
      />
    </form>
    <div v-if="loginTokenStore">
      <p>You are already logged in.... go to the game!</p>
      <router-link  to="/game">Game</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "login-form",
  data() {
    return {
      // loginToken: cookies.get("token"),
      loginStatus: "",
    };
  },
  computed: {
    loginTokenStore() {
      return this.$store.state.loginToken;
    }
  },
  methods: {
    attemptLogin() {
      this.loginStatus = "loading";
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: document.getElementById("emailInput").value,
            password: document.getElementById("passwordInput").value,
          },
        })
        .then((res) => {
          console.log(res);
          this.loginStatus = "you have logged in";
          cookies.set("token", res.data.token);
          this.$router.push("/game");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          this.loginStatus = "you have failed at log in";
        });
    },
  },
};
</script>

<style scoped>
</style>
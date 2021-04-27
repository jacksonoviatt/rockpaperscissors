<template>
  <div>
    <!-- the login form will only show if there is no login token cookie stored
    if there is a login token, a router link to the game view and a message informing the player 
    that they are logged in will display.
    
     On the click of the submit input the attempt login function will run
    and call the reqres api to post the false login
    -->
    <div v-if="loginTokenStore">
      <p>You are already logged in.... go to the game!</p>
      <router-link to="/game">Game</router-link>
    </div>
    <form action="javascript:void(0)" v-else>
      <p>Username</p>
      <input type="text" id="emailInput" />
      <p>Password</p>
      <input type="password" id="passwordInput" />
      <br />
      <br />
      <input
        type="submit"
        value="Login"
        id="loginButton"
        @click="attemptLogin"
      />
    </form>
    <br />
    <h3>{{loginStatus}}</h3>
  </div>
</template>

<script>
// import axios and cookies
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "login-form",
  // login status informs the user of the success of their login
  data() {
    return {
      loginStatus: "",
    };
  },
  computed: {
    loginTokenStore() {
      return this.$store.state.loginToken;
    },
  },
  methods: {
    loginSetTimeout() {
      this.$router.push("/game");
          location.reload();
    },
    attemptLogin() {
      // shows the user a loading message while the api is loading
      this.loginStatus = "loading";
      // use axios.request to post the email input and password input, if these
      // match the user in the api the .then success will run
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
        // set a cookie to "token", tell the user they successfully logged in, and send the
        // user to the game view. Reload the view so the logout button appears correctly
        .then((res) => {
  
          this.loginStatus = "you have logged in";
          cookies.set("token", res.data.token);
          setTimeout(this.loginSetTimeout, 2000);
        })
        // if the axios request fails, it will tell the user there was an error
        .catch((err) => {
          console.log(err);
          this.loginStatus = "your login attempt failed";
        });
    },
  },
};
</script>

<style scoped>
</style>
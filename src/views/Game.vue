<template>
  <div>
    <page-header></page-header>
    <main v-if="loginToken">
      <h3>Game Screen</h3>
      <score-board></score-board>
      
      <div id="selections">
          <player-selection></player-selection>
      <computer-selection></computer-selection>
      </div>
      <game-buttons></game-buttons>
      
      <h2>{{storeWinnerStatement}}</h2>
      
    </main>
    <main v-if="!loginToken">
        <h2>You need are not logged in!</h2>
        <router-link to="/">Login</router-link>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import cookies from 'vue-cookies';
import ComputerSelection from '../components/ComputerSelection.vue';
import GameButtons from "../components/GameButtons.vue";
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";
import PlayerSelection from "../components/PlayerSelection.vue";
import ScoreBoard from '../components/ScoreBoard.vue';
export default {
  name: "Game",
  components: {
    PageHeader,
    PageFooter,
    GameButtons,
    PlayerSelection,
    ComputerSelection,
    ScoreBoard,
  },
    data() {
        return {
            loginToken: cookies.get("token"),
        }
    },
  computed: {
      storeWinnerStatement() {
          return this.$store.state.winnerStatement;
      }
  },
};
</script>

<style scoped>
#selections {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    min-height: 300px;
}
main {
    min-height: 80vh;
}
</style>
<template>
  <div>
    <page-header></page-header>
    <!-- show the game only if the user has a valid token
    if not logged in, the user will be shown a router link back to the login view -->
    <main v-if="storeLoginToken">
      <h3>Game Screen</h3>
      <score-board></score-board>

      <div id="selections">
        <player-selection></player-selection>
        <computer-selection></computer-selection>
      </div>
      <game-buttons></game-buttons>

      <h2>{{ storeWinnerStatement }}</h2>
    </main>
    <main v-else-if="!storeLoginToken">
      <h2>You are not logged in!</h2>
      <router-link to="/">Login</router-link>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>

import ComputerSelection from "../components/ComputerSelection.vue";
import GameButtons from "../components/GameButtons.vue";
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";
import PlayerSelection from "../components/PlayerSelection.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
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
//  set the states from the store
  computed: {
    storeWinnerStatement() {
      return this.$store.state.winnerStatement;
    },
    storeLoginToken() {
        return this.$store.state.loginToken;
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
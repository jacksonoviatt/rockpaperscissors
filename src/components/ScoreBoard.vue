<template>
  <div>
    <!-- in the mustache syntax, the stored scores will update and display  -->
    <h2>Player: {{ storePlayerScore }}</h2>
    <h2>Ties: {{ storeTieScore }}</h2>
    <h2>Computer: {{ storeComputerScore }}</h2>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    //  pull the stored scores from the vuex store 
    storePlayerScore() {
      return this.$store.state.playerScore;
    },
    storeComputerScore() {
      return this.$store.state.computerScore;
    },
    storeTieScore() {
      return this.$store.state.tieScore;
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
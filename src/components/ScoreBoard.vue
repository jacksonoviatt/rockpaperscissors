<template>
  <div>
    <h1>Player: {{ storePlayerScore }}</h1>
    <h1>Ties: {{ storeTieScore }}</h1>
    <h1>Computer: {{ storeComputerScore }}</h1>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
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
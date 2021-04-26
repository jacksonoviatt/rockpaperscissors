<template>
  <div>
    <button @click="rockClicked">Rock</button>
    <button @click="paperClicked">Paper</button>
    <button @click="scissorsClicked">Scissors</button>
  </div>
</template>

<script>
export default {
  name: "game-buttons",
  computed: {
    storeChoseRock() {
      return this.$store.state.choseRock;
    },
    storeChosePaper() {
      return this.$store.state.chosePaper;
    },
    storeChoseScissors() {
      return this.$store.state.choseScissors;
    },
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
  methods: {
    rockClicked: function () {
      this.$store.commit("updateRockChose", true);
      this.$store.commit("updatePaperChose", false);
      this.$store.commit("updateScissorsChose", false);
      this.computerSelection();
    },
    paperClicked: function () {
      this.$store.commit("updateRockChose", false);
      this.$store.commit("updatePaperChose", true);
      this.$store.commit("updateScissorsChose", false);
      this.computerSelection();
    },
    scissorsClicked: function () {
      this.$store.commit("updateRockChose", false);
      this.$store.commit("updatePaperChose", false);
      this.$store.commit("updateScissorsChose", true);
      this.computerSelection();
    },
    computerSelection: function () {
      let computerSelection = Math.floor(Math.random() * 3);
      console.log(computerSelection);
      if (computerSelection === 0) {
        this.$store.commit("updateRockComputer", true);
        this.$store.commit("updatePaperComputer", false);
        this.$store.commit("updateScissorsComputer", false);
      } else if (computerSelection === 1) {
        this.$store.commit("updateRockComputer", false);
        this.$store.commit("updatePaperComputer", true);
        this.$store.commit("updateScissorsComputer", false);
      } else if (computerSelection === 2) {
        this.$store.commit("updateRockComputer", false);
        this.$store.commit("updatePaperComputer", false);
        this.$store.commit("updateScissorsComputer", true);
      }
      if (computerSelection === 0 && this.storeChoseRock === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Rock and rock! its a tie!"
        );
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      } else if (computerSelection === 0 && this.storeChosePaper === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Paper beats rock! you won!"
        );
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 0 && this.storeChoseScissors === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Rock beats scissors! you lost!"
        );
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 1 && this.storeChoseRock === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Paper beats rock. You lost!"
        );
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 1 && this.storeChosePaper === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Paper and paper! Its a tie!"
        );
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      } else if (computerSelection === 1 && this.storeChoseScissors === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Scissors beat paper! You won!"
        );
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 2 && this.storeChoseRock === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Rock beats scissors. You won!"
        );
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 2 && this.storeChosePaper === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Scissors beat paper! You lost!"
        );
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 2 && this.storeChoseScissors === true) {
        this.$store.commit(
          "updateWinnerStatement",
          "Scissors and scissors! Its a tie!"
        );
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      }
    },
  },
};
</script>

<style scoped>
</style>
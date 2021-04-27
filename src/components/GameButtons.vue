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
  data() {
    return {
      tieMessage: "It's a tie!",
      winMessage: "You won!",
      lossMessage: "You lost!",
    };
  },
  // set the states from the store 
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
    // these functions will be called on click
    // when called, they will update the state of the boolean choice variables
    // it will also call the computer selection function
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
      // the computer selection will be 0, 1, or 2
      // 0 = rock,  1 =  paper, 2 = scissors
      // the computer choice values will update in the store
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
      // depending on the outcome of the player and computer choices
      // the winnerStatement in the store will update with a tie, win, or loss message 
      // the win loss tie score in the store will also update accordingly
      if (computerSelection === 0 && this.storeChoseRock === true) {
        this.$store.commit("updateWinnerStatement", this.tieMessage);
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      } else if (computerSelection === 0 && this.storeChosePaper === true) {
        this.$store.commit("updateWinnerStatement", this.winMessage);
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 0 && this.storeChoseScissors === true) {
        this.$store.commit("updateWinnerStatement", this.lossMessage);
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 1 && this.storeChoseRock === true) {
        this.$store.commit("updateWinnerStatement", this.lossMessage);
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 1 && this.storeChosePaper === true) {
        this.$store.commit("updateWinnerStatement", this.tieMessage);
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      } else if (computerSelection === 1 && this.storeChoseScissors === true) {
        this.$store.commit("updateWinnerStatement", this.winMessage);
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 2 && this.storeChoseRock === true) {
        this.$store.commit("updateWinnerStatement", this.winMessage);
        this.$store.commit("updatePlayerScore", this.storePlayerScore + 1);
      } else if (computerSelection === 2 && this.storeChosePaper === true) {
        this.$store.commit("updateWinnerStatement", this.lossMessage);
        this.$store.commit("updateComputerScore", this.storeComputerScore + 1);
      } else if (computerSelection === 2 && this.storeChoseScissors === true) {
        this.$store.commit("updateWinnerStatement", this.tieMessage);
        this.$store.commit("updateTieScore", this.storeTieScore + 1);
      }
    },
  },
};
</script>

<style scoped>
button {
  background: white;
  border: grey 2px solid;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 20px;
  min-width: 200px;
  height: 60px;
  border-radius: 10px;
}
button:hover {
  background: rgb(192, 192, 192);
  
}
</style>
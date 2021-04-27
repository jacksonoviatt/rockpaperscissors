import Vue from 'vue'
import Vuex from 'vuex'
import cookies from "vue-cookies"
Vue.use(Vuex)

export default new Vuex.Store({
  // set the global variables
  // loginToken gets the cookie token
  state: {
    choseRock: false,
    choseScissors: false,
    chosePaper: false,
    playerScore: 0,

    computerRock: false,
    computerScissors: false,
    computerPaper: false,
    computerScore: 0,

    winnerStatement: "",
    tieScore: 0,
    loginToken: cookies.get("token"),

  },
  // mutations change the state of the above data
  mutations: {
    updateRockChose: function(state, data) {
      state.choseRock = data;
    },
    updatePaperChose: function(state, data) {
      state.chosePaper = data;
    },
    updateScissorsChose: function(state, data) {
      state.choseScissors = data;
    },

    updateRockComputer: function(state, data) {
      state.computerRock = data;
    },
    updatePaperComputer: function(state, data) {
      state.computerPaper = data;
    },
    updateScissorsComputer: function(state, data) {
      state.computerScissors = data;
    },

    updateWinnerStatement: function(state, data) {
      state.winnerStatement = data;
    },

    updatePlayerScore: function(state, data) {
      state.playerScore = data;
    },
    updateComputerScore: function(state, data) {
      state.computerScore = data;
    },
    updateTieScore: function(state, data) {
      state.tieScore = data;
    },
    
  },
  actions: {
  },
  getters: {
  }
})

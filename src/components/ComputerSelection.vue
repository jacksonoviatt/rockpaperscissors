<template>
  <div>
    <img
      v-if="storecomputerRock === true"
      src="https://image.flaticon.com/icons/png/128/836/836972.png"
      alt="rock"
    />
    <img
      v-if="storecomputerPaper === true"
      src="https://image.flaticon.com/icons/png/128/2541/2541988.png"
      alt=""
    />
    <img
      v-if="storecomputerScissors === true"
      src="https://www.flaticon.com/svg/vstatic/svg/832/832183.svg?token=exp=1619400844~hmac=dfbabe7006168670e49cb756e2a357f4"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "computer-selection",
  computed: {
    storecomputerRock() {
      return this.$store.state.computerRock;
    },
    storecomputerPaper() {
      return this.$store.state.computerPaper;
    },
    storecomputerScissors() {
      return this.$store.state.computerScissors;
    },
  },
};
</script>

<style scoped>
img {
    width: 200px;
}
</style>
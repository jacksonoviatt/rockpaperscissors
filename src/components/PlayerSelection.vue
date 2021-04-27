<template>
  <div>
    <!-- depending on the player choice a different image will show according to this conditional statement -->
    <img
      v-if="storeChoseRock === true"
      src="https://image.flaticon.com/icons/png/128/836/836972.png"
      alt="rock"
    />
    <img
      v-else-if="storeChosePaper === true"
      src="https://image.flaticon.com/icons/png/128/2541/2541988.png"
      alt=""
    />
    <img
      v-else-if="storeChoseScissors === true"
      src="https://www.flaticon.com/svg/vstatic/svg/832/832183.svg?token=exp=1619400844~hmac=dfbabe7006168670e49cb756e2a357f4"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "player-selection",
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
  },
};
</script>

<style scoped>
img {
    width: 200px;
}
</style>
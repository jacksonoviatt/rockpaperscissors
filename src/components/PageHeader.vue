<template>
  <header>
    <nav>
     <h1>Lets Play Rock Paper Scissors</h1>
    </nav>
  </header>
</template>

<script>
export default {
  name: "page-header",
};
</script>

<style scoped>
header {
  height: 10vh;
  width: 100%;
  display: grid;
  place-items: center;
}
h1 {
  font-size: 30px;
}
</style>
<template>
  <div>
    <page-header></page-header>
    <h3>Login Here</h3>
    <login-form></login-form>
    <page-footer></page-footer>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";
export default {
  name: "Login",
  components: {
    PageHeader,
    PageFooter,
    LoginForm,
  },
};
</script>

<style scoped>
</style>
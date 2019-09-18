<template>
  <div id="app">
    <section class="wrapper">
      <HeadTitle />
      <Stripe color="white" />
      <Stripe color="blue" />
      <Stripe color="red" />
    </section>
  </div>
</template>

<script>
import Stripe from './components/Stripe.vue'
import HeadTitle from './components/HeadTitle.vue'

export default {
  name: 'app',
  components: {
    Stripe,
    HeadTitle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  
}
</style>

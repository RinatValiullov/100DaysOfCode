<template>
  <div
    class="stripe"
    :style=stripeStyle
  ></div>
</template>

<script>
export default {
  name: 'Stripe',
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    stripeStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stripe {
    height: 50px;
  }
</style>

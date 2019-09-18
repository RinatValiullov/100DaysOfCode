<template>
  <h1
    :style=titleStyle
    :class="className"
  >Russian Flag</h1>
</template>

<script>
export default {
  name: 'HeadTitle',
  props: {
    className: {
      type: String,
      default: 'title'
    }
  },
  computed: {
    titleStyle() {
      return {
        textAlign: 'center'
      }
    }
  }
}
</script>

<style>
  .title {
    color: #458;
  }
</style>
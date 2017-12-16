<template>
  <video :src="jsonfile" muted autoplay loop></video>
</template>

<script>

export default {
  name: 'BodymovinUsingVideo',
  props: ['jsonfile'],
  mounted: function () {
  }
}
</script>

<style scoped>
  video{
    background: white;
    width: 100%;
  }
</style>
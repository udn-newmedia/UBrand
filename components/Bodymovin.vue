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
  @media screen and (max-width: 767px){
    video{
      width: 334px;
      height: 300.59px;
    }    
  }
</style>
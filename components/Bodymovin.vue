<template>
  <video :src="jsonfile" muted autoplay loop></video>
</template>

<script>

export default {
  /* 本元件用途：
    *  首頁各section之影片
    * [傳入參數]：
    *  - jsonfile: video 之 source
    * */
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
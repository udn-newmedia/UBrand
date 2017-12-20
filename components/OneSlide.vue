<template>
  <div class="Slideshow" :class="{'right': position === 'right','left': position === 'left'}">
    <div class="slide-wrapper">
      <div class="relative">
        <img :src='imgSrc1'>
        <div class="projects">
            <h4 class="text">{{title}} {{subtitle}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pic1 from '~/assets/pc/a1-web.jpg'

export default {
  name: 'OneSlide',
  props: ['interval', 'position'],
  data: function () {
    return {
      show: true,
      imgSrc1: pic1,
      title: '好好說再見',
      subtitle: '插畫記林杰樑走後1500天',
      date: '2017.11.23'
    }
  }
}
</script>

<style scoped>
/* * {
  border: solid 1px black;
} */

h4{
  font-size: 25px;
}

.Slideshow {
  position:absolute; 
  width: 45%;
  height: 100%;
  top: 50%; 
  transform: translateY(-25%);
  transition: all 0.5s ease-in;
}

.Slideshow.right {
  right: 0;
}

.Slideshow.left {
  left: 0;
}

.slide-wrapper {
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

img {
  width: 100%;
  height: auto;
}

.projects {
  background: white;
  position: absolute;
  bottom: -2px;
  right: 50%;
  transform: translateX(50%);
  width: 80%;
  text-align: center;
}

.relative{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

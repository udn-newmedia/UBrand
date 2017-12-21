<template>
  <div class="Slideshow" :class="{'right': position === 'right','left': position === 'left'}">
    <div class="slide-wrapper">
      <div class="relative">
        <img :src='imgSrc'>
        <div class="projects">
            <h4 class="text">{{title}} {{subtitle}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneSlide',
  props: ['interval', 'position', 'slide'],
  computed: {
    pick: function () {
      return Math.floor(Math.random() * this.slide.length)
    },
    imgSrc: function () {
      return this.slide[this.pick].pcPic
    },
    title: function () {
      return this.slide[this.pick].title.split(' ')[0]
    },
    subtitle: function () {
      return this.slide[this.pick].title.split(' ')[1]
    }
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

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

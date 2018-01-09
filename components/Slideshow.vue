<template>
  <div class="Slideshow" :class="{'right': position === 'right','left': position === 'left'}">
    <transition name="fade">
      <div class="slide-wrapper" v-if='show' key="1">
        <div class="relative">
          <img :src='imgSrc1'>
          <div class="projects">
              <h4 class="text">{{title1}} {{subtitle1}}</h4>
          </div>
        </div>
      </div>
      <div class="slide-wrapper" v-else key="2">
        <div class="relative">
          <img :src='imgSrc2'>
          <div class="projects">
              <h4 class="text">{{title1}} {{subtitle1}}</h4>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Slideshow',
  props: ['interval', 'position', 'folder'],
  data: function () {
    return {
      show: true,
      imgSrc1: pic1,
      imgSrc2: pic2,
      title1: '好好說再見',
      subtitle1: '插畫記林杰樑走後1500天',
      date1: '2017.11.23',
      list: [
        {
          name: 'project1',
          pic: pic1,
          title: '好好說再見',
          subtitle: '插畫記林杰樑走後1500天',
          date: '2017.11.23'
        }, {
          name: 'project2',
          pic: pic2,
          title: '好好說再見',
          subtitle: '插畫記林杰樑走後1500天',
          date: '2017.11.23'
        }
      ]
    }
  },
  components: {
  },
  mounted: function () {
    setInterval(() => {
      this.show = !this.show
    }, this.interval)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.relative{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

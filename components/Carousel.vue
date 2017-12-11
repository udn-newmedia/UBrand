<template>
  <div class="Carousel">
      <div class="carousel-left">
        <transition name="fade">
            <div class="carousel-wrapper" v-if='show' key="1">
              <img :src='imgSrc1'>
              <div class="projects">
                  <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                  <!-- <p class="date">{{date1}}</p> -->
                  <p class="date">1</p>
              </div>
            </div>
            <div class="carousel-wrapper" v-else key="2">
              <img :src='imgSrc2'>
              <div class="projects">
                  <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                  <!-- <p class="date">{{date1}}</p> -->
                  <p class="date">2</p>
              </div>
            </div>
        </transition>
      </div>
      <div class="carousel-right">
        <transition name="fade">
          <div class="carousel-wrapper" v-if='show' key="3">
            <img :src='imgSrc2'>
            <div class="projects">
                <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                <!-- <p class="date">{{date1}}</p> -->
                <p class="date">3</p>
            </div>
          </div>
          <div class="carousel-wrapper" v-else key="4">
            <img :src='imgSrc1'>
            <div class="projects">
                <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                <!-- <p class="date">{{date1}}</p> -->
                <p class="date">4</p>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
import pic1 from '~/assets/pc/bg-2.jpg'
import pic2 from '~/assets/pc/bg-3.jpg'

export default {
  name: 'Carousel',
  props: ['interval'],
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

.Carousel {
  position: relative;
  width: 100%;
  height: 126px;
}

.carousel-left, .carousel-right {
  position: absolute;
  width: calc(50%-10px);
  height: 100%;
}

.carousel-left {
  left: 0;
  top: 0;
}

.carousel-right {
  right: 0;
  top: 0;
}

.carousel-wrapper {
  background: white;
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

img {
  width: 220px;
  height: 126px;
}

.projects {
  margin-left: 5px;
  margin-right: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>

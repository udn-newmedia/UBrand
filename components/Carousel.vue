<template>
  <div class="Carousel">
    <!-- <transition name="fade" class="carousel-left"> -->
    <div class="carousel-left">
      <div class="carousel-wrapper" v-if='show' key="1">
        <img :src='imgSrc1'>
        <div class="projects">
            <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
            <p class="date">{{date1}}</p>
            <!-- <p class="date">1</p> -->
        </div>
      </div>
      <div class="carousel-wrapper" v-if='show' key="2">
        <img :src='imgSrc2'>
        <div class="projects">
            <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
            <p class="date">{{date1}}</p>
            <!-- <p class="date">2</p> -->
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- <transition name="fade" class="carousel-right"> -->
    <div class="carousel-right">
      <div class="carousel-wrapper" v-if='show' key="3">
        <img :src='imgSrc2'>
        <div class="projects">
            <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
            <p class="date">{{date1}}</p>
            <!-- <p class="date">3</p> -->
        </div>
      </div>
      <div class="carousel-wrapper" v-if='show' key="4">
        <img :src='imgSrc1'>
        <div class="projects">
            <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
            <p class="date">{{date1}}</p>
            <!-- <p class="date">4</p> -->
        </div>
      </div>
    </div>
    <!-- </transition> -->
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
      title1: '好好說再見1',
      subtitle1: '插畫記林杰樑走後1500天',
      date1: '2017.11.23',
      list: [
        {
          name: 'project1',
          pic: pic1,
          title: '好好說再見1',
          subtitle: '插畫記林杰樑走後1500天',
          date: '2017.11.23'
        }, {
          name: 'project2',
          pic: pic2,
          title: '好好說再見2',
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
      // this.change()
      // this.show = !this.show
    }, this.interval)
  },
  methods: {
    change: function () {
      if (this.imgSrc1 === this.list[0].pic) {
        this.imgSrc1 = this.list[1].pic
        this.imgSrc2 = this.list[0].pic
      } else {
        this.imgSrc1 = this.list[0].pic
        this.imgSrc2 = this.list[1].pic
      }
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 1025px){
  .Carousel{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.carousel-wrapper{
  position: absolute;
  display: block;
  /* align-items: center; */
  width: 50%;
}

.projects{
  text-align: left;
}

img{
  width: 220px;
  height: 126px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.carousel-left {
  float: left;
}

.carousel-right {
  float: right;
}
</style>

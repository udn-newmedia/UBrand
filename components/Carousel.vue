<template>
  <div class="Carousel" style="margin-bottom: 40px;">
      <div class="carousel-left">
        <transition name="fade">
            <div class="carousel-wrapper" v-if='show' key="1">
              <img :src='imgSrc1'>
              <div class="projects">
                  <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                  <h4 class="date">{{date1}}</h4>
              </div>
            </div>
            <div class="carousel-wrapper" v-else key="2">
              <img :src='imgSrc3'>
              <div class="projects">
                  <h4 class="text">{{title3}}<br>{{subtitle3}}</h4>
                  <h4 class="date">{{date3}}</h4>
              </div>
            </div>
        </transition>
      </div>
      <div class="carousel-right">
        <transition name="fade">
          <div class="carousel-wrapper" v-if='show' key="3">
            <img :src='imgSrc2'>
            <div class="projects">
                <h4 class="text">{{title2}}<br>{{subtitle2}}</h4>
                <h4 class="date">{{date2}}</h4>
            </div>
          </div>
          <div class="carousel-wrapper" v-else key="4">
            <img :src='imgSrc4'>
            <div class="projects">
                <h4 class="text">{{title4}}<br>{{subtitle4}}</h4>
                <h4 class="date">{{date4}}</h4>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Carousel',
  props: ['interval', 'projects'],
  computed: {
    imgSrc1: {
      get: function () {
        return this.projects[this.pick1].pcPic
      },
      set: function (newValue) {
        return newValue
      }
    },
    imgSrc2: {
      get: function () {
        return this.projects[this.pick2].pcPic
      },
      set: function (newValue) {
        return newValue
      }
    },
    imgSrc3: {
      get: function () {
        return this.projects[this.pick3].pcPic
      },
      set: function (newValue) {
        return newValue
      }
    },
    imgSrc4: {
      get: function () {
        return this.projects[this.pick4].pcPic
      },
      set: function (newValue) {
        return newValue
      }
    },
    title1: {
      get: function () {
        return this.projects[this.pick1].title.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle1: {
      get: function () {
        return this.projects[this.pick1].title.split(' ')[1]
      },
      set: function (newValue) {
        return newValue
      }
    },
    title2: {
      get: function () {
        return this.projects[this.pick2].title.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle2: {
      get: function () {
        return this.projects[this.pick2].title.split(' ')[1]
      },
      set: function (newValue) {
        return newValue
      }
    },
    title3: {
      get: function () {
        return this.projects[this.pick3].title.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle3: {
      get: function () {
        return this.projects[this.pick3].title.split(' ')[1]
      },
      set: function (newValue) {
        return newValue
      }
    },
    title4: {
      get: function () {
        return this.projects[this.pick4].title.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle4: {
      get: function () {
        return this.projects[this.pick4].title.split(' ')[1]
      },
      set: function (newValue) {
        return newValue
      }
    },
    date1: {
      get: function () {
        return this.projects[this.pick1].date
      },
      set: function (newValue) {
        return newValue
      }
    },
    date2: {
      get: function () {
        return this.projects[this.pick2].date
      },
      set: function (newValue) {
        return newValue
      }
    },
    date3: {
      get: function () {
        return this.projects[this.pick3].date
      },
      set: function (newValue) {
        return newValue
      }
    },
    date4: {
      get: function () {
        return this.projects[this.pick4].date
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  data: function () {
    return {
      show: true,
      pick1: Math.floor(Math.random() * this.projects.length),
      pick2: Math.floor(Math.random() * this.projects.length),
      pick3: Math.floor(Math.random() * this.projects.length),
      pick4: Math.floor(Math.random() * this.projects.length)
    }
  },
  components: {
  },
  mounted: function () {
    setInterval(() => {
      this.show = !this.show
      this.changeProjects()
      // console.log(this.pick1)
      // console.log(this.pick2)
      // console.log(this.pick3)
      // console.log(this.pick4)
    }, this.interval)
  },
  methods: {
    changeProjects: function () {
      // 撈兩個
      if (this.show) {
        this.pick3 = Math.floor(Math.random() * this.projects.length)
        this.pick4 = Math.floor(Math.random() * this.projects.length)
      } else {
        this.pick1 = Math.floor(Math.random() * this.projects.length)
        this.pick2 = Math.floor(Math.random() * this.projects.length)
      }
    }
  }
}
</script>

<style scoped>

h4{
  font-size: 17px;
}

h4.text{
  font-weight: bold;
}

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
  margin-left: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>

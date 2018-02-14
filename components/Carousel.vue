<template>
  <div class="Carousel" style="margin-bottom: 40px;">
      <div class="carousel-left">
        <transition name="fade">
            <div class="carousel-wrapper" v-if='show' key="1">
              <a :href="link1" target="_blank">
                <div class="imgwrapper">
                  <img :src='imgSrc1'>
                </div>
              </a>
              <a :href="link1" target="_blank">
                <div class="projects">
                    <h4 class="text">{{title1}}<br>{{subtitle1}}</h4>
                    <h4 class="date">{{date1}}</h4>
                </div>
              </a>
            </div>
            <div class="carousel-wrapper" v-else key="2">
              <a :href="link3" target="_blank">
                <div class="imgwrapper">
                  <img :src='imgSrc3'>
                </div>
              </a>
              <a :href="link3" target="_blank">
                <div class="projects">
                    <h4 class="text">{{title3}}<br>{{subtitle3}}</h4>
                    <h4 class="date">{{date3}}</h4>
                </div>
              </a>
            </div>
        </transition>
      </div>
      <div class="carousel-right">
        <transition name="fade">
          <div class="carousel-wrapper" v-if='show' key="3">
            <a :href="link2" target="_blank">
              <div class="imgwrapper">
                <img :src='imgSrc2'>
              </div>
            </a>
            <a :href="link2" target="_blank">
              <div class="projects">
                  <h4 class="text">{{title2}}<br>{{subtitle2}}</h4>
                  <h4 class="date">{{date2}}</h4>
              </div>
            </a>
          </div>
          <div class="carousel-wrapper" v-else key="4">
            <a :href="link4" target="_blank">
              <div class="imgwrapper">
                <img :src='imgSrc4'>
              </div>
            </a>
            <a :href="link4" target="_blank">
              <div class="projects">
                  <h4 class="text">{{title4}}<br>{{subtitle4}}</h4>
                  <h4 class="date">{{date4}}</h4>
              </div>
            </a>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>

export default {
  /* 本元件用途：
    *  PC版封面下方之左右並排圖片輪播圖
    * [傳入參數]：
    *  - interval: 輪播區間
    *  - projects: 傳入之所有 project list
    *  - folder: 所置放之folder路徑
    * */
  name: 'Carousel',
  props: ['interval', 'projects', 'folder'],
  computed: {
    imgSrc1: {
      get: function () {
        return this.folder + this.projects[this.pick1].gsx$pcpic.$t
      },
      set: function (newValue) {
        return this.folder + newValue
      }
    },
    imgSrc2: {
      get: function () {
        return this.folder + this.projects[this.pick2].gsx$pcpic.$t
      },
      set: function (newValue) {
        return this.folder + newValue
      }
    },
    imgSrc3: {
      get: function () {
        return this.folder + this.projects[this.pick3].gsx$pcpic.$t
      },
      set: function (newValue) {
        return this.folder + newValue
      }
    },
    imgSrc4: {
      get: function () {
        return this.folder + this.projects[this.pick4].gsx$pcpic.$t
      },
      set: function (newValue) {
        return this.folder + newValue
      }
    },
    title1: {
      // 用空白來分割title為大標與小標
      get: function () {
        return this.projects[this.pick1].gsx$title.$t.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle1: {
      get: function () {
        // 用空白來分割title為大標與小標
        if (this.projects[this.pick1].gsx$title.$t.split(' ').length > 2) {
          let subtitle = this.projects[this.pick1].gsx$title.$t.split(' ')[1]
          for (let i = 2; i < this.projects[this.pick1].gsx$title.$t.split(' ').length; i++) {
            let str = this.projects[this.pick1].gsx$title.$t.split(' ')[i]
            subtitle = subtitle + ' ' + str
          }
          return subtitle
        } else {
          return this.projects[this.pick1].gsx$title.$t.split(' ')[1]
        }
      },
      set: function (newValue) {
        return newValue
      }
    },
    title2: {
      get: function () {
        return this.projects[this.pick2].gsx$title.$t.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle2: {
      get: function () {
        if (this.projects[this.pick2].gsx$title.$t.split(' ').length > 2) {
          let subtitle = this.projects[this.pick2].gsx$title.$t.split(' ')[1]
          for (let i = 2; i < this.projects[this.pick2].gsx$title.$t.split(' ').length; i++) {
            let str = this.projects[this.pick2].gsx$title.$t.split(' ')[i]
            subtitle = subtitle + ' ' + str
          }
          return subtitle
        } else {
          return this.projects[this.pick2].gsx$title.$t.split(' ')[1]
        }
      },
      set: function (newValue) {
        return newValue
      }
    },
    title3: {
      get: function () {
        return this.projects[this.pick3].gsx$title.$t.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle3: {
      get: function () {
        if (this.projects[this.pick3].gsx$title.$t.split(' ').length > 2) {
          let subtitle = this.projects[this.pick3].gsx$title.$t.split(' ')[1]
          for (let i = 2; i < this.projects[this.pick3].gsx$title.$t.split(' ').length; i++) {
            let str = this.projects[this.pick3].gsx$title.$t.split(' ')[i]
            subtitle = subtitle + ' ' + str
          }
          return subtitle
        } else {
          return this.projects[this.pick3].gsx$title.$t.split(' ')[1]
        }
      },
      set: function (newValue) {
        return newValue
      }
    },
    title4: {
      get: function () {
        return this.projects[this.pick4].gsx$title.$t.split(' ')[0]
      },
      set: function (newValue) {
        return newValue
      }
    },
    subtitle4: {
      get: function () {
        if (this.projects[this.pick4].gsx$title.$t.split(' ').length > 2) {
          let subtitle = this.projects[this.pick4].gsx$title.$t.split(' ')[1]
          for (let i = 2; i < this.projects[this.pick4].gsx$title.$t.split(' ').length; i++) {
            let str = this.projects[this.pick4].gsx$title.$t.split(' ')[i]
            subtitle = subtitle + ' ' + str
          }
          return subtitle
        } else {
          return this.projects[this.pick4].gsx$title.$t.split(' ')[1]
        }
      },
      set: function (newValue) {
        return newValue
      }
    },
    date1: {
      get: function () {
        return this.projects[this.pick1].gsx$date.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    date2: {
      get: function () {
        return this.projects[this.pick2].gsx$date.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    date3: {
      get: function () {
        return this.projects[this.pick3].gsx$date.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    date4: {
      get: function () {
        return this.projects[this.pick4].gsx$date.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    link1: {
      get: function () {
        return this.projects[this.pick1].gsx$link.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    link2: {
      get: function () {
        return this.projects[this.pick2].gsx$link.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    link3: {
      get: function () {
        return this.projects[this.pick3].gsx$link.$t
      },
      set: function (newValue) {
        return newValue
      }
    },
    link4: {
      get: function () {
        return this.projects[this.pick4].gsx$link.$t
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  data: function () {
    return {
      show: true,
      // pick1: Math.floor(Math.random() * this.projects.length),
      // pick2: Math.floor(Math.random() * this.projects.length),
      // pick3: Math.floor(Math.random() * this.projects.length),
      // pick4: Math.floor(Math.random() * this.projects.length)
      pick1: 1,
      pick2: 2,
      pick3: 3,
      pick4: 4
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
      // 一次亂撈兩個
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

h4.date{
  color: #717071
}

.Carousel {
  position: relative;
  width: 100%;
  height: 126px;
  z-index: 1;
}

.carousel-left, .carousel-right {
  position: absolute;
  width: calc(50%-17.5px);
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
  margin-right: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

a{
  color: black;
  text-decoration: none;
  border: 0;
}
a:hover{
  color: black;
  text-decoration: none;
}

.imgwrapper{
  overflow: hidden;
}

.imgwrapper:hover img {
  transform: scale(1.1);
}

img {
  transition: all 0.5s;    
}

</style>

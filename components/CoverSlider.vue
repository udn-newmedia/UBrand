<template>
  <div class="Slider" :style="{backgroundColor: backgroundColor, paddingBottom: '20px'}">
    <div class="slider-wrapper">
        <div class="sliders clearfix" ref="sliders" 
              :style="{
                'transition' : 'none' 
              }">
            <div v-for="work in list" :key="work.name" class="slider">
                <a>
                    <div class="projects" :style="{width: projectWidth}">
                      <img :src="work.mobCoverPic">
                      <div class="texts">
                        <div class="coverlabel">{{work.class}}</div>
                        <h2>{{work.maintitle}}</h2>
                        <h2>{{work.subtitle}}</h2>
                        <p class="date">{{work.date}}</p>
                        <CircleAnim triggerPoint="0"/>
                      </div>
                    </div>
                </a>
            </div>
        </div>
        <ul class="slider-nav">
            <li v-for="n in list.length-3" :key="n.id">
                <span class="circle" :class="{'active': n === current}"></span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import CircleAnim from '~/Components/CircleAnim.vue'

if (process.browser) {
  var Hammer = require('Hammerjs')
}

export default {
  name: 'Slider',
  props: ['interval', 'background-color', 'sliders'],
  components: {
    CircleAnim
  },
  computed: {
    list: function () {
      this.sliders.forEach(ele => {
        ele.maintitle = ele.title.split(' ')[0]
        ele.subtitle = ele.title.split(' ')[1]
      })
      return this.sliders
    }
  },
  data: function () {
    return {
      current: 1,
      transitionDuration: 500,
      projectWidth: 340,
      transitionWidth: 340 + 9,
      panOnce: false
    }
  },
  mounted: function () {
    this.list.push(this.list[0])
    this.list.push(this.list[1])
    this.list.unshift(this.list[this.list.length - 3])

    let $sliders = this.$refs.sliders
    $sliders.style.width = (this.list.length * 100) + '%'
    $sliders.style.transform = 'translateX(-' + this.current * (this.transitionWidth) + 'px)'
    // 自動輪播
    if (this.interval) {
      setInterval(() => {
        this.gotoNext('next')
      }, this.interval)
    }

    let hammer = new Hammer($sliders)

    hammer.on('panleft', function (ev) {
      // console.log(this.panOnce)
      if (!this.panOnce) {
        this.gotoNext('next')
        this.panOnce = true
        setTimeout(() => {
          this.panOnce = false
        }, 500)
      }
    }.bind(this))

    hammer.on('panright', function (ev) {
      if (!this.panOnce) {
        this.gotoNext('prev')
        this.panOnce = true
        setTimeout(() => {
          this.panOnce = false
        }, 500)
      }
    }.bind(this))
  },

  methods: {
    gotoNext: function (index) {
      let that = this
      let $sliders = this.$refs.sliders
      if (index === 'next') {
        that.current++
      } else if (index === 'prev') {
        that.current--
      } else {
        that.current = parseInt(index)
      }

      that.current = (that.current) % that.list.length
      if (that.current === that.list.length - 2) {
        $sliders.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
        $sliders.style.transform = 'translateX(-' + that.current * (this.transitionWidth) + 'px)'
        that.current = 1
        setTimeout(() => {
          $sliders.style.transition = 'none'
          $sliders.style.transform = 'translateX(-' + that.current * (this.transitionWidth) + 'px)'
        }, this.transitionDuration)
      } else if (that.current === 0) {
        $sliders.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
        $sliders.style.transform = 'translateX(-' + that.current * (this.transitionWidth) + 'px)'
        that.current = that.list.length - 3
        setTimeout(() => {
          $sliders.style.transition = 'none'
          $sliders.style.transform = 'translateX(-' + that.current * (this.transitionWidth) + 'px)'
        }, this.transitionDuration)
      } else {
        $sliders.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
        $sliders.style.transform = 'translateX(-' + that.current * (this.transitionWidth) + 'px)'
      }
    }
  }
}
</script>

<style scoped>

img{
    width: 340px;
    height: 280px;
    margin-right: 9px;
}

.slider-wrapper{
    width: 100%;
    position: relative;
    overflow-x: hidden;
}

.sliders{
    display: block;
    width:99999999px;
}

.sliders .slider{
    float: left;
}

ul.slider-nav{
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 20px 0 0 0;
    padding: 0;
}

ul.slider-nav li{
    float: left;
    margin: 0 3px;
}

ul.slider-nav li .circle{
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: transparent;
}

ul.slider-nav li .circle.active{
    background: #bfbfbf;
    border-color: #bfbfbf;
}

.projects .texts{
  position: relative;
  background: white;
  margin-right: 9px;
  padding: 15px;
}

h2{
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
}

p{
  font-size: 21px;
  margin: 0;
}

a{
  color: black;
  text-decoration: none;
}

@media screen and (max-width: 767px){
  h2{
      font-size: 26px;
  }

  p{
      font-size: 18px;
      line-height: 32px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
  h2{
      font-size: 30px;
  }
  p{
      font-size: 20px;
      line-height: 32px;
  }
}
@media screen and (min-width: 1025px){
  p>br{
      line-height: 50px;
  }
}

p.date{
    color: #717071
}

.coverlabel{
    display: inline-block;
    font-size: 12px;
    color: white;
    background: linear-gradient(to right,#c13432 ,#d3611c);
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 100px;
}
</style>

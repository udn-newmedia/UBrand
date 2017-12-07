<template>
  <!-- <Container background-color="#ECEAEA"> -->
      <div class="Slider">

        <button @click="change">換！</button>

        <div class="slider-wrapper">
            <div class="sliders clearfix" ref="sliders" 
                  :style="{
                    'transition' : 'all ' + transitionDuration/1000 + 's' 
                  }">
                <div v-for="img in list" :key="img.name" class="slider">
                    <a>
                        <img :src="img.pic">
                    </a>
                </div>
            </div>
            <ul class="slider-nav">
                <li v-for="n in list.length-2" :key="n.id">
                    <span class="circle" :class="{'active': n === current + 1}"></span>
                </li>
            </ul>
        </div>
        
      </div>
  <!-- </Container> -->
</template>

<script>
import Container from 'udn-newmedia-vue-components/components/Content.vue'
import pic1 from '~/assets/mobile/bg-1.jpg'

export default {
  name: 'Slider',
  props: ['interval'],
  data: function () {
    return {
      pic1: pic1,
      current: 0,
      transitionDuration: 500,
      list: [
        {
          name: 'project1',
          pic: pic1
        }, {
          name: 'project2',
          pic: pic1
        }, {
          name: 'project3',
          pic: pic1
        }, {
          name: 'project4',
          pic: pic1
        }
      ]
    }
  },
  components: {
    Container
  },
  mounted: function () {
    this.list.push(this.list[0])
    this.list.push(this.list[1])

    let $sliders = this.$refs.sliders
    $sliders.style.width = (this.list.length * 100) + '%'
    // 自動輪播
    if (this.interval) {
      setInterval(() => {
        this.gotoNext('next')
      }, this.interval)
    }
  },

  methods: {
    change: function () {
      this.gotoNext('next')
    },
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
      // $sliders.style.marginLeft = '-' + (that.current * 100) + '%'
      if (that.current === that.list.length - 2) {
        $sliders.style.transform = 'translateX(-' + that.current * (340 + 9) + 'px)'
        that.current = 0
        setTimeout(() => {
          $sliders.style.transition = 'none'
          $sliders.style.transform = 'translateX(0)'
        }, this.transitionDuration)
      } else {
        $sliders.style.transition = 'all ' + this.transitionDuration / 1000 + 's'
        $sliders.style.transform = 'translateX(-' + that.current * (340 + 9) + 'px)'
      }
    }
  }
}
</script>

<style>
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
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    list-style: none;
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
    background: #fb83ac;
    border-color: #fb83ac;
}
</style>

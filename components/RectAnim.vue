<template>
  <div 
    class="rectAnim" 
    :class="{'right': position === 'right', 'left': position === 'left'}"
    ref="rects">
    <img :src="rect1">
    <img :src="rect2" ref="second">
    <img :src="rect3">
  </div>
</template>

<script>
import rect1 from '~/assets/a-3.svg'
import rect2 from '~/assets/a-4.svg'
import rect3 from '~/assets/a-5.svg'

export default {
  /* 本元件用途：
    *  封面之長方形動畫
    * [傳入參數]：
    *  - triggerPoint: 觸發點 (滑動到哪一個位置觸發)
    *  - position: ('left' or 'right') 在左邊或右邊
    * [註]:
    * */  
  name: 'RectAnim',
  props: ['triggerPoint', 'position'],
  data: function () {
    return {
      rect1: rect1,
      rect2: rect2,
      rect3: rect3,
      trigger: Number(this.triggerPoint)
    }
  },
  beforeMount: function () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroyed: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted: function () {
    let $secondRect = this.$refs.second

    if (this.trigger === 0) {
      $secondRect.classList.add('blueRectMoveAnim')
    }
  },
  methods: {
    onScroll: function () {
      let $rect = this.$refs.rects
      let $secondRect = this.$refs.second

      if (pageYOffset > this.triggerPoint - 200) {
        if ($rect.classList.contains('right') && !$secondRect.classList.contains('blueRectMoveAnim')) {
          $secondRect.classList.add('blueRectMoveAnim')
        } else if ($rect.classList.contains('left') && !$secondRect.classList.contains('blueRectMoveAnimLeft')) {
          $secondRect.classList.add('blueRectMoveAnimLeft')
        }
      }
    }
  }
}
</script>

<style scoped>
.rectAnim {
  position: absolute;
  bottom: 135px;
  width: 180px;
  height: 107px;
}

.right{
  right: 0;
  text-align: right;
}

.left{
  left: 0;
  text-align: left;
}

.rectAnim img:first-child{
  width: 120px;
}

.rectAnim img:nth-child(2){
  width: 140px;
  margin-top: 5px;
  transform: translateX(-50%);
}

.rectAnim img:last-child{
  width: 90px;  
  margin-top: 40px;
}

.blueRectMoveAnim {
  animation-name: blueRectMove;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes blueRectMove {
    0% {transform: translateX(-50%)}
    100% {transform: translateX(0)}
}

.blueRectMoveAnimLeft {
  animation-name: blueRectMoveLeft;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}

@keyframes blueRectMoveLeft {
    0% {transform: translateX(50%)}
    100% {transform: translateX(0)}
}

</style>
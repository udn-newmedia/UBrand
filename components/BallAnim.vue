<template>
  <div 
    class="ballAnim" 
    :class="{'right': position === 'right', 'left': position === 'left'}"
    ref="ball">
    <img :src="ball">
  </div>
</template>

<script>
import ball from '~/assets/a-6.svg'

export default {
  name: 'BallAnim',
  props: ['triggerPoint', 'position'],
  data: function () {
    return {
      ball: ball,
      trigger: Number(this.triggerPoint)
    }
  },
  // beforeMount: function () {
  //   window.addEventListener('scroll', this.onScroll)
  // },
  // beforeDestroyed: function () {
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  // destroyed: function () {
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  // mounted: function () {
  //   let $secondRect = this.$refs.second

  //   if (this.trigger === 0) {
  //     $secondRect.classList.add('blueRectMoveAnim')
  //   }
  // },
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

.ballAnim {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 268px;
  height: 280px;
  transform: translateX(-30%) translateY(20%);
}

img {
  width: 100%;
}

/* 
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
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes blueRectMoveLeft {
    0% {transform: translateX(50%)}
    100% {transform: translateX(0)}
} */

</style>
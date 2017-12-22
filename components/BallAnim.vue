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
    let $ball = this.$refs.ball

    if (this.trigger === 0) {
      $ball.classList.add('ballGrowAnimLeft')
    }
  },
  methods: {
    onScroll: function () {
      let $ball = this.$refs.ball
      let offsetY = $ball.getBoundingClientRect().top
      let offsetBottom = $ball.getBoundingClientRect().bottom

      if (pageYOffset > this.triggerPoint - 200) {
        if ($ball.classList.contains('left') && !$ball.classList.contains('ballGrowAnimLeft')) {
          $ball.classList.add('ballGrowAnimLeft')
        } else if ($ball.classList.contains('right') && !$ball.classList.contains('ballGrowAnimRight')) {
          $ball.classList.add('ballGrowAnimRight')
        }
      }

      if (offsetY < this.triggerPoint + 300 && offsetBottom > 0) {
        if (!$ball.classList.contains('allMovingUpLeft') && $ball.classList.contains('left')) {
          $ball.classList.add('allMovingUpLeft')
        } else if (!$ball.classList.contains('allMovingUpRight') && $ball.classList.contains('right')) {
          $ball.classList.add('allMovingUpRight')
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
  z-index: 0;
}

.ballAnim.left {
  left: 0;
  width: 268px;
  height: 280px;
  transform: translateX(-30%) translateY(20%);
}

.ballAnim.right {
  right: 0;
  width: 268px;
  height: 280px;
  transform: rotate(180deg) translateX(-25%) translateY(-25%);
}

@media screen and (max-width: 1200px){
  .ballAnim.left {
    left: 0;
    width: 152px;
    height: 158px;
    transform: translateX(-30%) translateY(20%);
  }
}

img {
  width: 100%;
}

.ballGrowAnimLeft img{
  animation-name: ballGrowUpLeft;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

.ballGrowAnimRight img{
  animation-name: ballGrowUpRight;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes ballGrowUpLeft {
    0% {
      width: 268px; 
      height: 280px;
    }
    100% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(-20%);
    }
}

@media screen and (max-width: 1200px){
  @keyframes ballGrowUpLeft {
      0% {
        width: 152px; 
        height: 158px;
      }
      100% {
        width: 228px; 
        height: 237px;
        transform: translateX(-10%) translateY(-20%);
      }
  }
}


@keyframes ballGrowUpRight {
    0% {
      width: 268px; 
      height: 368px;
    }
    100% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(-10%);
    }
}

.allMovingUpLeft img{
  animation-name: movingUpleft;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

@keyframes movingUpleft {
    0% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(-20%);
    }
    100% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(-30%);
    }
}

@media screen and (max-width: 1199px){
  @keyframes movingUpleft {
      0% {
        width: 228px; 
        height: 237px;
        transform: translateX(-10%) translateY(-20%);
      }
      100% {
        width: 228px; 
        height: 237px;        
        transform: translateX(-10%) translateY(-30%);
      }
  }
}


.allMovingUpRight img{
  animation-name: movingUpright;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

@keyframes movingUpright {
    0% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(-20%);
    }
    100% {
      width: 402px; 
      height: 420px;
      transform: translateX(-10%) translateY(0);
    }
}


</style>
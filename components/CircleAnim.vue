<template>
  <div 
    class="circles" 
    ref="circles">
    <img :src="circle2">
    <img :src="circle1">
  </div>
</template>

<script>
import circle1 from '~/assets/a-1.svg'
import circle2 from '~/assets/a-2.svg'

export default {
  name: 'CircleAnim',
  props: ['triggerPoint'],
  data: function () {
    return {
      circle1: circle1,
      circle2: circle2,
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
    let $circles = this.$refs.circles
    let firstChild = $circles.firstChild
    let lastChild = $circles.lastChild

    if (this.trigger === 0) {
      firstChild.classList.add('MovingUpAnim')
      lastChild.classList.add('MovingDownAnim')
    }
  },
  methods: {
    onScroll: function () {
      let $circles = this.$refs.circles
      let offsetY = $circles.getBoundingClientRect().top
      let offsetBottom = $circles.getBoundingClientRect().bottom

      let firstChild = $circles.firstChild
      let lastChild = $circles.lastChild

      if (pageYOffset > this.triggerPoint - 200) {
        if (!firstChild.classList.contains('MovingUpAnim')) {
          firstChild.classList.add('MovingUpAnim')
          lastChild.classList.add('MovingDownAnim')
        }
      }

      if (offsetY < this.triggerPoint + 25 && offsetBottom > 0) {
        if (!$circles.classList.contains('allMovingDownAndUp')) {
          $circles.classList.add('allMovingDownAndUp')
        }
      } else {
        if ($circles.classList.contains('allMovingDownAndUp')) {
          $circles.classList.remove('allMovingDownAndUp')
        }
      }
    }
  }
}
</script>

<style scoped>
.circles{
    position: absolute;
    right: 0;
    top: 0;
    width: 90px;
    height: 139px;
    transform: translateX(60%);
    transition: all 2s;
    transition-timing-function: linear;
}

@media screen and (max-width: 1023px){
  .circles{
    width: 68px;
    height: 104px;
    transform: translateX(-20px) translateY(-70px);
  }
}

.circles img{
  position: absolute;
  width: 100%;
}

.circles img:first-child{
  bottom: 0;
  transform: translateY(50%)
}

.MovingUpAnim{
  animation-name: movingUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.circles img:last-child{
  top: 0;
  transform: translateY(0)
}

.MovingDownAnim{
  animation-name: movingDown;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes movingDown {
    0% {transform: translateY(0)}
    100% {transform: translateY(25%)}
}

@keyframes movingUp {
    0% {transform: translateY(50%)}
    100% {transform: translateY(20%)}
}

.allMovingDownAndUp {
  animation-name: movingDownThenUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

@keyframes movingDownThenUp {
    0% {transform: translateX(60%) translateY(0)}
    100% {transform: translateX(60%) translateY(-25%)}
}

@media screen and (max-width: 1023px){
  @keyframes movingDownThenUp {
      0% {transform: translateX(-20px) translateY(-70px)}
      100% {transform: translateX(-20px) translateY(-100px)}
  }
}
</style>
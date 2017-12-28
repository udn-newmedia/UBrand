<template>
  <div class="Slideshow" :class="{'right': position === 'right','left': position === 'left'}">
    <div class="slide-wrapper">
      <div class="relative">
        <a :href="link" target="_blank">
          <img :src='imgSrc'>
          <div class="projects">
              <h4 class="text">{{maintitle}} {{subtitle}}</h4>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneSlide',
  props: ['interval', 'position', 'slide'],
  computed: {
    imgSrc: function () {
      return 'projects/' + this.slide[0].gsx$pcpic.$t
    },
    maintitle: function () {
      return this.slide[0].gsx$title.$t.split(' ')[0]
    },
    subtitle: function () {
      return this.slide[0].gsx$title.$t.split(' ')[1]
    },
    link: function () {
      return this.slide[0].gsx$link.$t
    }
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

h4{
  color: black;
  font-size: 25px;
}

.Slideshow {
  position:absolute; 
  width: 45%;
  height: 100%;
  top: 50%; 
  transform: translateY(-7.5%);
  transition: all 0.5s ease-in;
}

@media screen and (min-width:1200px){
  .Slideshow {
    /* transform: translateY(-22.5%); */
    transform: translateY(-30%);
    width: 700px;
    height: 400px;
  }
}

.Slideshow.right {
  right: 0;
}

.Slideshow.left {
  left: 0;
}

.slide-wrapper {
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.slide-wrapper .relative {
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
  transition: all 0.5s;
}

.slide-wrapper:hover img {
  transform: scale(1.1);
}

.projects {
  background: white;
  position: absolute;
  bottom: -2px;
  right: 50%;
  transform: translateX(50%);
  width: 80%;
  text-align: center;
}

.relative{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

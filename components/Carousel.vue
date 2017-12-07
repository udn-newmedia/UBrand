<template>
  <Container background-color="#ECEAEA" class="Container">
      <div class="Carousel">
        <div class="carousel-wrapper">
          <img :src='pic1' alt="">
          <div class="label">
              <h3 class="text">好好說再見<br>插畫記林杰樑走後1500天</h3>
              <p class="date">2017.11.23</p>
          </div>
        </div>
        <div class="carousel-wrapper">
          <img :src='pic2' alt="">
            <div class="label">
              <h3 class="text">好好說再見<br>插畫記林杰樑走後1500天</h3>
              <p class="date">2017.11.23</p>
          </div>
        </div>
      </div>
  </Container>
</template>

<script>
import Container from 'udn-newmedia-vue-components/components/Content.vue'
import pic1 from '~/assets/pc/bg-2.jpg'
import pic2 from '~/assets/pc/bg-3.jpg'

export default {
  name: 'Carousel',
  data: function () {
    return {
      pic1: pic1,
      pic2: pic2
    }
  },
  components: {
    Container
  }
}
</script>

<style>
.Carousel{
    display: flex;
    flex-direction: row;    
    justify-content: center;
}

.carousel-wrapper{
    display: flex;
    flex-direction: row;
    width: 400px;
}

.label{
    text-align: left;
}
</style>

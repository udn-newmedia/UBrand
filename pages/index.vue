<template>
  <div id="index">
    <Container background-color="#ECEAEA">
      <h1 class="title">
        ubrand
      </h1>
      <h2 class="subtitle">
        index
      </h2>
      <Carousel class="hidden-mobile" :interval="5000"></Carousel>
      <Slider class="hidden-pc"></Slider>
    </Container>  
    <Container background-color="#ECEAEA">
      <div class="links" style="display: block;">
        <ul>          
          <li><nuxt-link to="/multimedia">多媒體報導</nuxt-link></li>
          <li><nuxt-link to="/data">數據專題</nuxt-link></li>
          <li><nuxt-link to="/interactive">互動新聞</nuxt-link></li>
          <li><nuxt-link to="/explan">解釋影音</nuxt-link></li>
          <li><nuxt-link to="/native">原生廣告</nuxt-link></li>
          <li><nuxt-link to="/research">研究報告</nuxt-link></li>
        </ul>
      </div>
    </Container>    
  </div>
</template>

<script>
import Container from 'udn-newmedia-vue-components/components/Content.vue'
import Carousel from '~/Components/Carousel.vue'
import Slider from '~/Components/Slider.vue'

export default {
  components: {
    Carousel, Slider, Container
  }
}
</script>

<style>
#index {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;  
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

@media screen and (max-width: 1199px){
  .hidden-mobile{
    display: none;
  } 
}

@media screen and (min-width: 1200px){
  .hidden-pc{
    display: none;
  } 
}


.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}
</style>

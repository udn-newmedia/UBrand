<template>
  <div id="index">
    <HeadBar></HeadBar>
    <ContentWrapper background-color="#f7f7f7">
      <!-- <h1 class="title">
        ubrand
      </h1> -->
      <!-- <h2 class="subtitle">
        index
      </h2> -->
      <div class="padding-for-headbar"></div>
      <Carousel class="hidden-mobile" :interval="5000"></Carousel>
    </ContentWrapper>  
    <Slider class="hidden-pc" background-color="#f7f7f7"></Slider>
    <ContentWrapper background-color="#f7f7f7">
      <p><br></p>
      <Bookmarks></Bookmarks>
    </ContentWrapper>
    
    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" style="right: 0;"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="left"></IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" style="left: 0;"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="right"></IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>


    <!-- <section>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="right"></IndexSection>
      </ContentWrapper>
        <Slider class="hidden-pc" background-color="#fff"></Slider>
        <slideshow class="hidden-mobile" :interval="5000" style="position:absolute; left: 0;"></slideshow>
    </section> -->

    <!-- 
    <IndexSection></IndexSection>
    <Slider class="hidden-pc" background-color="#fff"></Slider>

    <IndexSection></IndexSection>
    <Slider class="hidden-pc" background-color="#fff"></Slider>

    <IndexSection></IndexSection>
    <Slider class="hidden-pc" background-color="#fff"></Slider>

    <IndexSection></IndexSection>
    <Slider class="hidden-pc" background-color="#fff"></Slider>

    <IndexSection></IndexSection>
    <Slider class="hidden-pc" background-color="#fff"></Slider>-->

    <!-- <ContentWrapper background-color="#f7f7f7">
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
    </ContentWrapper>     -->
  </div>
</template>

<script>
// import Container from 'udn-newmedia-vue-components/components/Content.vue'
import ContentWrapper from '~/Components/Content.vue'
import Carousel from '~/Components/Carousel.vue'
import Slider from '~/Components/Slider.vue'
import HeadBar from '~/Components/HeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import IndexSection from '~/Components/IndexSection.vue'
import Slideshow from '~/Components/Slideshow.vue'

export default {
  components: {
    Carousel, Slider, ContentWrapper, HeadBar, Bookmarks, IndexSection, Slideshow
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
    display: none!important;
  } 
}

@media screen and (min-width: 1200px){
  .hidden-pc{
    display: none!important;
  } 
}


.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}

.padding-for-headbar {
  padding-top: 46px;
}

@media screen and (min-width: 1200px){
  .padding-for-headbar {
    padding-top: 50px;
  }

  section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

/* For ie11 and up */
  /* _:-ms-fullscreen, :root .slideshow.ie11 { top: 0!important; } */
}
</style>

<template>
  <div id="index">
    <HeadBar></HeadBar>
    <ContentWrapper background-color="#f7f7f7">
      <div class="padding-for-headbar"></div>
      <p class="hidden-mobile"><br></p>
      <IndexCover class="hidden-mobile" :srcCover="coverImage" :coverTitle="coverTitle" :description="coverDescription" :date="coverDate" :label="coverLabel"></IndexCover>
      <p class="hidden-mobile"><br></p>
      <Carousel class="hidden-mobile" :interval="5000"></Carousel>
    </ContentWrapper>  
    <Slider class="hidden-pc" background-color="#f7f7f7"></Slider>
    <ContentWrapper background-color="#f7f7f7">
      <p><br></p>
      <Bookmarks></Bookmarks>
    </ContentWrapper>
    
    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="right"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="left">
          <div slot="intro">
            <h2>多媒體報導</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/multimedia">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="left"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="right">
          <div slot="intro">
            <h2>數據專題</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/data">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="right"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="left">
          <div slot="intro">
            <h2>互動新聞</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/interactive">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="left"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="right">
          <div slot="intro">
            <h2>解釋影音</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/explan">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="right"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="left">
          <div slot="intro">
            <h2>原生廣告</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/native">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>

    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="left"></slideshow>
      <ContentWrapper>
        <IndexSection background-color="#fff" position="right">
          <div slot="intro">
            <h2>研究報告</h2>
            <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
          </div>
          <button><nuxt-link to="/research">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <Slider class="hidden-pc" background-color="#fff"></Slider>
    </section>
    
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
import IndexCover from '~/Components/IndexCover.vue'

import coverSrc from '~/assets/pc/bg-1.jpg'

export default {
  components: {
    Carousel, Slider, ContentWrapper, HeadBar, Bookmarks, IndexSection, Slideshow, IndexCover
  },
  data: function () {
    return {
      coverImage: coverSrc,
      coverTitle: '好好說再見 插畫記林杰樑走後1500天',
      coverDescription: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
      coverDate: '2017.11.23',
      coverLabel: '多媒體報導'
    }
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

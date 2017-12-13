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
    <ContentWrapper background-color="#fff">
      <p><br></p>
      <Bookmarks>
        <li><a href="." class="hidden-pc">多媒體</a><a href="." class="hidden-mobile">多媒體報導</a></li>
        <li><a href="." class="hidden-pc">數據</a><a href="." class="hidden-mobile">數據報導</a></li>
        <li><a href="." class="hidden-pc">互動</a><a href="." class="hidden-mobile">互動新聞</a></li>
        <li><a href="." class="hidden-pc">影音</a><a href="." class="hidden-mobile">解釋影音</a></li>
        <li><a href="." class="hidden-pc">原生廣告</a><a href="." class="hidden-mobile">原生廣告</a></li>
      </Bookmarks>
    </ContentWrapper>    
    <section>
      <slideshow class="hidden-mobile slideshow" :interval="5000" position="right"></slideshow>
      <ContentWrapper background-color="#fff">
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
      <ContentWrapper background-color="#fff">
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
      <ContentWrapper background-color="#fff">
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
      <ContentWrapper background-color="#fff">
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
      <ContentWrapper background-color="#fff">
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
      <ContentWrapper background-color="#fff">
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
    
    <ContentWrapper background-color="#f7f7f7">
      <p><br></p>
      <p><br></p>
      <div class="about">
        <div class="anim hidden-mobile">動畫</div>
        <div class="info">
          <div class="infoTitle">
            <h2><b>未來的媒體 <br class="hidden-pc">用創新說故事</b></h2>
            <div class="anim hidden-pc">動畫</div>
          </div>
          <p><br></p>
          <p>新媒體中心是聯合報新聞部的數位心臟，<br class="hidden-mobile">由新聞、資訊工程、視覺設計與行銷人才組成的團隊，<br class="hidden-mobile">探索創新的內容閱讀體驗，結合新科技，<br class="hidden-mobile">製作多媒體報導、數據專題、互動新聞等，<br class="hidden-mobile">讓讀者更淺顯易懂的看動新聞議題。<br class="hidden-mobile">
          <p><br></p>
          <p>推出多檔叫好叫座專題，<br class="hidden-mobile">包括流沙中年、5個少年染毒的故事、致照顧者、中橫走過一甲子等，<br class="hidden-mobile">引起讀者廣泛討論。</p>
          <p><br></p>
          <div class="fbLink">
            <div class="fb">
              <img :src="fbLogo" alt="">
              <p class="fbgroup">UDN 新媒體</p>
            </div>
            <div class="fb">
              <img :src="fbLogo" alt="">
              <p class="fbgroup">聯 沙龍</p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>

    <section class="fullpage backgroundGray">
      <p class="hidden-pc"><br></p>
      <p class="hidden-pc"><br></p>
      <EmbededVideo :src="introVideo" background-color="#f7f7f7"></EmbededVideo>
    </section>

    <Contact background-color="#3e3a39"></Contact>

    <ContentWrapper background-color="#3e3a39">
      <p><br></p>
      <p><br></p>
      <div class="nmd">
        <p>聯合報新聞部 新媒體中心</p>
        <p>新北市汐止區大同路一段369號</p>
        <p>TEL : 02-8692-5588 # 2302</p>
        <p>ubrandstudio@udngroup.com.tw</p>
      </div>
      <Logo></Logo>
      <p><br></p>
      <p><br></p>
      <p><br></p>
    </ContentWrapper>
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
import EmbededVideo from '~/Components/EmbededVideo.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'

import coverSrc from '~/assets/pc/bg-1.jpg'
import fbLogo from '~/assets/logo_fb.svg'
import introVideo from '~/assets/cover-video0.mp4'

export default {
  components: {
    Carousel, Slider, ContentWrapper, HeadBar, Bookmarks, IndexSection, Slideshow, IndexCover, EmbededVideo, Contact, Logo
  },
  data: function () {
    return {
      fbLogo: fbLogo,
      introVideo: introVideo,
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

.fullpage {
  height: 100vh;
}

.backgroundGray {
  background-color: #f7f7f7;
}

.padding-for-headbar {
  padding-top: 46px;
}

.about {
  display: flex;
  justify-content: space-between;
}

.about .info {
  display: block;
  width: 100%;
}

.fbLink {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fbLink .fb{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}

.fb img{
  width: 160px;
}

.fb .fbgroup {
  position: absolute;
  transform: translateX(15%);
}

@media screen and (max-width: 768px){
  .fb .fbgroup {
    font-size: 15px;
  }
}

.infoTitle {
  display: flex;
  justify-content: space-between;
}

.infoTitle h2 {
  width: 60%;
}

.about .anim {
  border: solid 1px black;
  width: 20%;
  height: 50px;
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

  .about .info {
    display: block;
    width: 90%;
  }

  .fbLink .fb{
    margin-right: 30px;
  }

  .fb img{
    width: 200px;
  }

  .fb .fbgroup {
    transform: translateX(15%);
  }

  .infoTitle h2 {
    width: 100%;
  }

/* For ie11 and up */
  /* _:-ms-fullscreen, :root .slideshow.ie11 { top: 0!important; } */
}

.nmd p {
  color: #fff;
}
</style>

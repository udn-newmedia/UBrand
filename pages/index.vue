<template>
  <div id="index">
    <HeadBar :bookmark-display="stickyAnchors">
      <Bookmarks class="anchors">
        <li>
          <a 
            href="." 
            class="hidden-pc"><p>多媒體</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"><p>多媒體報導</p>
          </a>
        </li>
        <li>
          <a 
            href="." 
            class="hidden-pc"><p>數據</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"><p>數據報導</p>
          </a>
        </li>
        <li>
          <a 
            href="." 
            class="hidden-pc"><p>互動</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"><p>互動新聞</p>
          </a>
        </li>
        <li>
          <a 
            href="." 
            class="hidden-pc"><p>影音</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"><p>解釋影音</p>
          </a>
        </li>
        <li>
          <a 
            href="." 
            class="hidden-pc"><p>原生廣告</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"><p>原生廣告</p>
          </a>
        </li>
      </Bookmarks>
    </HeadBar>
    <ContentWrapper 
      background-color="#f7f7f7" 
      style="position: relative; overflow: hidden;">

      <div class="padding-for-headbar"/>
      <p class="hidden-mobile"><br></p>
      <IndexCover 
        class="hidden-mobile" 
        :src-cover="coverImage" 
        :cover-title="coverTitle" 
        :description="coverDescription" 
        :date="coverDate" 
        :label="coverLabel"/>
      <p class="hidden-mobile"><br></p>
      <Carousel 
        class="hidden-mobile" 
        :interval="5000"/>
      <RectAnim 
        class="hidden-mobile"
        :trigger-point="0"
        position="right"/>
      <BallAnim
        class="hidden-mobile"
        :trigger-point="0"
        position="left"/>
    </ContentWrapper>  
    <CoverSlider 
      class="hidden-pc" 
      background-color="#f7f7f7"/>
    
    <Bookmarks 
      id="floatingAnchor" 
      class="anchors">
      <p slot="padding"><br></p>
      <li>
        <a 
          href="." 
          class="hidden-pc"><p>多媒體</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"><p>多媒體報導</p>
        </a>
      </li>
      <li>
        <a 
          href="." 
          class="hidden-pc"><p>數據</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"><p>數據報導</p>
        </a>
      </li>
      <li>
        <a 
          href="." 
          class="hidden-pc"><p>互動</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"><p>互動新聞</p>
        </a>
      </li>
      <li>
        <a 
          href="." 
          class="hidden-pc"><p>影音</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"><p>解釋影音</p>
        </a>
      </li>
      <li>
        <a 
          href="." 
          class="hidden-pc"><p>原生廣告</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"><p>原生廣告</p>
        </a>
      </li>
    </Bookmarks>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="left">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animMultimedia"/> -->
          <video 
            slot="anim"
            class="anim" 
            :src="animMultimedia" 
            muted /> 
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>多媒體報導</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/multimedia">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="right">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animData"/> -->
          <video 
            slot="anim"
            class="anim" 
            :src="animData" 
            muted/> 
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>數據專題</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/data">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="left">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animInteractive"/>      -->
          <video 
            slot="anim"
            class="anim" 
            :src="animInteractive" 
            muted/>      
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>互動新聞</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/interactive">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="right">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animExplan"/>  -->
          <video 
            slot="anim"
            class="anim" 
            :src="animExplan" 
            muted/>               
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>解釋影音</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/explan">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="left">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animNative"/>     -->
          <video 
            slot="anim"
            class="anim" 
            :src="animNative" 
            muted/>                     
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>原生廣告</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/native">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"/>
      <ContentWrapper background-color="#fff">
        <IndexSection 
          background-color="#fff" 
          position="right">
          <!-- <Bodymovin 
            slot="anim" 
            class="anim"
            :jsonfile="animResearch"/>     -->
          <video 
            slot="anim"
            class="anim" 
            :src="animResearch" 
            muted/>                    
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>研究報告</h1>
            <h3>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <button class="hideAtStart"><nuxt-link to="/research">看更多...</nuxt-link></button>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"/>
      <div class="hidden-pc onetenth"/>
    </section>
    
    <ContentWrapper 
      background-color="#f7f7f7" 
      id="aboutSection"
      style="position: relative;">
      <p><br></p>
      <p><br></p>
      <div class="about">
        <div class="anim hidden-mobile">
          <CircleAnim :trigger-point="aboutSectionOffset"/>
        </div>
        <div class="info">
          <div class="infoTitle">
            <h2><b>未來的媒體 <br class="hidden-pc">用創新說故事</b></h2>
            <div class="anim hidden-pc" style="transform: translateY(60%);">
              <CircleAnim :trigger-point="aboutSectionOffset"/>              
            </div>
          </div>
          <p><br></p>
          <p>新媒體中心是聯合報新聞部的數位心臟，<br class="hidden-mobile">由新聞、資訊工程、視覺設計與行銷人才組成的團隊，<br class="hidden-mobile">探索創新的內容閱讀體驗，結合新科技，<br class="hidden-mobile">製作多媒體報導、數據專題、互動新聞等，<br class="hidden-mobile">讓讀者更淺顯易懂的看動新聞議題。<br class="hidden-mobile"></p>
          <p><br></p>
          <p>推出多檔叫好叫座專題，<br class="hidden-mobile">包括流沙中年、5個少年染毒的故事、致照顧者、中橫走過一甲子等，<br class="hidden-mobile">引起讀者廣泛討論。</p>
          <p><br></p>
          <div class="fbLink">
            <div class="fb">
              <img :src="fbLogo">
              <p class="fbgroup">UDN 新媒體</p>
            </div>
            <div class="fb">
              <img :src="fbLogo">
              <p class="fbgroup">聯 沙龍</p>
            </div>
          </div>
        </div>
      </div>
      <RectAnim 
        class="hidden-mobile"
        :trigger-point="aboutSectionOffset"
        position="left"/>
    </ContentWrapper>

    <section class="fullpage backgroundGray">
      <p class="hidden-pc"><br></p>
      <p class="hidden-pc"><br></p>
      <EmbededVideo 
        :src="introVideo" 
        background-color="#f7f7f7"/>
    </section>

    <Contact background-color="#3e3a39"/>

    <ContentWrapper background-color="#3e3a39">
      <p><br></p>
      <p><br></p>
      <div class="nmd">
        <p>聯合報新聞部 新媒體中心</p>
        <p>新北市汐止區大同路一段369號</p>
        <p>TEL : 02-8692-5588 # 2302</p>
        <p>ubrandstudio@udngroup.com.tw</p>
      </div>
      <Logo/>
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
import CoverSlider from '~/Components/CoverSlider.vue'
import ContentSlider from '~/Components/ContentSlider.vue'
import HeadBar from '~/Components/HeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import IndexSection from '~/Components/IndexSection.vue'
import Slideshow from '~/Components/Slideshow.vue'
import IndexCover from '~/Components/IndexCover.vue'
import EmbededVideo from '~/Components/EmbededVideo.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'
import Bodymovin from '~/Components/Bodymovin.vue'
import CircleAnim from '~/Components/CircleAnim.vue'
import RectAnim from '~/Components/RectAnim.vue'
import BallAnim from '~/Components/BallAnim.vue'

// pics
import coverSrc from '~/assets/pc/bg-1.jpg'
import fbLogo from '~/assets/logo_fb.svg'

import introVideo from '~/assets/Ubrandstudio.mp4'

var AboutSectionOffset

export default {
  components: {
    Carousel, CoverSlider, ContentSlider, ContentWrapper, HeadBar, Bookmarks, IndexSection, Slideshow, IndexCover, EmbededVideo, Contact, Logo, Bodymovin, CircleAnim, RectAnim, BallAnim
  },
  data: function () {
    return {
      stickyAnchors: false,
      fbLogo: fbLogo,
      aboutSectionOffset: AboutSectionOffset,
      animMultimedia: 'bodymovin/multimedia/data.mp4',
      animData: 'bodymovin/data/data.mp4',
      animResearch: 'bodymovin/research/data.mp4',
      animInteractive: 'bodymovin/interactive/data.mp4',
      animExplan: 'bodymovin/explan/data.mp4',
      animNative: 'bodymovin/native/data.mp4',
      introVideo: introVideo,
      coverImage: coverSrc,
      coverTitle: '好好說再見 插畫記林杰樑走後1500天',
      coverDescription: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
      coverDate: '2017.11.23',
      coverLabel: '多媒體報導'
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
    this.aboutSectionOffset = document.getElementById('aboutSection').getBoundingClientRect().top
  },
  methods: {
    onScroll: function () {
      // floating or sticky anchors
      let anchors = document.getElementById('floatingAnchor')
      let anchorOffsetY = anchors.getBoundingClientRect().top

      if (anchorOffsetY > 0) {
        if (this.stickyAnchors) {
          this.stickyAnchors = false
          anchors.style.opacity = '1'
        }
      } else {
        if (!this.stickyAnchors) {
          this.stickyAnchors = true
          anchors.style.opacity = '0'
        }
      }

      // section animation
      let section = document.getElementsByTagName('section')
      for (let i = 0; i < section.length; i++) {
        let sectionOffsetY = section[i].getBoundingClientRect().top
        if (sectionOffsetY < 200) {
          if (section[i].querySelector('video').paused) {
            section[i].querySelector('video').play()
          }
          if (window.innerWidth > 1200) {
            if (section[i].querySelector('.hideAtStart')) {
              Array.prototype.forEach.call(section[i].querySelectorAll('.hideAtStart'), function (el) {
                el.classList.remove('hideAtStart')
              })
            }
          }
        }
      }
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
  .onetenth{
    height: 10vh;
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
  margin-right: 20px;
}

.fb img{
  width: 160px;
}

.fb .fbgroup {
  position: absolute;
  transform: translateX(15%);
}

.anchors {
  background-color: #fff;
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
  position: relative;  
  width: 20%;
}

@media screen and (min-width: 1200px){

  .about .anim {
    transform: translateX(-60%);
  }

  .padding-for-headbar {
    padding-top: 50px;
  }

  section {
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about .info {
    display: block;
    width: 90%;
  }

  .about .info p>br {
    line-height: 1.62;
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
}

.nmd p {
  color: #fff;
}

a{
  color: #717071;
  margin: 0;
  border-bottom: 4px solid transparent;
}

.anchors p{
  border-bottom: 4px solid transparent;
}

.anchors a:active, .anchors a:hover, .anchors a:link, .anchors a:visited{
  color: #717071;
  text-decoration: none;
}

.anchors a:active, .anchors a:hover p{
  border-bottom: 4px solid #e73828;
}

.anchors.anchors p{
  font-size: 15px;
}

@media screen and (min-width: 1200px){
  .anchors.anchors p{
    font-size: 17px;
  }
}

.intro h1{
  font-weight: bold;
  font-size: 26px;
  margin: 0;
} 
.intro h3{
  font-size: 18px;
  line-height: 1.78;
  margin-bottom: 0;
}

@media screen and (min-width: 1200px){
  .intro h1{
    font-size: 45px;
  } 
  .intro h3{
    font-size: 21px;
    line-height: 1.52;
  }
}

@media screen and (min-width: 1200px){
  section .hideAtStart{
    opacity: 0;
    transform: translateY(50px);
  }
  .slideshow.hideAtStart.hideAtStart{
    transform: translateY(0);
  }
}

video.anim{
  width: 100%;
}

@media all and (-ms-high-contrast:none)
{
  video.anim { width: auto } /* IE10 */
  *::-ms-backdrop, video.anim { width: auto } /* IE11 */
}  

</style>

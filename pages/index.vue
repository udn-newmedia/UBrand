<template>
  <div id="index">
    <HeadBar :bookmark-display="stickyAnchors">
      <Bookmarks class="anchors fixed">
        <li>
          <a 
            class="hidden-pc"
            v-on:click.prevent="anchorCall(multimediaAnchor)"><p>多媒體</p>
          </a>
          <a 
            class="hidden-mobile"
            v-on:click.prevent="anchorCall(multimediaAnchor)"><p>多媒體報導</p>
          </a>
        </li>
        <li>
          <a 
            class="hidden-pc"
            v-on:click.prevent="anchorCall(dataAnchor)"><p>數據</p>
          </a>
          <a 
            class="hidden-mobile"
            v-on:click.prevent="anchorCall(dataAnchor)"><p>數據報導</p>
          </a>
        </li>
        <li>
          <a 
            class="hidden-pc"
            v-on:click.prevent="anchorCall(interactiveAnchor)"><p>互動</p>
          </a>
          <a 
            class="hidden-mobile"
            v-on:click.prevent="anchorCall(interactiveAnchor)"><p>互動新聞</p>
          </a>
        </li>
        <li>
          <a 
            class="hidden-pc"
            v-on:click.prevent="anchorCall(explanAnchor)"><p>影音</p>
          </a>
          <a 
            class="hidden-mobile"
            v-on:click.prevent="anchorCall(explanAnchor)"><p>解釋影音</p>
          </a>
        </li>
        <li>
          <a 
            href="." 
            class="hidden-pc"
            v-on:click.prevent="anchorCall(nativeAnchor)"><p>原生廣告</p>
          </a>
          <a 
            href="." 
            class="hidden-mobile"
            v-on:click.prevent="anchorCall(nativeAnchor)"><p>原生廣告</p>
          </a>
        </li>
      </Bookmarks>
      <div id="home" slot="home">
        <a href="."><img :src="home"></a>                
      </div>
      <div id="about" class="anchor" slot="about" @click="anchorCall(link1)">
        <img :src="about">                
      </div>
      <div id="contact" class="anchor" slot="contact" @click="anchorCall(link2)">
        <img :src="contact">                
      </div>
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
        :label="coverLabel"
        :link="coverLink"/>
      <p class="hidden-mobile"><br></p>
      <Carousel 
        class="hidden-mobile" 
        :interval="5000"
        :projects="projectslist"/>
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
      background-color="#f7f7f7"
      :sliders="coverSliders"/>
    
    <Bookmarks 
      id="floatingAnchor" 
      class="anchors">
      <p slot="padding"><br></p>
      <li>
        <a 
          class="hidden-pc"
          v-on:click.prevent="anchorCall(multimediaAnchor)"><p>多媒體</p>
        </a>
        <a 
          class="hidden-mobile"
          v-on:click.prevent="anchorCall(multimediaAnchor)"><p>多媒體報導</p>
        </a>
      </li>
      <li>
        <a 
          class="hidden-pc"
          v-on:click.prevent="anchorCall(dataAnchor)"><p>數據</p>
        </a>
        <a 
          class="hidden-mobile"
          v-on:click.prevent="anchorCall(dataAnchor)"><p>數據報導</p>
        </a>
      </li>
      <li>
        <a 
          class="hidden-pc"
          v-on:click.prevent="anchorCall(interactiveAnchor)"><p>互動</p>
        </a>
        <a 
          class="hidden-mobile"
          v-on:click.prevent="anchorCall(interactiveAnchor)"><p>互動新聞</p>
        </a>
      </li>
      <li>
        <a 
          class="hidden-pc"
          v-on:click.prevent="anchorCall(explanAnchor)"><p>影音</p>
        </a>
        <a 
          class="hidden-mobile"
          v-on:click.prevent="anchorCall(explanAnchor)"><p>解釋影音</p>
        </a>
      </li>
      <li>
        <a 
          href="." 
          class="hidden-pc"
          v-on:click.prevent="anchorCall(nativeAnchor)"><p>原生廣告</p>
        </a>
        <a 
          href="." 
          class="hidden-mobile"
          v-on:click.prevent="anchorCall(nativeAnchor)"><p>原生廣告</p>
        </a>
      </li>
    </Bookmarks>
    <section id="multimediaSection">
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"
        :slide="contentSliders1"/>
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
            :poster="posterMultimedia" 
            muted
            playsinline/> 
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>多媒體報導</h1>
            <h3>專題企劃、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/multimedia">
              <button>看更多...</button>  
            </nuxt-link>
          </div>                              
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders1"/>
    </section>

    <section id="dataSection">
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"
        :slide="contentSliders2"/>
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
            :poster="posterData"             
            muted
            playsinline/> 
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>數據專題</h1>
            <h3>數據分析加上圖表、動畫及專家採訪等，揭露社會現象下的真相</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/data">
              <button>看更多...</button>  
            </nuxt-link>
          </div>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders2"/>
    </section>

    <section id="interactiveSection">
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"
        :slide="contentSliders3"/>
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
            :poster="posterInteractive"  
            muted
            playsinline/>      
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>互動新聞</h1>
            <h3>文字、圖片、影音搭配互動式圖表，在網站上報導國內外重大新聞360度攝影機拍攝特殊事件或活動，呈現多元視角</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/interactive">
              <button>看更多...</button>  
            </nuxt-link>
          </div>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders3"/>
    </section>

    <section id="explanSection">
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"
        :slide="contentSliders4"/>
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
            :poster="posterExplan" 
            muted
            playsinline/>               
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>解釋影音</h1>
            <h3>以動畫、影音形式描繪新聞事件或生活短影音</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/explan">
              <button>看更多...</button>  
            </nuxt-link>
          </div>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders4"/>
    </section>

    <section id="nativeSection">
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="right"
        :slide="contentSliders5"/>
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
            :poster="posterNative"  
            muted
            playsinline/>                     
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>原生廣告</h1>
            <h3>有腳本、有情節的影音內容，提供消費者有用的生活資訊</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/native">
              <button>看更多...</button>  
            </nuxt-link>
          </div>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders5"/>
    </section>

    <section>
      <slideshow 
        class="hidden-mobile slideshow hideAtStart" 
        :interval="5000" 
        position="left"
        :slide="contentSliders6"/>
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
            :poster="posterResearch"  
            muted
            playsinline/>                    
          <div 
            slot="intro" 
            class="intro hideAtStart">
            <h1>研究報告</h1>
            <h3>定期分享科技與媒體新趨勢的研究報告</h3>
          </div>
          <div class="hideAtStart">
            <nuxt-link to="/research">
              <button>看更多...</button>  
            </nuxt-link>
          </div>
        </IndexSection>
      </ContentWrapper>
      <ContentSlider 
        class="hidden-pc" 
        background-color="#fff"
        :sliders="contentSliders6"/>
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
          <p>U Brand Studio 融媒體發展部是聯合報的數位心臟，<br class="hidden-mobile">由新聞、資訊工程、視覺設計與行銷人才組成的團隊，<br class="hidden-mobile">探索創新的內容閱讀體驗，結合新科技，<br class="hidden-mobile">製作多媒體報導、數據專題、互動新聞等，<br class="hidden-mobile">讓讀者更淺顯易懂的看懂新聞議題。<br class="hidden-mobile"></p>
          <p><br></p>
          <p>推出多檔叫好叫座專題，<br class="hidden-mobile">包括流沙中年、5個少年染毒的故事、致照顧者、中橫走過一甲子等，<br class="hidden-mobile">引起讀者廣泛討論。</p>
          <p><br></p>
          <div class="fbLink">
            <a href="https://www.facebook.com/udnNewMediaLab/" target="_blank" class="fb">
              <img :src="fbLogo">
              <p class="fbgroup">UDN 新媒體</p>
            </a>
            <a href="https://www.facebook.com/groups/UDNNEWMEDIA/" target="_blank" class="fb">
              <img :src="fbLogo">
              <p class="fbgroup salon">聯 沙龍</p>
            </a>
          </div>
        </div>
      </div>
      <RectAnim 
        class="hidden-mobile"
        :trigger-point="aboutSectionOffset"
        position="left"/>
    </ContentWrapper>

    <section 
      class="backgroundGray" 
      style=" position: relative; overflow: hidden;">
      <p class="hidden-pc"><br></p>
      <p class="hidden-pc"><br></p>
      <EmbededVideo
        :src="introVideo"
        :poster="introVideoBG" 
        background-color="#f7f7f7"/>

      <!-- <BallAnim 
        class="hidden-mobile"
        position="right"
        :trigger-point="aboutSectionOffset2"/> -->

      <!-- <BallAnim 
        class="hidden-pc"
        position="left"
        :trigger-point="aboutSectionOffset2"/> -->

    </section>

    <Contact id="contactUs" background-color="#3e3a39"/>

    <ContentWrapper background-color="#3e3a39">
      <p><br></p>
      <p><br></p>
      <div class="nmd">
        <p>聯合報 U Brand Studio 融媒體發展部</p>
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
import HeadBar from '~/Components/IndexHeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import IndexSection from '~/Components/IndexSection.vue'
import Slideshow from '~/Components/OneSlide.vue'
import IndexCover from '~/Components/IndexCover.vue'
import EmbededVideo from '~/Components/EmbededVideo.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'
import Bodymovin from '~/Components/Bodymovin.vue'
import CircleAnim from '~/Components/CircleAnim.vue'
import RectAnim from '~/Components/RectAnim.vue'
import BallAnim from '~/Components/BallAnim.vue'

// Assets
import PicAbout from '~/assets/logo_about.svg'
import PicContact from '~/assets/logo_contact.svg'
import PicHome from '~/assets/logo_home.svg'
import introVideo from '~/assets/Ubrandstudio.mp4'
import introVideoBG from '~/assets/Ubrandstudio_bg.jpg'

// import coverSrc from '~/assets/pc/bg-1.jpg'
import fbLogo from '~/assets/logo_fb.svg'

import axios from 'axios'
import _ from 'lodash'

var AboutSectionOffset, AboutSectionOffset2

export default {
  components: {
    Carousel, CoverSlider, ContentSlider, ContentWrapper, HeadBar, Bookmarks, IndexSection, Slideshow, IndexCover, EmbededVideo, Contact, Logo, Bodymovin, CircleAnim, RectAnim, BallAnim
  },
  asyncData ({param, error}) {
    let json = `https://spreadsheets.google.com/feeds/list/1donN8lWBHY8c5MH3NXWArErqf_60gxKwPWhfJccUZ44/1/public/values?alt=json`
    return axios.get(json)
      .then((res) => {
        let datalist = res.data.feed.entry
        let coverImageSrc = 'projects/' + datalist[0].gsx$pcpic.$t
        let coverTitle = datalist[0].gsx$title.$t
        let coverDescription = datalist[0].gsx$description.$t
        let coverDate = datalist[0].gsx$date.$t
        let coverLabel = datalist[0].gsx$class.$t
        let coverLink = datalist[0].gsx$link.$t
        let coverSliders = []
        coverSliders.push(datalist[0])
        coverSliders.push(datalist[1])
        coverSliders.push(datalist[2])
        coverSliders.push(datalist[3])
        // multimedia
        let contentSliders1 = []
        let multi = _.filter(datalist, ['gsx$class.$t', '多媒體報導'])
        contentSliders1.push(multi[1])
        contentSliders1.push(multi[2])
        contentSliders1.push(multi[3])
        contentSliders1.push(multi[4])
        // data
        let contentSliders2 = []
        let dataprojects = _.filter(datalist, ['gsx$class.$t', '數據專題'])
        contentSliders2.push(dataprojects[0])
        contentSliders2.push(dataprojects[1])
        contentSliders2.push(dataprojects[2])
        contentSliders2.push(dataprojects[3])
        // interactive
        let contentSliders3 = []
        let interactive = _.filter(datalist, ['gsx$class.$t', '互動新聞'])
        contentSliders3.push(interactive[0])
        contentSliders3.push(interactive[1])
        contentSliders3.push(interactive[2])
        contentSliders3.push(interactive[3])
        // explan
        let contentSliders4 = []
        let explain = _.filter(datalist, ['gsx$class.$t', '解釋影音'])
        contentSliders4.push(explain[0])
        contentSliders4.push(explain[1])
        contentSliders4.push(explain[2])
        contentSliders4.push(explain[3])
        // native
        let contentSliders5 = []
        let native = _.filter(datalist, ['gsx$class.$t', '原生廣告'])
        contentSliders5.push(native[0])
        contentSliders5.push(native[1])
        contentSliders5.push(native[2])
        contentSliders5.push(native[3])
        // research
        let contentSliders6 = []
        let research = _.filter(datalist, ['gsx$class.$t', '研究報告'])
        contentSliders6.push(research[0])
        contentSliders6.push(research[1])
        contentSliders6.push(research[2])
        contentSliders6.push(research[3])
        return {
          projectslist: datalist,
          coverImage: coverImageSrc,
          coverTitle: coverTitle,
          coverDescription: coverDescription,
          coverDate: coverDate,
          coverLabel: coverLabel,
          coverLink: coverLink,
          coverSliders: coverSliders,
          contentSliders1: contentSliders1,
          contentSliders2: contentSliders2,
          contentSliders3: contentSliders3,
          contentSliders4: contentSliders4,
          contentSliders5: contentSliders5,
          contentSliders6: contentSliders6
        }
      })
      .catch((e) => {
        error({statusCode: 404, message: 'File not found'})
      })
  },
  data: function () {
    return {
      stickyAnchors: false,
      fbLogo: fbLogo,
      about: PicAbout,
      contact: PicContact,
      home: PicHome,
      aboutSectionOffset: AboutSectionOffset,
      aboutSectionOffset2: AboutSectionOffset2,
      link1: 'aboutSection',
      link2: 'contactUs',
      multimediaAnchor: 'multimediaSection',
      dataAnchor: 'dataSection',
      interactiveAnchor: 'interactiveSection',
      explanAnchor: 'explanSection',
      nativeAnchor: 'nativeSection',
      animMultimedia: 'bodymovin/multimedia/data.mp4',
      animData: 'bodymovin/data/data.mp4',
      animResearch: 'bodymovin/research/data.mp4',
      animInteractive: 'bodymovin/interactive/data.mp4',
      animExplan: 'bodymovin/explan/data.mp4',
      animNative: 'bodymovin/native/data.mp4',
      posterMultimedia: 'bodymovin/multimedia/video_bg.jpg',
      posterData: 'bodymovin/data/video_bg.jpg',
      posterResearch: 'bodymovin/research/video_bg.jpg',
      posterInteractive: 'bodymovin/interactive/video_bg.jpg',
      posterExplan: 'bodymovin/explan/video_bg.jpg',
      posterNative: 'bodymovin/native/video_bg.jpg',
      introVideo: introVideo,
      introVideoBG: introVideoBG,
      scroll_now: 0
    }
  },
  computed: {

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
    this.aboutSectionOffset2 = document.getElementById('thevideo').getBoundingClientRect().top
  },
  methods: {
    onScroll: function () {
      this.scroll_now = window.pageYOffset
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
          if (!this.isPlaying(section[i].getElementsByTagName('video')[0])) {
            section[i].getElementsByTagName('video')[0].play()
          }
          if (window.innerWidth > 1023) {
            if (section[i].querySelector('.hideAtStart')) {
              Array.prototype.forEach.call(section[i].querySelectorAll('.hideAtStart'), function (el) {
                el.classList.remove('hideAtStart')
              })
            }
          }
        }
      }
    },
    isPlaying: function (video) {
      return video.onplay
    },
    anchorCall1: function (link) {
      let scrollDuration = 1000
      let destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
      let scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)

      if (destination > window.pageYOffset) {
        let scrollInterval = setInterval(function () {
          this.scroll_now = window.pageYOffset
          destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
          if (this.scroll_now === destination) {
            clearInterval(scrollInterval)
          } else {
            scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)
            window.scrollBy(0, scrollStep)
          }
          scrollDuration -= 15
        }, 15)
      } else {
        let scrollInterval = setInterval(function () {
          this.scroll_now = window.pageYOffset
          destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
          if (this.scroll_now === destination) {
            clearInterval(scrollInterval)
          } else {
            scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)
            window.scrollBy(0, scrollStep)
          }
          scrollDuration -= 15
        }, 15)
      }
    },
    anchorCall: function (link) {
      let scrollDuration = 1000
      let destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
      let scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)

      if (destination > window.pageYOffset) {
        let scrollInterval = setInterval(function () {
          this.scroll_now = window.pageYOffset
          destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
          if (this.scroll_now < destination) {
            scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)
            window.scrollBy(0, scrollStep)
          } else {
            clearInterval(scrollInterval)
          }
          scrollDuration -= 15
        }, 15)
      } else {
        let scrollInterval = setInterval(function () {
          this.scroll_now = window.pageYOffset
          destination = document.getElementById(link).getBoundingClientRect().top + this.scroll_now
          if (this.scroll_now > destination) {
            scrollStep = (destination - this.scroll_now) / (scrollDuration / 15)
            window.scrollBy(0, scrollStep)
          } else {
            clearInterval(scrollInterval)
          }
          scrollDuration -= 15
        }, 15)
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

@media screen and (max-width: 1023px){
  .hidden-mobile{
    display: none!important;
  } 
  .onetenth{
    height: 10vh;
  }
}

@media screen and (min-width: 1024px){
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

@media screen and (max-width: 767px){
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

@media screen and (min-width: 1024px){

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

  .infoTitle h2 {
    width: 100%;
  }
}

@-moz-document url-prefix() {
  .fb .fbgroup {
    transform: translateX(15%);
    left: 25%;
    top: 25%;
  }
  .fb .fbgroup.salon {
    transform: translateX(15%);
    left: 35%;
    top: 25%;
  }
}

@media all and (-ms-high-contrast:none)
{
  .fb .fbgroup {
    transform: translateX(15%);
    left: 25%;
    top: 25%;
  }
  .fb .fbgroup.salon {
    transform: translateX(15%);
    left: 35%;
    top: 25%;
  }  
}  

.nmd p {
  color: #fff;
}

a{
  color: #717071;
  margin: 0;
  border-bottom: 4px solid transparent;
  cursor: pointer;
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

@media screen and (min-width: 1024px){
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

@media screen and (min-width: 1024px){
  .intro h1{
    font-size: 45px;
  } 
  .intro h3{
    font-size: 21px;
    line-height: 1.52;
  }
}

@media screen and (min-width: 1024px){
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

@media screen and (max-width: 767px){
  video.anim{
    width: 334px;
    height: 300.59px;
    border: none;
  }    
}

@media all and (-ms-high-contrast:none)
{
  video.anim { width: auto } /* IE10 */
  *::-ms-backdrop, video.anim { width: auto } /* IE11 */
}  

button, .button{
  width: 102px;
  height: 41px;
  border-radius: 20.1px;
  background-color: #ffffff;
  border: solid 1px #0b0305;
  padding: 10px 15px;  
  color: #717071; 
  /* box-shadow: 5px 5px 0#e73828; */
  box-shadow: 5px 5px 0 0 #e73828;
  transition: box-shadow 0.3s ease-in-out;
}

@media screen and (max-width: 1023px){
  button, .button{
    width: 80px;
    height: 33px;
    padding: 7px 10px;  
  }
}

button:hover, .button:hover{
  box-shadow: 1px 1px 0 0 #e73828;
}

button:focus, button:hover, button:active, button:visited, a.button:focus, a.button:hover, a.button:active, a.button:visited{
  color: #717071;
  text-decoration: none;
}

.anchor {
  cursor: pointer;
}

.fb p {
  color: black;
}

.anchors.fixed {
  box-shadow: -2.2px 2px 7px 0 rgba(4, 0, 0, 0.05);
}
</style>

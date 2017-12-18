<template>
  <div id="multimedia">
    <HeadBar 
    bookmark-display="true">
      <Bookmarks 
        class="bookmark" 
        background-color="#fff">
        <li>
          <nuxt-link 
          　to="/multimedia">
            <p class="hidden-mobile">多媒體報導</p>
            <p class="hidden-pc">多媒體</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/data">
            <p class="hidden-mobile">數據專題</p>
            <p class="hidden-pc">數據</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link 
          　to="/interactive"
          　class="now">
            <p class="hidden-mobile">互動新聞</p>
            <p class="hidden-pc">互動</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/explan">
            <p class="hidden-mobile">解釋影音</p>
            <p class="hidden-pc">影音</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/native">
            <p class="hidden-mobile">原生廣告</p>
            <p class="hidden-pc">原生廣告</p>
          </nuxt-link>
        </li>
      <!-- <li>
        <nuxt-link to="/research">
          <p class="hidden-mobile">研究報告</p>
        </nuxt-link>
      </li> -->
      </Bookmarks>
    </HeadBar>
    <ContentWrapper 
      background-color="#f7f7f7"
      class="fluid">
      <div class="padding-for-headbar"/>
      <p class="hidden-pc"><br></p>
      <p><br></p>
      <div class="cover-wrapper">
        <img 
          class="anim hidden-mobile" 
          :src="covericon">
        <div class="title-wrapper">
          <h1 class="title hidden-mobile">
            互動新聞
          </h1>
          <h3 class="title hidden-pc">
            互動新聞
          </h3>
          <p class="subtitle">
            企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗。
          </p>
        </div>
        <img 
          class="anim hidden-pc" 
          :src="covericon">
      </div>
      <p class="hidden-mobile"><br></p>
      <PageCover 
        class="hidden-mobile" 
        :src-cover="coverImage" 
        :cover-title="coverTitle" 
        :description="coverDescription" 
        :date="coverDate" 
        :label="coverLabel" 
        :report="coverReport"/>
      <p class="hidden-mobile"><br></p>
    </ContentWrapper>
    <ContentWrapper 
      class="worksContentWrapper fluid"
      style="position: relative; overflow: hidden;">
      <p class="hidden-mobile"><br></p>
      <Works/>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <div class="onetenth hidden-pc"/>
      <img 
        class="bottomBall" 
        :src="ball">
    </ContentWrapper>

    <Contact 
      background-color="#3e3a39"
      class="fluid"/>

    <ContentWrapper 
      background-color="#3e3a39"
      class="fluid">
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
import ContentWrapper from '~/Components/Content.vue'
import HeadBar from '~/Components/HeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import Works from '~/Components/Works.vue'
import PageCover from '~/Components/PageCover.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'
import Bodymovin from '~/Components/Bodymovin.vue'

import coverSrc from '~/assets/pc/a-bg.jpg'
import ball from '~/assets/a-6.svg'

export default {
  components: {
    ContentWrapper, HeadBar, Bookmarks, Works, PageCover, Contact, Logo, Bodymovin
  },
  data: function () {
    return {
      coverImage: coverSrc,
      ball: ball,
      covericon: 'bodymovin/multimedia/data.jpg',
      coverTitle: '好好說再見 插畫記林杰樑走後1500天',
      coverDescription: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
      coverDate: '2017.11.23',
      coverLabel: '多媒體報導',
      coverReport: '把3D模型擺進新聞 學到的三件事'
    }
  }
}
</script>

<style>
#multimedia {
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

.title{
  font-weight: bold;
}

.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}

.anim{
  width: 120px;
}

.cover-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.title-wrapper{
  width: 50%;
}

.padding-for-headbar {
  padding-top: 46px;
}

.worksContentWrapper {
  background-color: #f7f7f7;
}

@media screen and (min-width: 1200px){
  .padding-for-headbar {
    padding-top: 50px;
  }
  .title-wrapper{
    width: 82%;
  }
  .anim{
    width: 150px;
  }
  
  .worksContentWrapper {
    background-color: #fff;
  }

  .fluid .container {
    padding: 0;
  }
}

@media screen and (max-width: 1199px){
  .hidden-mobile{
    display: none!important;
  } 
  .onetenth{
    height: 10vh;
  }
}

.nmd p{
  color: #fff;
}

.bottomBall{
 position: absolute; 
 width: 60%;
 right: 0;
 bottom: 0;
 transform: rotate(180deg) translate(-30%) translateY(-30%)
}

@media screen and (min-width: 1200px){
  .bottomBall{
    width: 25%;
    right: 0;
    bottom: 0;
    transform: rotate(180deg) translate(-30%) translateY(-30%)
  }
}

.bookmark p{
  color: #717071;
  margin: 0;
  border-bottom: 4px solid transparent;
  font-size: 15px;
}

@media screen and (min-width: 1200px){
  .bookmark p{
    font-size: 17px;
  }
}

a:link, a:active, a:hover, a:visited{
  text-decoration: none;
}

.bookmark a:active, a:hover p, .bookmark .now p{
  border-bottom: 4px solid #e73828;
}

button{
  width: 102px;
  height: 41px;
  border-radius: 20.1px;
  background-color: #ffffff;
  border: solid 1px #0b0305;
  /* padding: 3px 10px; */
  color: #717071; 
  box-shadow: 5px 5px 0#e73828;
  transition: box-shadow 0.3s ease-in-out;
}

@media screen and (max-width: 1199px){
  button{
    width: 80px;
    height: 33px;
  }
  button#seemore{
    width: auto;
    border-radius: 0;
  }
}

button:hover{
  box-shadow: 1px 1px 0#e73828;
}

button a:focus, button a:hover, button a:active, button a:visited{
  color: #717071;
  text-decoration: none;
}
</style>

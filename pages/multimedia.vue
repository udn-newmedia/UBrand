<template>
  <div id="multimedia">
    <HeadBar>
      <ContentWrapper background-color="#fff">
        <p class="hidden-pc"><br></p>
        <Bookmarks class="bookmark">
            <li>
              <nuxt-link to="/multimedia">
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
              <nuxt-link to="/interactive">
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
      </ContentWrapper>
    </HeadBar>
    <ContentWrapper background-color="#f7f7f7">
      <div class="padding-for-headbar"></div>
      <p class="hidden-pc"><br></p>
      <p><br></p>
      <div class="cover-wrapper">
        <div class="anim hidden-mobile">bodymovin</div>
        <div class="title-wrapper">
          <h3 class="title">
            多媒體報導
          </h3>
          <p class="subtitle">
            企畫、深度採訪以多媒體形式呈現，並流暢手機閱讀體驗。
          </p>
        </div>
        <div class="anim hidden-pc">bodymovin</div>
      </div>
      <PageCover class="hidden-mobile" :srcCover="coverImage" :coverTitle="coverTitle" :description="coverDescription" :date="coverDate" :label="coverLabel" :report="coverReport"></PageCover>
      <p class="hidden-mobile"><br></p>
    </ContentWrapper>
    <ContentWrapper background-color="#fff" style="position: relative; overflow: hidden;">
      <Works></Works>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <img class="bottomBall" :src='ball' alt="">
    </ContentWrapper>
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
import ContentWrapper from '~/Components/Content.vue'
import HeadBar from '~/Components/HeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import Works from '~/Components/Works.vue'
import PageCover from '~/Components/PageCover.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'

import coverSrc from '~/assets/pc/a-bg.jpg'
import ball from '~/assets/a-6.svg'

export default {
  components: {
    ContentWrapper, HeadBar, Bookmarks, Works, PageCover, Contact, Logo
  },
  data: function () {
    return {
      coverImage: coverSrc,
      ball: ball,
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
  border: solid 1px black;
  width: 30%;
  height: 100px;
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

@media screen and (min-width: 1200px){
  .padding-for-headbar {
    padding-top: 50px;
  }
  .title-wrapper{
    width: 85%;
  }
  .anim{
    width: 10%;
    height: 100px;
  }
}

@media screen and (max-width: 1199px){
  .hidden-mobile{
    display: none!important;
  } 
}

.nmd p{
  color: #fff;
}

.bottomBall{
 position: absolute; 
 width: 60%;
 right: -20%; 
 bottom: -60px;
}

@media screen and (min-width: 1200px){
  .bottomBall{
    width: 25%;
    right: -5%;
    bottom: -3%;
  }
}

.bookmark p{
  color: #717071;
  margin: 0;
  border-bottom: 4px solid transparent;
}

.bookmark a:active, a:hover{
  text-decoration: none;
}

.bookmark a:active, a:hover p{
  border-bottom: 4px solid #e73828;
}


</style>

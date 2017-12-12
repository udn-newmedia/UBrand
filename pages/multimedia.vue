<template>
  <div id="multimedia">
    <HeadBar></HeadBar>
    <ContentWrapper background-color="#fff">
      <div class="padding-for-headbar"></div>
      <p class="hidden-pc"><br></p>
      <Bookmarks></Bookmarks>
    </ContentWrapper>
    <ContentWrapper background-color="#f7f7f7">
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
      <!-- <div class="links">
        <ul>
          <li><nuxt-link to="/multimedia">多媒體報導</nuxt-link></li>
          <li><nuxt-link to="/data">數據專題</nuxt-link></li>
          <li><nuxt-link to="/interactive">互動新聞</nuxt-link></li>
          <li><nuxt-link to="/explan">解釋影音</nuxt-link></li>
          <li><nuxt-link to="/native">原生廣告</nuxt-link></li>
          <li><nuxt-link to="/research">研究報告</nuxt-link></li>
        </ul>
      </div> -->
    </ContentWrapper>
    <ContentWrapper background-color="#fff">
      <Works></Works>
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

import coverSrc from '~/assets/pc/bg-1.jpg'

export default {
  components: {
    ContentWrapper, HeadBar, Bookmarks, Works, PageCover
  },
  data: function () {
    return {
      coverImage: coverSrc,
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

</style>

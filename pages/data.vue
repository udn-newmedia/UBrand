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
          <nuxt-link 
            to="/data"
            class="now">
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
            數據報導
          </h1>
          <h3 class="title hidden-pc">
            數據報導
          </h3>
          <p class="subtitle">
            數據分析加上圖表、動畫及專家採訪等，揭露社會現象下的真相
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
        :report="coverReportTitle"
        :reportlink="coverReportLink"
        :link="coverLink"/>
      <p class="hidden-mobile"><br></p>
    </ContentWrapper>
    <ContentWrapper 
      class="worksContentWrapper fluid"
      style="position: relative; overflow: hidden;">
      <p class="hidden-mobile"><br></p>
      <Works :projects="projectslist"/>
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
import ContentWrapper from '~/Components/Content.vue'
import HeadBar from '~/Components/HeadBar.vue'
import Bookmarks from '~/Components/Bookmarks.vue'
import Works from '~/Components/Works.vue'
import PageCover from '~/Components/PageCover.vue'
import Contact from '~/Components/Contact.vue'
import Logo from '~/Components/Logo.vue'
import Bodymovin from '~/Components/Bodymovin.vue'

import ball from '~/assets/a-6.svg'

import axios from 'axios'
import _ from 'lodash'

export default {
  components: {
    ContentWrapper, HeadBar, Bookmarks, Works, PageCover, Contact, Logo, Bodymovin
  },
  asyncData ({param, error}) {
    let json = `https://spreadsheets.google.com/feeds/list/1donN8lWBHY8c5MH3NXWArErqf_60gxKwPWhfJccUZ44/1/public/values?alt=json`
    return axios.get(json)
      .then((res) => {
        let datalist = res.data.feed.entry
        let projects = _.filter(datalist, ['gsx$class.$t', '數據專題'])
        let coverImageSrc = 'projects/' + projects[0].gsx$pcpic.$t
        let coverTitle = projects[0].gsx$title.$t
        let coverDescription = projects[0].gsx$description.$t
        let coverDate = projects[0].gsx$date.$t
        let coverLink = projects[0].gsx$link.$t
        let coverReportTitle = projects[0].gsx$reporttitle.$t
        let coverReportLink = projects[0].gsx$reportlink.$t
        projects.shift()
        return {
          projectslist: projects,
          coverImage: coverImageSrc,
          coverTitle: coverTitle,
          coverDescription: coverDescription,
          coverDate: coverDate,
          coverLink: coverLink,
          coverReportTitle: coverReportTitle,
          coverReportLink: coverReportLink
        }
      })
      .catch((e) => {
        error({statusCode: 404, message: 'File not found'})
      })
  },
  data: function () {
    return {
      ball: ball,
      covericon: 'bodymovin/data/data.jpg'
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

.bookmark a:active, .bookmark a:hover p, .bookmark .now p{
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

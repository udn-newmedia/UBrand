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
          <nuxt-link 
            to="/native"
            class="now">
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
            原生廣告
          </h1>
          <h3 class="title hidden-pc">
            原生廣告
          </h3>
          <p class="subtitle">
            有腳本、有情節的影音內容，提供消費者有用的生活資訊
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
      <Works 
        class="hidden-mobile" 
        :projects="projectslist"
        :folder="picturefolder"/>
      <Works 
        class="hidden-pc" 
        :projects="allprojects"
        :folder="picturefolder"/>
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

import Utils from 'udn-newmedia-utils'
import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery'

export default {
  head () {
    return {
      title: ' U Brand Studio 聯合報融媒體 原生廣告 - UDN聯合報',
      meta: [
        { property: 'og:title', content: ' U Brand Studio 聯合報融媒體 原生廣告 - UDN聯合報' },
        { property: 'og:url', content: 'https://udn.com/upf/newmedia/ubrandstudio/native/' },
        { property: 'og:description', content: ' U Brand Studio 聯合報融媒體，運用原生廣告手法進行，有腳本、有情節的影音內容，提供消費者有用的生活資訊。 U Brand Studio 聯合報融媒體發展部是聯合報的數位心臟，擅長進行共同倡議新聞議題，期待為您說好故事，讓品牌更有影響力。' },
        { hid: 'description', name: 'description', content: ' U Brand Studio 聯合報融媒體，運用原生廣告手法進行，有腳本、有情節的影音內容，提供消費者有用的生活資訊。進行共同倡議新聞議題，為您說好故事，讓品牌更有影響力。' },
        { name: 'keywords', content: 'UDN、新媒體、融媒體、聯合報、原生、廣告' }
      ]
    }
  },
  components: {
    ContentWrapper, HeadBar, Bookmarks, Works, PageCover, Contact, Logo, Bodymovin
  },
  asyncData ({param, error}) {
    let json = `https://spreadsheets.google.com/feeds/list/1donN8lWBHY8c5MH3NXWArErqf_60gxKwPWhfJccUZ44/1/public/values?alt=json`
    return axios.get(json)
      .then((res) => {
        // let picturefolder = 'projects/' // picture data path for localhost
        let picturefolder = '../projects/' // picture data path for production
        let datalist = res.data.feed.entry
        let allprojects = _.filter(datalist, ['gsx$class.$t', '原生廣告'])
        _.pullAllBy(allprojects, [{ 'gsx$title.$t': '' }], 'gsx$title.$t')
        _.pullAllBy(allprojects, [{ 'gsx$link.$t': '' }], 'gsx$link.$t')
        _.pullAllBy(allprojects, [{ 'gsx$description.$t': '' }], 'gsx$description.$t')
        _.pullAllBy(allprojects, [{ 'gsx$date.$t': '' }], 'gsx$date.$t')
        _.pullAllBy(allprojects, [{ 'gsx$pcpic.$t': '' }], 'gsx$pcpic.$t')
        _.pullAllBy(allprojects, [{ 'gsx$mobcoverpic.$t': '' }], 'gsx$mobcoverpic.$t')
        _.pullAllBy(allprojects, [{ 'gsx$mobpic.$t': '' }], 'gsx$mobpic.$t')
        let cover = _.filter(allprojects, ['gsx$pagecover.$t', 'TRUE'])
        if (cover[0] == null) {
          cover[0] = allprojects[0]
        }
        let projects = _.difference(allprojects, cover)
        let coverImageSrc = picturefolder + cover[0].gsx$pcpic.$t
        let coverTitle = cover[0].gsx$title.$t
        let coverDescription = cover[0].gsx$description.$t
        let coverDate = cover[0].gsx$date.$t
        let coverLink = cover[0].gsx$link.$t
        let coverReportTitle = cover[0].gsx$reporttitle.$t
        let coverReportLink = cover[0].gsx$reportlink.$t
        return {
          coverElement: cover[0],
          allprojects: allprojects,
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
      // picturefolder: 'projects/', // picture data path for localhost
      picturefolder: '../projects/', // picture data path for production
      ball: ball,
      covericon: 'bodymovin/native/data.jpg'
    }
  },
  mounted: function () {
    this.isMob = Utils.detectMob()
    $(document).ready(() => {
      let that = this
      let platform = (this.isMob === true) ? 'Mob' : 'PC'
      $('button.sendout').click(function () {
        that.$ga.event({
          hitType: 'event',
          eventCategory: '送出表單按鈕點擊',
          eventAction: 'click',
          eventLabel: '[' + platform + '] [' + document.title + '] [' + '送出表單' + ']'
        })
      })
      $('#seemore').click(function () {
        that.$ga.event({
          hitType: 'event',
          eventCategory: '點擊看更多按鈕',
          eventAction: 'click',
          eventLabel: '[' + platform + '] [' + document.title + '] [' + '點擊看更多' + ']'
        })
      })
      $('a').click(function () {
        that.$ga.event({
          hitType: 'event',
          eventCategory: '超連結點擊',
          eventAction: 'click',
          eventLabel: '[' + platform + '] [' + document.title + '] [' + $(this).attr('href') + ']'
        })
      })
    })
    // [ga] page view
    this.$ga.page({
      page: '/native',
      title: document.title,
      location: window.location.href
    })
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

@media screen and (max-width: 1023px){
  .hidden-mobile{
    display: none!important;
  } 
}

@media screen and (min-width: 1024px){
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

@media screen and (min-width: 1024px){
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

@media screen and (max-width: 1023px){
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

@media screen and (min-width: 1024px){
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

@media screen and (min-width: 1024px){
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

.bookmark{
  box-shadow: 0 7px 5px -5px rgba(4, 0, 0, 0.05);
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

@media screen and (max-width: 1023px){
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

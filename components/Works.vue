<template>
    <div class="manyworks">
        <div id="works">
            <div v-for="work in list" :key="work.gsx$title.$t" class="work-and-research">
                <div class="work">
                    <a :href="work.gsx$link.$t" target="_blank">
                        <div class="imgwrapper">
                            <picture>
                                <source media="(max-width: 1199px)" :srcset="folder + work.gsx$mobpic.$t">
                                <img :src="folder + work.gsx$pcpic.$t" alt="">
                            </picture>
                        </div>
                        <div class="work-label">
                            <img :src="bullet1" alt="" class="graphic">
                            <div class="article">
                                <h4 class="bold">{{work.maintitle}}</h4>
                                <h4 class="bold">{{work.subtitle}}</h4>
                                <Description class="description hidden-mobile" :texts="work.gsx$description.$t" maxLen="30"/>
                                <p class="date hidden-mobile">{{work.gsx$date.$t}}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="research" :class="{'hidden-mobile': !work.gsx$reporttitle.$t}">
                    <div class='research-wrapper' :class="{'opacityZero': !work.gsx$reporttitle.$t}">
                            <img :src="bullet2" alt="" class="graphic2">                    
                            <div class="article">
                                <a :href="work.gsx$reportlink.$t" target="_blank">
                                    <h4 class="bold hidden-pc">研究報告：</h4>
                                    <h4 class="hidden-pc">{{work.gsx$reporttitle.$t || fillinblank}}</h4>
                                    <p class="hidden-mobile report"><b>研究報告：</b>{{work.gsx$reporttitle.$t || fillinblank}}</p>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <button v-if="hasmore" id="seemore" @click="seeMore"><h4>看更多...</h4></button>
    </div>
</template>

<script>
import ContentWrapper from './Content'
import Description from './TrancatedWords'
import bullet1 from '~/assets/a-7.svg'
import bullet2 from '~/assets/a-8.svg'

export default {
  /* 本元件用途：
    * 在分頁裡列出該類別之所有專題
    * [傳入參數]：
    *  - projects: 該類別之所有專題資料陣列
    *  - folder: 專題圖片所放置資料夾之路徑
    * [註]:
    * */
  name: 'Work',
  props: ['projects', 'folder'],
  components: {ContentWrapper, Description},
  computed: {
    projectlist: function () {
      this.projects.forEach(function (ele) {
        if (ele.gsx$title.$t.split(' ').length > 2) {
          ele.maintitle = ele.gsx$title.$t.split(' ')[0]
          ele.subtitle = ele.gsx$title.$t.split(' ')[1]
          for (let i = 2; i < ele.gsx$title.$t.split(' ').length; i++) {
            let str = ele.gsx$title.$t.split(' ')[i]
            ele.subtitle = ele.subtitle + ' ' + str
          }
        } else {
          ele.maintitle = ele.gsx$title.$t.split(' ')[0]
          ele.subtitle = ele.gsx$title.$t.split(' ')[1]
        }
      })
      return this.projects
    },
    list: function () {
      for (let i = (this.part - 1) * 8; i < this.part * 8; i++) {
        if (i < this.projectlist.length) {
          this.works.push(this.projectlist[i])
        } else {
          this.hasmore = false
        }
      }
      return this.works
    }
  },
  data: function () {
    return {
      part: 1,
      works: [],
      bullet1: bullet1,
      bullet2: bullet2,
      fillinblank: '把3D模型擺進新聞 學到的3件事', // 為了保持空行因而塞入之字串
      hasmore: true
    }
  },
  methods: {
    seeMore: function () {
      this.part++
    }
  }
}
</script>

<style scoped>
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

p{
    margin: 0;
}

h4{
    color:black;
    font-weight: normal;
}

p.date{
    color: #717071;        
}

h4.description{
    color: #717071;    
}

@media screen and (min-width: 1024px){
    h4{
        font-size: 21px;
        margin-top: 0;
    }

    .bold{
        font-weight: bold;
    }

    p{
        font-size: 17px;
    }

    p.report{
        line-height: 1.41;
        text-decoration: underline;
        text-underline-position: under;
    }
}

#works{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 1;
}

@media screen and (min-width: 1024px){
    #works{
        justify-content: space-between;
    } 
}

.work .work-label, .research{
    padding: 10px;
}
.work{
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 1024px){
    .work{
        box-shadow: -2.2px 2px 7px 0 rgba(85, 84, 84, 0.04);
    }
}

.work-label{
    background: white;
}
.work-and-research{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 334px;
}
.work-and-research img{
    width: 334px;
    height: 230px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
    .work-and-research{
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        width: 100%;
    }    
    .work-and-research img{
        width: 100%;
        height: auto;
    }
}

@media screen and (min-width: 1024px){
    .work-and-research{
        width: 455px;
    }
    .work-and-research img{
        width: 455px;
        height: 261px;
    }
}
.research {
    background: white;
}
@media screen and (max-width: 1023px){
    .research{
        margin-top: 10px;
    } 
}
.research-wrapper{
    display: flex;
    flex-direction: row;
}
@media screen and (min-width: 1024px){
    .research-wrapper{
        margin-top: 0;
    }
}
.work-label{
    display: flex;
    flex-direction: row;
}
img.graphic{
    width: 10%;
    height: 50px;
}
img.graphic2{
    width: 10%;
    height: 30px;
}
.article{
    width: 80%;
    padding-left: 10px;
}

.opacityZero{
    opacity: 0;
}

#seemore{
  display: block;
  margin: 0 auto;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  box-shadow: none;
  padding: 0;
}

#seemore h4{
  border-bottom: 4px solid #e73828;
}

a{
    color: black;
}

.imgwrapper{
  overflow: hidden;
}

.imgwrapper:hover img {
  transform: scale(1.1);
}

img {
  transition: all 0.5s;    
}

</style>
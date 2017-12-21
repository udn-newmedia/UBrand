<template>
    <div id="works">
        <div v-for="work in list" :key="work.title" class="work-and-research">
            <div class="work">
                <picture>
                    <source media="(max-width: 1199px)" :srcset="work.mobPic">
                    <img :src="work.pcPic" alt="">
                </picture>
                <div class="work-label">
                    <img :src="bullet1" alt="" class="graphic">
                    <div class="article">
                        <h4 class="bold">{{work.maintitle}}</h4>
                        <h4 class="bold">{{work.subtitle}}</h4>
                        <h4 class="description hidden-mobile">{{work.description}}</h4>
                        <p class="date hidden-mobile">{{work.date}}</p>
                    </div>
                </div>
            </div>
            <div class="research" :class="{'hidden-mobile': !work.reportTitle}">
                <div class='research-wrapper' :class="{'opacityZero': !work.reportTitle}">
                    <img :src="bullet2" alt="" class="graphic2">                    
                    <div class="article">
                        <h4 class="bold hidden-pc">研究報告：</h4>
                        <h4 class="hidden-pc">{{work.reportTitle || fillinblank}}</h4>
                        <p class="bold hidden-mobile report"><b>研究報告：</b>{{work.reportTitle || fillinblank}}</p>
                    </div>
                </div>
            </div>
        </div>
        <button id="seemore" @click="seeMore"><h4>看更多...</h4></button>
    </div>
</template>

<script>
import ContentWrapper from './Content'
import bullet1 from '~/assets/a-7.svg'
import bullet2 from '~/assets/a-8.svg'

export default {
  name: 'Work',
  props: ['projects'],
  components: {ContentWrapper},
  computed: {
    projectlist: function () {
      this.projects.forEach(function (ele) {
        ele.maintitle = ele.title.split(' ')[0]
        ele.subtitle = ele.title.split(' ')[1]
      })
      return this.projects
    },
    list: function () {
      for (let i = (this.part - 1) * 8; i < this.part * 8; i++) {
        if (i < this.projectlist.length) {
          this.works.push(this.projectlist[i])
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
      fillinblank: '把3D模型擺進新聞 學到的3件事'
    }
  },
  mounted: function () {
  },
  methods: {
    seeMore: function () {
      this.part++
    }
  }
}
</script>

<style scoped>
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

p{
    margin: 0;
}

@media screen and (min-width: 1200px){
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
}

@media screen and (min-width: 1200px){
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
@media screen and (min-width: 1200px){
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
@media screen and (min-width: 1200px){
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
@media screen and (max-width: 1199px){
    .research{
        margin-top: 10px;
    } 
}
.research-wrapper{
    display: flex;
    flex-direction: row;
}
@media screen and (min-width: 1200px){
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
}

#seemore h4{
  border-bottom: 4px solid #e73828;
}

</style>
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
                        <h4>{{work.title}}<br>{{work.subtitle}}</h4>
                        <p class="description hidden-mobile">{{work.description}}</p>
                        <p class="date hidden-mobile">{{work.date}}</p>
                    </div>
                </div>
            </div>
            <div class="research" :class="{'hidden-mobile': !work.research}">
                <div class='research-wrapper' :class="{'opacityZero': !work.research}">
                    <img :src="bullet2" alt="" class="graphic2">                    
                    <div class="article">
                        <h4>研究報告：</h4>
                        <p>{{work.research || fillinblank}}</p>
                    </div>
                </div>
            </div>
        </div>
        <button id="seemore" @click="seeMore"><p>看更多...</p></button>
    </div>
</template>

<script>
import ContentWrapper from './Content'
import mobPic1 from '~/assets/mobile/a-1.jpg'
import pcPic1 from '~/assets/pc/a-1.jpg'
import bullet1 from '~/assets/a-7.svg'
import bullet2 from '~/assets/a-8.svg'

export default {
  name: 'Work',
  props: [],
  components: {ContentWrapper},
  computed: {
    list: {
      get: function () {
        this.datalist.forEach(function (ele) {
          let titlesplit = ele.title.split(' ')
          ele.title = titlesplit[0]
          ele.subtitle = titlesplit[1]
        })
        return this.datalist
      },
      set: function (newList) {
        newList.forEach(function (ele) {
          let titlesplit = ele.title.split(' ')
          ele.title = titlesplit[0]
          ele.subtitle = titlesplit[1]
        })
        this.list = newList
      }
    }
  },
  data: function () {
    return {
      mobPic1: mobPic1,
      pcPic1: pcPic1,
      bullet1: bullet1,
      bullet2: bullet2,
      fillinblank: '把3D模型擺進新聞 學到的3件事',
      datalist: [
        {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1,
          research: '把3D模型擺進新聞 學到的3件事'
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1,
          research: '把3D模型擺進新聞 學到的3件事'
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1,
          research: '把3D模型擺進新聞 學到的3件事'
        }, {
          title: '好好說再見 插畫記林杰樑走後1500天',
          description: '俠醫逝世四年餘，遺孀譚敦慈難得卸下理性形象：永遠走不過這......',
          date: '2017.11.23',
          pcPic: pcPic1,
          mobPic: mobPic1
        }
      ]
    }
  },
  mounted: function () {
  },
  methods: {
    seeMore: function () {
      let temp = []
      temp = this.datalist.slice()
      this.datalist = this.datalist.concat(temp)
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
#works{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.work .work-label, .research{
    padding: 10px;
}
.work{
    display: flex;
    flex-direction: column;
    background: white;
}
.work-and-research{
    display: flex;
    flex-direction: column;
    margin: 30px 0;
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
.research-wrapper{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
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
}

#seemore p{
  border-bottom: 4px solid #e73828;
}

</style>
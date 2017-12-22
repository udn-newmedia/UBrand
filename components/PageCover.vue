<template>
    <div class="indexCover">
        <img :src='srcCover' alt="">
        <div class="titleCard">
            <a :href="link" target="_blank">
                <div class="row">
                        <img :src="bullet1" alt="" class="bullet1">
                        <div class="coverLabel">
                            <h2><b>{{title}}<br>{{subtitle}}</b></h2>
                            <h3 class="description">{{truncatedDescription}}</h3>
                            <h4 class="date">{{date}}</h4>
                        </div>
                </div>
            </a>
            <a :href="reportlink" target="_blank" v-if="report!==''">
                <div class="row">
                    <img :src="bullet2" class="bullet2">
                    <div class="coverLabel">
                        <h4 class="report"><u><b>研究報告：</b>{{report}}</u></h4>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script scoped>

import ContentWrapper from './Content'
import bullet1 from '~/assets/a-7.svg'
import bullet2 from '~/assets/a-8.svg'

export default {
  name: 'IndexCover',
  props: ['srcCover', 'coverTitle', 'description', 'date', 'label', 'report', 'link', 'reportlink'],
  components: {ContentWrapper},
  computed: {
    truncatedDescription: function () {
      let len = 30
      if (this.description.length > len) {
        return this.description.substring(0, len - 1) + '...'
      } else {
        return this.description
      }
    }
  },
  data: function () {
    return {
      title: this.coverTitle.split(' ')[0],
      subtitle: this.coverTitle.split(' ')[1],
      bullet1: bullet1,
      bullet2: bullet2
    }
  }
}
</script>

<style scoped>
h2, p, h4{
    color: black;
    margin-top: 0;
}

h4.report{
    color: black;
    line-height: 1.41;
    text-underline-position: under;
}

.indexCover{
    position: relative;
}

.titleCard{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: white;
    width: 430px;
    padding: 20px;
}

.description, .date{
    color: #717071;
}

.coverlabel{
    font-size: 12px;
    color: white;
    background: linear-gradient(to right,#c13432 ,#d3611c);
    padding: 5px 10px;
    border-radius: 100px;
}

.row{
    display: flex;
    justify-content: space-between;
    transform: translateX(-8px);
}

p.report{
    display: inline;
    border-bottom: solid 1px black;
}

.bullet1{
    width: 10%;
    height: 50px;
}

.bullet2{
    width: 10%;
    height: 30px;    
}

.coverLabel{
    width: 80%;
}

a{
    color: black;
    text-decoration: none;
}

</style>
<template>
    <div class="indexCover">
        <img :src='srcCover' alt="">
        <div class="titleCard">
            <div class="row">
                <img :src="bullet1" alt="" class="bullet1">
                <div class="coverLabel">
                    <h2><b>{{title}}<br>{{subtitle}}</b></h2>
                    <h3 class="description">{{description}}</h3>
                    <p>{{date}}</p>
                </div>
            </div>
            <div class="row" style="align-items: center;">
                <img :src="bullet2" alt="" class="bullet2">
                <div class="coverLabel">
                    <p class="report"><b>研究報告：</b>{{report}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ContentWrapper from './Content'
import bullet1 from '~/assets/a-7.svg'
import bullet2 from '~/assets/a-8.svg'

export default {
  name: 'IndexCover',
  props: ['srcCover', 'coverTitle', 'description', 'date', 'label', 'report'],
  components: {ContentWrapper},
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
h2, p{
    margin-top: 0;
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
    width: 45%;
    padding: 20px;
}

.description{
    color: #717071;
}

.coverlabel{
    font-size: 12px;
    color: white;
    background: red;
    padding: 5px 10px;
    border-radius: 100px;
}

.row{
    display: flex;
    justify-content: space-between;
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
</style>
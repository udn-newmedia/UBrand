<template>
    <div class="indexCover">
        <a :href="link" target="_blank">
            <div class="imgwrapper">
                <img :src="srcCover" alt="">
            </div> 
            <div class="titleCard">
                <span class="coverlabel">{{label}}</span>
                <h2><b>{{title}}<br>{{subtitle}}</b></h2>
                <h3 class="description">{{truncatedDescription}}</h3>
                <h4 class="date">{{date}}</h4>
            </div>
        </a>
        <CircleAnim triggerPoint="0"/>
    </div>
</template>

<script>
import ContentWrapper from './Content'
import CircleAnim from './CircleAnim'

export default {
  name: 'IndexCover',
  props: ['srcCover', 'coverTitle', 'description', 'date', 'label', 'link'],
  components: {ContentWrapper, CircleAnim},
  computed: {
    truncatedDescription: function () {
      let len = 30
      if (this.description.length > len) {
        return this.description.substring(0, len - 1) + '...'
      } else {
        return this.description
      }
    },
    subtitle: function () {
      if (this.coverTitle.split(' ').length > 2) {
        let subtitle = this.coverTitle.split(' ')[1]
        for (let i = 2; i < this.coverTitle.split(' ').length; i++) {
          let str = this.coverTitle.split(' ')[i]
          subtitle = subtitle + ' ' + str
        }
        return subtitle
      } else if (this.coverTitle.split(' ').length === 2) {
        return this.coverTitle.split(' ')[1]
      } else {
        return ' '
      }
    }
  },
  data: function () {
    return {
      title: this.coverTitle.split(' ')[0]
    }
  }
}
</script>

<style scoped>
h2{
    margin-top: 10px;
    margin-bottom: 0;
    line-height: 1.33;
}
h3{
    margin-top: 10px;
    font-size: 21px;
    line-height: 1.52;
}
h4.date{
    color: #717071;
}
.indexCover{
    position: relative;
    z-index: 1;
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
    background: linear-gradient(to right,#c13432 ,#d3611c);
    padding: 5px 10px;
    border-radius: 100px;
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
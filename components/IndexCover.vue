<template>
    <div class="indexCover">
        <img :src='srcCover' alt="">
        <div class="titleCard">
            <span class="coverlabel">{{label}}</span>
            <h2><b>{{title}}<br>{{subtitle}}</b></h2>
            <h3 class="description">{{description}}</h3>
            <h4 class="date">{{date}}</h4>
        </div>
    </div>
</template>

<script>

import ContentWrapper from './Content'

export default {
  name: 'IndexCover',
  props: ['srcCover', 'coverTitle', 'description', 'date', 'label'],
  components: {ContentWrapper},
  data: function () {
    return {
      title: this.coverTitle.split(' ')[0],
      subtitle: this.coverTitle.split(' ')[1]
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

</style>
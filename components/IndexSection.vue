<template>
    <div class="indexSection" :style="{backgroundColor: backgroundColor}">
        <div class="introContent" :class="{'right': position === 'right'}" v-if="position==='right'">
        </div>
        <div class="introContent">
            <div class="anim">bodymovin</div>
            <div class="intro">
                <h2>多媒體報導</h2>
                <p>專題企畫、深度採訪，以多媒體形式呈現，並流暢手機閱讀體驗</p>
            </div>
            <div class="more">
                <button>看更多...</button>
            </div>
        </div>
        <div class="introContent" :class="{'left': position === 'left'}" v-if="position==='left'">
        </div>
    </div>
</template>

<script>

import ContentWrapper from './Content'

export default {
  name: 'IndexSection',
  props: ['background-color', 'position'],
  components: {ContentWrapper},
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
.anim {
    height: 100px;
    border: solid 1px black;
}
.indexSection {
    display: flex;
}
.introContent {
    height: 100%;
}

@media screen and (min-width:1200px){
    .introContent {
        width: 50%;
    }    
}
</style>
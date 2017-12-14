<template>
    <div class="indexSection" :style="{backgroundColor: backgroundColor}">
        <div class="introContent" :class="{'right': position === 'right'}" v-if="position==='right'">
        </div>
        <div class="introContent">
            <slot name="anim" class="anim"></slot>
            <slot name="intro" class="intro"></slot>
            <div class="more">
                <slot></slot>
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
    margin: 20px 0;
}
.introContent {
    height: 100%;
}

@media screen and (min-width:1200px){
    .introContent {
        width: 50%;
    }    
    .introContent.left, .introContent.right{
        height: 0;
    }
}
</style>
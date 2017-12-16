<template>
    <div class="indexSection" :style="{backgroundColor: backgroundColor}">
        <div class="introContent" :class="{'right': position === 'right'}" v-if="position==='right'">
        </div>
        <div class="introContent">
            <slot name="anim" class="anim"></slot>
            <div class="introWrapper">
                <slot name="intro" class="intro"></slot>
                <div class="more">
                    <slot></slot>
                </div>
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

.indexSection {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.introContent {
    height: 100%;
}

@media screen and (min-width:1200px){
    .anim {
        height: 191px;
        margin-bottom: 40px;
    }

    .introContent {
        position: relative;
        width: 100%;
    }    

    .introContent.left, .introContent.right{
        height: 0;
    }
}

.introWrapper{
    display: flex;
    justify-content: space-between;
}

.introWrapper .intro{
    width: 65%;
}

.introWrapper .more{
    width: 25%;
    align-self: flex-end;
}

@media screen and (min-width:1200px){
    .introWrapper{
        width: 100%;
        flex-direction: column;
        transition: all 0.5s ease-in;
    }
    .introWrapper .more{
        margin-top: 30px;
        align-self: flex-start;
    }
}


</style>
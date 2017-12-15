<template>
  <div id="bookmarks">
    <ContentWrapper :background-color="backgroundColor">
      <slot name="padding"></slot>
      <ul>
          <slot></slot>
      </ul>
    </ContentWrapper>
  </div>
</template>

<script>

import ContentWrapper from './Content'

export default {
  name: 'Bookmarks',
  props: ['color', 'buttonColor', 'backgroundColor'],
  components: {ContentWrapper},
  data: function () {
    return {
      top: 0,
      isOpen: false,
      inner: 'inner',
      outer: 'outer'
    }
  },
  mounted: function () {
    // window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleClick: function () {
      this.isOpen = !this.isOpen
      // ga("send", {
      //     "hitType": "event",
      //     "eventCategory": "Ham Click",
      //     "eventAction": "click",
      //     "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Ham Click]"
      // });
    }
    // handleScroll: function(event) {
    //   let currentH = window.pageYOffset
    //   if (currentH < window.innerHeight / 2) {
    //     this.top = 0
    //   }else {
    //     if (window.innerWidth <= 1024) {
    //         this.top = 4
    //     }else {
    //         this.top = 6
    //     }
    //   }
    // }
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

@media screen and (min-width: 1200px){
  ul{
      margin: 0 110px;
  } 
}

@media screen and (max-width: 1199px){
  ul{
      margin: 0;
  }
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
}

a{
  color: #717071;
  margin: 0;
  border-bottom: 4px solid transparent;
}

a:active, a:hover{
  text-decoration: none;
  border-bottom: 4px solid #e73828;
}

a:active, a:hover p{
  border-bottom: 4px solid #e73828;
}


</style>
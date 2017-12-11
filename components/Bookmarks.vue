<template>
    <div id="bookmarks">
        <ul>
            <li><a href=".">多媒體</a></li>
            <li><a href=".">數據</a></li>
            <li><a href=".">互動</a></li>
            <li><a href=".">影音</a></li>
            <li><a href=".">原生廣告</a></li>
        </ul>
    </div>
</template>

<script>

import ContentWrapper from './Content'

export default {
  name: 'Bookmarks',
  props: ['color', 'buttonColor'],
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
#head-bar {
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    transition: opacity 0.7s ease;
}

#icon {
    position: absolute;
    top: 0;
}

#icon img {
    width: 157px;
}

.icons {
    float: right;
    display: flex;
    align-items: center;
}

#hbutton {
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    padding: 0 5px;
    position: absolute;
}

#nav-icon {
    width: 46px;
    height: 46px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    opacity: 1;
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 2px;
    opacity: 1;
    right: 12px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 12px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
    top: 21px;
}

#nav-icon span:nth-child(4) {
    top: 30px;
}

#nav-icon.open span:nth-child(1) {
    top: 12px;
    width: 0%;
}

#nav-icon.open span:nth-child(2) {
    transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
    top: 30px;
    width: 0%;
}

#hbutton-contain {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
}

.hbutton {
    padding: 0 12px;
    color: #FFFFFF;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    float: left;
}

.hbutton:hover {
    background-color: #FF4612;
}

.hbutton-select {
    color: #F589BA;
}

@media screen and (max-width: 1024px) {
    #head-bar {
        height: 46px;
    }
    #icon {
        height: 46px;
        line-height: 46px;
    }
    .icons {
        height: 46px;
    }
    .icons img{
        height: 24px;
        margin: 0 5px;
    }
    #hbutton-contain {
        top: 46px;
        background-color: #FFFFFF;
        height: 100vh;
        width: 100%;
        transition: transform 0.7s ease;
        transform: translate(0, -110%);
    }
    #hbutton-contain.open {
        transform: translate(0, 0);
    }
    .hbutton {
        margin: 1px auto 0 auto;
        background-color: #231815;
        color: #FFFFFF;
        height: 60px;
        padding: 0;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
        margin-top: 1px;
        letter-spacing: 8px;
        float: none;
    }
    #logo-contain {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20%;
    }
}

@media screen and (min-width: 1025px) {
    #head-bar {
        height: 50px;
    }
    #icon {
        height: 50px;
        line-height: 50px;
    }
    
    .icons {
        height: 50px;
    }

    .icons img{
        height: 24px;
        margin: 0 5px;
    }

}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #717071;
}

a:active {
    border-bottom: 4px solid #e73828;
}

</style>
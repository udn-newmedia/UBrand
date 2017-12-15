<template>
    <div class="Contact">
        <ContentWrapper :style="{backgroundColor: backgroundColor}">
        <p><br></p>
        <p><br></p>
        <h2>聯絡我們</h2>
        <button class="hidden-pc" @click="send">送出</button>
        <p><br></p>
        <div class="form">
            <div class="row">
                <p class="column">姓名</p>
                <input class="column" type="text" placeholder="請填寫您的 大名">
            </div>
            <div class="row">
                <p class="column">電話</p>
                <input class="column" type="text" placeholder="請填寫您的 聯絡電話">
            </div>
            <div class="row">
                <p class="column">信箱</p>
                <input class="column" type="text" placeholder="請填寫您的 聯絡email">
            </div>
            <div class="row">
                <p class="column">主旨</p>
                <input class="column" type="text" placeholder="請填寫 信件標題">
            </div>
            <div class="row">
                <p class="column">簡述</p>
                <textarea class="column" name="brief" id="brief" cols="30" rows="10" placeholder="請簡述寫下您希望的合作內容"></textarea>
                <button class="hidden-mobile" @click="send">送出</button>
            </div>
            <div class="mask">
                <div class="wrapper">
                    <div class="anim">動畫</div>
                    <p>希望合作內容 已成功送出<br>謝謝您！<br class="hidden-pc">U brand studio團隊將盡快和您聯繫！</p>
                    <button @click="close">關閉</button>
                </div>
            </div>
        </div>
        </ContentWrapper>    
    </div>
</template>

<script>

import ContentWrapper from './Content'

export default {
  name: 'Contact',
  props: ['backgroundColor'],
  components: {ContentWrapper},
  data: function () {
    return {
    }
  },
  methods: {
    send: function () {
      document.querySelector('.mask').style.display = 'flex'
    },
    close: function () {
      document.querySelector('.mask').style.display = 'none'
    }
  }
}
</script>

<style scoped>

.fluid .container {
    padding: 0;
}

.Contact {
    position: relative;
    display: block;
}

h2 {
    float: left;
    margin-top: 0;
    color: white;
}

button {
    float: right;
}

@media screen and (max-width: 1199px){
  .hidden-mobile{
    display: none!important;
  } 
}

@media screen and (min-width: 1200px){
  .hidden-pc{
    display: none!important;
  } 

  button{
      align-self: flex-end;
      margin-left: 50px;
  }
}

.form{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

.row{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px;
}

input{
    height: 36px;
}

@media screen and (min-width: 1200px){
    .row{
        margin: 7px 0;
    }
}
input:focus{
    outline: none;
    box-shadow: 0 0 0 2px #a6a6a6;
}

textarea{
    overflow-y: scroll;
    resize: none;
}
textarea:focus{
    outline: none;
    box-shadow: 0 0 0 1px #a6a6a6;
}
textarea::-webkit-scrollbar-track
{
	background-color: #a6a6a6;
}

textarea::-webkit-scrollbar
{
	width: 9px;
	background-color: #a6a6a6;
}

textarea::-webkit-scrollbar-thumb
{
	background-color: #e73828;
}

p.column{
    color: white;
    width: 15%;
}

@media screen and (min-width: 1200px){
    p.column{
        color: white;
        width: 5%;
        margin-right: 20px;
    }
}

input.column, textarea.column{
    background-color: #dbdcdc;
    width: 80%;
    border-radius: 5px;
}

@media screen and (min-width: 1200px){
    input.column {
        width: 60%;
    }
    textarea.column {
        width: 75%;
    }
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
}

.mask{
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: -2.2px 2px 7px 0 rgba(4, 0, 0, 0.05);
}

.mask p {
    text-align: left;
    margin-top: 10px;
}

@media screen and (min-width: 1200px){
    .mask p {
        text-align: center;
    }
}

.anim{
    border: solid 1px black;
    width: 50px;
    height: 50px;
}

.wrapper button {
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>
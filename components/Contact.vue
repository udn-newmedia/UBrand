<template>
    <div class="Contact">
        <ContentWrapper :style="{backgroundColor: backgroundColor}">
            <p><br></p>
            <p><br></p>
            <h2>聯絡我們</h2>
            <button id="sendbtn" class="hidden-pc sendout" @click="send">送出</button>
            <p><br></p>
            <form v-on:submit.prevent="send">
                <div class="row">
                    <p class="column">姓名</p>
                    <input id="name" name="name" class="column" type="text" v-model.lazy.trim="name" placeholder="請填寫您的 大名">
                </div>
                <div class="row">
                    <p class="column">電話</p>
                    <input id="phone" name="phone" class="column" type="tel" v-model.lazy.trim="phone" placeholder="請填寫您的 聯絡電話">
                </div>
                <div class="row">
                    <p class="column">信箱</p>
                    <input id="email" name="email" class="column" type="email" v-model.lazy.trim="email" placeholder="請填寫您的 聯絡email">
                </div>
                <div class="row">
                    <p class="column">主旨</p>
                    <input id="title" name="title" class="column" type="text" v-model.lazy.trim="title" placeholder="請填寫 信件標題">
                </div>
                <div class="row">
                    <p class="column">簡述</p>
                    <textarea id="message" name="message" class="column" cols="30" rows="10" v-model.lazy.trim="message" placeholder="請簡述寫下您希望的合作內容"></textarea>
                    <button class="hidden-mobile sendout">送出</button>
                </div>
                <div class="mask" v-if="dialogueIsOpen">
                    <div class="wrapper">
                        <RealBodymovin v-if="success" :jsonfile="animCheck"/>
                        <p v-if="success">希望合作內容 已成功送出<br class="hidden-mobile"> 謝謝您！<br class="hidden-pc">U brand studio團隊將盡快和您聯繫！</p>
                        <p v-if="!success && emptyfieldsname.length">
                            <span v-for="(name, index) in emptyfieldsname">{{name}}<span v-if="index < emptyfieldsname.length - 1">、</span></span> 不能空白，請您補上
                        </p>
                        <p v-if="!success && formaterrorfieldsname.length">
                            <span v-for="(name, index) in formaterrorfieldsname">{{name}}<span v-if="index < formaterrorfieldsname.length - 1">、</span></span> 格式不符合，請您修改
                        </p>
                        <p v-if="!success && ajaxerr">發生錯誤，請再試一次</p>
                        <button class="closeBtn" @click="close">
                            <div id="cross-icon">
                                <span></span>
                                <span></span>
                            </div>                        
                        </button>
                    </div>
                </div>
            </form>
        </ContentWrapper>    
    </div>
</template>

<script>

import ContentWrapper from './Content'
import RealBodymovin from '~/Components/RealBodymovin.vue'

var emptyfields = []
var formaterrorfields = []

export default {
  name: 'Contact',
  props: ['backgroundColor'],
  components: {ContentWrapper, RealBodymovin},
  data: function () {
    return {
      animCheck: 'bodymovin/check/data.json',
      emptyfieldsname: emptyfields,
      formaterrorfieldsname: formaterrorfields,
      dialogueIsOpen: false,
      ajaxerr: false,
      success: false,
      name: undefined,
      phone: undefined,
      email: undefined,
      title: undefined,
      message: undefined
    }
  },
  methods: {
    send: function () {
      if (!this.dialogueIsOpen) {
        this.dataCheck()
      }
    },
    close: function () {
      this.success = false
      this.dialogueClose()
      while (emptyfields.length > 0) {
        emptyfields.pop()
      }
      while (formaterrorfields.length > 0) {
        formaterrorfields.pop()
      }
    },
    dataCheck: function () {
      this.emptyfieldsname = this.getEmptyfields()
      this.formaterrorfieldsname = this.getFormaterrorfields()
      if (this.emptyfieldsname.length === 0 && this.formaterrorfieldsname.length === 0) {
        this.success = this.sendmail(this.name)
      } else {
        this.dialogueOpen()
      }
    },
    getEmptyfields: function () {
      if (!this.name) {
        emptyfields.push('姓名')
      }
      if (!this.phone) {
        emptyfields.push('電話')
      }
      if (!this.email) {
        emptyfields.push('email')
      }
      if (!this.title) {
        emptyfields.push('信件標題')
      }
      if (!this.message) {
        emptyfields.push('合作內容')
      }
      return emptyfields
    },
    getFormaterrorfields: function () {
      if (this.name) {
        // name 不能是數字，也不能包含數字。
        if (!isNaN(this.name) || this.name.match(/\d+/g)) {
          this.name = ''
          formaterrorfields.push('姓名')
        }
      }
      if (this.phone) {
        // phone不能包含文字。
        if (!this.isAPhoneNumber(this.phone)) {
          this.phone = ''
          formaterrorfields.push('電話')
        }
      }
      if (this.email) {
        // email只能包含英文、數字、符號
        if (!this.isEmail(this.email)) {
          this.email = ''
          formaterrorfields.push('email')
        }
      }
      return formaterrorfields
    },
    isAPhoneNumber: function (text) {
      let i, j, strTemp
      strTemp = '0123456789-()# '
      for (i = 0; i < text.length; i++) {
        j = strTemp.indexOf(text.charAt(i))
        if (j === -1) {
          // 說明有字符不合
          return false
        } else {
          // 說明合法
          return true
        }
      }
    },
    isEmail: function (text) {
      let re = /\S+@\S+\.\S+/
      return re.test(text.toLowerCase())
    },
    sendmail: function (name) {
      let xmlHttp = new XMLHttpRequest()
      let that = this
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
        //   let response = xmlHttp.responseText
          if (xmlHttp.status === 200) {
            // console.log(response)
            that.success = true
            that.dialogueOpen()
          } else {
            // console.log(response)
            that.success = false
            that.ajaxerr = true
            that.dialogueOpen()
          }
        }
      }
      //   xmlHttp.open('POST', 'php/sendmail.php', true)
      xmlHttp.open('POST', 'https://nmdap.udn.com.tw/ubrand/php/sendmail.php', true)
      xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xmlHttp.send('name=' + this.name + '&phone=' + this.phone + '&email=' + this.email + '&title=' + this.title + '&message=' + this.message + '&password=' + 'udnnmd')
    },
    dialogueOpen: function () {
      this.dialogueIsOpen = true
    },
    dialogueClose: function () {
      this.dialogueIsOpen = false
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

@media screen and (max-width: 1023px){
  .hidden-mobile{
    display: none!important;
  } 
}

@media screen and (min-width: 1024px){
  .hidden-pc{
    display: none!important;
  } 

  button{
      align-self: flex-end;
      margin-left: 50px;
  }
}

form{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1023px){
    form{
        margin-top: 30px;
    }
}

.row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5px 0;
}

input{
    height: 36px;
}

@media screen and (min-width: 1024px){
    .row{
        justify-content: flex-start;
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

@media screen and (min-width: 1024px){
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

@media screen and (min-width: 1024px){
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
    display: flex;
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

@media screen and (min-width: 1024px){
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

button {
    margin-right: 10px;
}

button.closeBtn {
    width: 45px;
    height: 45px;
    margin: 0;
    border-radius: 50%;
    padding: 0;
}

#cross-icon {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    margin: 0 auto;
}

#cross-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    background: #000;
    border-radius: 2px;
    opacity: 1;
}

#cross-icon span:nth-child(1) {
    transform: rotate(45deg);
}

#cross-icon span:nth-child(2) {
    transform: rotate(-45deg);
}

</style>
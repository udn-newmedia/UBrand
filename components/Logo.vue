<template>
    <div class="logo-block">
        <div class="logo">
            <a href="." target="_blank"><img :src="u2Logo"></a>
        </div>
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img :src="udnLogo"></a>
        </div>
        <div class="logo">
            <!-- <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank"><img :src="nmdLogo"></a> -->
            <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd_logo_black_2018.svg"></a>
        </div>
    </div>
</template>

<script>
import nmdLogo from '~/assets/logo_newmedia.svg'
import u2Logo from '~/assets/logo_U2.svg'
import udnLogo from '~/assets/logo_udn.svg'

export default {
  name: 'Logo',
  data: function () {
    return {
      nmdLogo: nmdLogo,
      u2Logo: u2Logo,
      udnLogo: udnLogo
    }
  }
}
</script>

<style scoped>
  .logo{
      width: 140px;
      display: inline-block;
  }
  .logo img{
      width: 140px;
  }
  @media screen and (max-width: 1024px){
      .logo-block{
          margin-top: 32px;
      }
      .logo{
        display: block;
        margin: 10px 0;
      }
  }
  @media screen and (min-width: 1025px){
      .logo-block{
          float: right;
          margin-top: -45px;
      }
  }
</style>
<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        ubrand
      </h1>
      <h2 class="subtitle">
        研究報告
      </h2>
      <div class="links">
        <!-- <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a> -->
        <!-- <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a> -->
        <ul>
          <li><nuxt-link to="/multimedia">多媒體報導</nuxt-link></li>
          <li><nuxt-link to="/data">數據專題</nuxt-link></li>
          <li><nuxt-link to="/interactive">互動新聞</nuxt-link></li>
          <li><nuxt-link to="/explan">解釋影音</nuxt-link></li>
          <li><nuxt-link to="/native">原生廣告</nuxt-link></li>
          <li><nuxt-link to="/research">研究報告</nuxt-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}
</style>

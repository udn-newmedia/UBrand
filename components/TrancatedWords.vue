<template>
  <h4 class="description hidden-mobile">{{TrancatedTexts}}</h4>
</template>

<script>

export default {
  /* 本元件用途：
    *  一段文字若大於指定字數則縮減成 ...
    * [傳入參數]：
    *  - maxLen: 最大不縮減長度 (超過這個字數則變 ...)
    *  - text: 文字
    * [註]:
    * */
  name: 'TrancatedDescription',
  props: ['maxLen', 'texts'],
  computed: {
    TrancatedTexts: function () {
      if (this.texts.length > this.maxLen) {
        return this.texts.substring(0, this.maxLen - 1) + '...'
      } else {
        return this.texts
      }
    }
  }
}
</script>

<style scoped>
</style>
<template>
  <h4 class="description hidden-mobile">{{TrancatedTexts}}</h4>
</template>

<script>

export default {
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
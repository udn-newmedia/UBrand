<template>
    <button @click="logName">Log me</button>
</template>

<script>
   export default {
      name: 'myComponent',
      data () {
         return {
            name: 'John'
         }
      },
      methods: {
         logName () {
            console.log(this.name)
         }
      }
   }
</script>
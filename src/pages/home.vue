<template>
  <div>
    <h1>{{ home }}</h1>
    <img :src="imagePath" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const home = 'home'
    const imagePath = require('../assets/img/image1.png')
    return {
      home,
      imagePath
    }
  }
})
</script>

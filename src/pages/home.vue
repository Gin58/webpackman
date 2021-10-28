<template>
  <h1>{{ home }}</h1>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const home = 'home'
    return {
      home
    }
  }
})
</script>

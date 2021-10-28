<template>
  <h1>{{ about }}</h1>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const about = 'about'
    return {
      about
    }
  }
})
</script>
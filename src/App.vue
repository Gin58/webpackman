<template>
  <div>
    <sample /> //sample.vueで作成したtemplateを読み込みます。
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import sample from './components/sample.vue'

export default defineComponent({
  components: {
    sample
  },
})
</script>

<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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

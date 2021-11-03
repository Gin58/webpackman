<template>
  <div>
    <div id="nav">
      <router-link to="/" exact-active-class="active">Home</router-link> |
      <router-link to="/about" exact-active-class="active">About</router-link>
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
<style lang='scss'>
.active {
  color: red;
}
</style>

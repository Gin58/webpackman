<template>
  <div>
    <sample/> //sample.vueで作成したtemplateを読み込みます。
  </div>
</template>

<script>
import sample from './components/sample.vue'

export default {
  name:'App',
  components:{
    sample
  }
}
</script>

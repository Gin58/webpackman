<template>
  <div>
    <p class="message--sample">{{ message }}</p>
    <input type="text" v-model="message">
  </div>
</template>
<script>
export default {
  name:'sample',
  data:function(){
    return{
      message:'hello world!',
    }
  }
}
</script>
<style lang="scss" scoped>
  .message--sample{
    color: red;
    font-size: 25px;
  }
</style>

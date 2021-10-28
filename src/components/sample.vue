<template>
  <div>
    <p class="message--sample">{{ state.message }}</p>
    <input type="text" v-model="state.message">
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive<{ message: string }>({
      message: "hello world!"
    })
    return {
      state
    }
  }
})
</script>
<style lang="scss" scoped>
  .message--sample{
    color: red;
    font-size: 25px;
  }
</style>

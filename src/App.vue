<template>
  <div>
    <h1 class="red">hello world</h1>
    <RouterView />
    <h2>Ray</h2>
    <el-button type="primary">Primary</el-button>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
// import { onMounted } from 'vue'
// onMounted(() => {
//   document.body.style.setProperty('--el-color-primary', '#21252d')
// })
</script>

<style lang="scss"></style>

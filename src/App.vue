<!--
 * @Author: Ray
 * @Date: 2023-12-21 10:10:27
 * @LastEditors: Ray
 * @LastEditTime: 2023-12-22 10:39:46
 * @FilePath: /blueshop/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by Ray, All Rights Reserved. 
-->
<template>
  <div>
    <h1 class="red">hello world</h1>
    <RouterView />
    <h2>Ray</h2>
    <el-button type="primary" @click="getGoodsList">Primary</el-button>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import getGoodsApi from '@/apis/goods'
// import { onMounted } from 'vue'
// onMounted(() => {
//   document.body.style.setProperty('--el-color-primary', '#21252d')
// })

// 测试接口
const getGoodsList = () => {
  getGoodsApi()
}
</script>

<style lang="scss"></style>

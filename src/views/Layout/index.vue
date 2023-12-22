<template>
  <div class="container">
    <h1>i am Layout</h1>
    {{ count }}
    <el-button type="danger" @click="increment">+1</el-button>

    <RouterView />
  </div>
</template>
<script setup>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import counterStore from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const { count } = storeToRefs(counterStore())
console.log(count)
const { increment } = counterStore()
</script>
<style lang="scss" scoped></style>

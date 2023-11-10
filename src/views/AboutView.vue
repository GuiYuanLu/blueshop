<template>
  <div class="about">
    <button @click="userinfo.age++">改变</button>
    <h1>{{ userinfo.age }}</h1>
    <h2>测试</h2>
    2222
  </div>
</template>

<style>
@media (min-width: 1024px) {
  xiamian .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { watch, reactive } from 'vue'

const userinfo = reactive({
  name: 'xixi',
  age: 18
})
// 侦听单个对象的属性。
watch(
  () => userinfo.age,
  (newValue, oldValue) => {
    console.log(newValue, oldValue)
  }
)

// 侦听对象中的多个属性需要写成数组形式
// 。。。。。
</script>

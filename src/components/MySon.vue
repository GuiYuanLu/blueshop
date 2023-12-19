<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click="clickHandlle">点击向父组件发送信息</button>
    <h1>{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// 父传子
const props = defineProps({
  msg: String
})
console.log(props.msg)

// 子传父
const emits = defineEmits(['say-msg'])

const clickHandlle = () => {
  emits('say-msg', { name: 'Ray' })
}

// 跨组件通信可以使用provide 和 inject 来直接从root组件传递给child组件
// 顶层组件通过provide组件提供数据 ，内部组件通过inject来接受数据

// ref直接访问dom属性

const count = ref(0)

const setCount = (n) => {
  count.value = n
}

defineExpose({
  setCount
})
</script>
<style scoped>
h1 {
  color: red;
}
</style>

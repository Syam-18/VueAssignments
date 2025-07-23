<script setup>
import { ref, watchEffect } from 'vue'
const count = ref(0)
watchEffect(() => {
  document.title = `Count: ${count.value}`;
})
</script>
<template>
  <div class="flex flex-col h-screen w-screen items-center justify-center">
      <h1 class="text-4xl">Count {{ count }}</h1>
      <div class="flex m-4 text-lg">
        <button @click="count++" class="bg-[#7960dc] text-white m-1 p-1 rounded-sm ">Increase</button>
        <button @click="count = 0" class="bg-[#7960dc] text-white m-1 p-1 rounded-sm ">Reset</button>
        <button @click="count--" class="bg-[#7960dc] text-white m-1 p-1 rounded-sm ">Decrease</button>
      </div>
    </div>
</template>
<style scoped>

</style>

<!-- import { useState } from "react"
import './index.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const onClickIncrease = () => {
        setCount(prevCount => prevCount + 1)
    }
    const onClickDecrease = () => {
      setCount(prevCount => prevCount - 1)
    }
    return (
      <div className="counter-bg-container">
        <h1>Count {count}</h1>
        <button onClick={onClickIncrease}>Increase</button>
        <button onClick={onClickDecrease}>Decrease</button>
      </div>
    )
}

export default Counter -->

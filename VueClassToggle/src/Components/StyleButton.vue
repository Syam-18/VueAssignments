<script setup>
import { ref } from 'vue'

const style = ref(style1)
const style1 = 'bg-red-600 text-white '
const style2 = 'bg-green-600 text-white '
const toggleStyle = () => {
  if (style.value == style1) {
    style.value = style2
  } else {
    style.value = style1
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div :class="style" class="p-4">
      <p>Draft Text</p>
    </div>
    <button @click="toggleStyle" class="bg-gray-800 text-white m-3 px-2 p-1 rounded">Toggle</button>
  </div>
</template>

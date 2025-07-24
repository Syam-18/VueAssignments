<script setup>
import { ref } from 'vue'
const pass = ref('')
const isChecked = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <label class="text-2xl">Password</label>
    <div class="flex gap-4">
      <input type="checkbox" v-model="isChecked" class="w-[20px]" />
      <input
        :type="isChecked ? 'text' : 'password'"
        class="border-1 border-blue-400 px-2 py-1"
        v-model="pass"
        ref="passwordInput"
      />
    </div>
  </div>
</template>

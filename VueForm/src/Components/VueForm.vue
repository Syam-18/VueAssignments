<script setup>
import { ref, useTemplateRef } from 'vue'

const name = ref('')
const mail = ref('')
const age = ref('')
const successMsg = ref('')
const formRef = useTemplateRef('form')

const errorMsg = ref('')
const submitForm = (e) => {
  e.preventDefault();
  if (name.value.trim === '') {
    errorMsg.value = '*Name field required';
  }
  else if (mail.value.trim === '') {
    errorMsg.value = '*Mail field required';
  }
  else if (age.value.trim === '') {
    errorMsg.value = '*Age field required';
  }
  else {
    errorMsg.value = ''
    successMsg.value = 'Form Submitted Successfully'
    name.value=''
    mail.value=''
    age.value=''
    console.log(formRef.value)
    setTimeout(() => {
      successMsg.value = ''
    }, 2000)
  }
}
</script>
<template>
  <form class="flex flex-col border-2 border-[#b9fbfe] rounded w-[40%] px-4 py-4" ref="form" >
    <label class="text-xl font-medium m-2" for="name">Name <span class=" text-red-600">*</span></label>
    <input
      type="text"
      class="border-1 rounded w-[90%] px-4 py-1 m-2 mt-0"
      id="name"
      v-model="name"
    />
    <label class="text-xl font-medium m-2" for="mail">Email <span class=" text-red-600">*</span></label>
    <input
      type="email"
      class="border-1 rounded w-[90%] px-4 py-1 m-2 mt-0"
      id="mail"
      v-model="mail"
    />
    <label class="text-xl font-medium m-2" for="age">Age <span class=" text-red-600">*</span></label>
    <input type="number" min="18" max="100" class="border-1 rounded w-[90%] px-4 py-1 m-2 mt-0" id="age" v-model="age" />
    <p class="text-red-700 mx-2" v-if="errorMsg">{{ errorMsg }}</p>
    <p class="text-green-400">{{successMsg}}</p>
    <button class="bg-[#a2e0e3] text-black text-2xl m-2 size-min rounded px-2 py-1" @click="submitForm" disabled>Submit</button>
  </form>
</template>

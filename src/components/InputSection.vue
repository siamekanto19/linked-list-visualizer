<script setup lang="ts">
import { ref } from 'vue'
import { appendTail, searchNode, linkedList, reverseList, prependHead } from '../store/LinkedList'
const appendValue = ref(0)
const prependValue = ref(0)
const searchTerm = ref(0)
const appendValueSubmitButton = ref<HTMLButtonElement | null>(null)
const prependValueSubmitButton = ref<HTMLButtonElement | null>(null)
const searchSubmitButton = ref<HTMLButtonElement | null>(null)

const prependOnEnterPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    prependValueSubmitButton.value?.click()
  }
}
const appendOnEnterPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    appendValueSubmitButton.value?.click()
  }
}
const handleAppend = () => {
  if (!appendValue.value) {
    return
  }
  appendTail(appendValue.value)
  appendValue.value = 0
}

const handlePrepend = () => {
  if (!prependValue.value) {
    return
  }
  prependHead(prependValue.value)
  prependValue.value = 0
}
const searchOnEnterPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    searchSubmitButton.value?.click()
  }
}
const handleSearch = () => {
  if (linkedList.isSearchRunning || linkedList.size < 1) {
    return
  }
  searchNode(searchTerm.value)
  searchTerm.value = 0
}
</script>

<template>
  <div class="w-screen flex flex-col lg:w-1/3 2xl:w-1/4 border-b lg:border-b-0 lg:border-l border-gray-300 lg:min-h-screen relative">
    <div class="p-8">
      <!-- Append -->
      <input @keyup="appendOnEnterPress" class="w-full h-12 text-lg font-bold border-gray-200 border" placeholder="Enter a number" v-model="appendValue" type="number" />
      <button ref="appendValueSubmitButton" class="mt-2 px-8 h-10 bg-gray-300 text-gray-800 font-bold hover:bg-gray-400" @click="handleAppend">Append</button>
      <!-- Prepend -->
      <input @keyup="prependOnEnterPress" class="w-full h-12 text-lg font-bold border-gray-200 border mt-6" placeholder="Search a number" v-model="prependValue" type="number" />
      <button ref="prependValueSubmitButton" class="mt-2 px-8 h-10 bg-gray-300 text-gray-800 font-bold hover:bg-gray-400" @click="handlePrepend">Prepend</button>
      <!-- Search -->
      <input @keyup="searchOnEnterPress" class="w-full h-12 text-lg font-bold border-gray-200 border mt-6" placeholder="Search a number" v-model="searchTerm" type="number" />
      <button ref="searchSubmitButton" :class="{ 'opacity-50 pointer-events-none cursor-not-allowed': linkedList.isSearchRunning }" class="mt-2 px-8 h-10 bg-gray-300 text-gray-800 font-bold hover:bg-gray-400" @click="handleSearch">Search</button>
      <br />
      <button class="mt-6 lg:mt-10 w-full px-8 h-12 bg-green-400 text-gray-800 font-bold hover:bg-green-500 flex justify-center items-center gap-x-2 hover:border-[2px] border-gray-800" @click="reverseList">
        Reverse List
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex items-center justify-center mt-auto w-full h-10 bg-gray-200 font-medium text-gray-500">Made With ❤️ By <a class="ml-1 underline" href="https://github.com/siamekanto19" target="_blank">Siam</a></div>
  </div>
</template>

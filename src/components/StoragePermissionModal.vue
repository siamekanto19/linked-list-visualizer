<script setup lang="ts">
import { PropType } from 'vue'
import { linkedList } from '../store/LinkedList'

defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
})

const handleAccept = (): void => {
  linkedList.isAllowedToSave = true
  linkedList.isModalShowing = false
}
const handleReject = (): void => {
  linkedList.isAllowedToSave = false
  linkedList.isModalShowing = false
}
</script>

<template>
  <div v-show="isOpen" class="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-95 grid place-items-center">
    <Transition name="modal">
      <div v-show="isOpen" class="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white rounded-md inner">
        <div class="p-6">
          <h1 class="text-xl font-bold text-gray-800">Do you want to save the Linked List to your Local Storage?</h1>
          <h3 class="text-gray-500 font-medium mt-3">By saving the list in Local Storage, it won't be erased even after you reload the page</h3>
        </div>
        <div class="mt-6 px-6 py-4 w-full bg-gray-200 flex justify-end items-center gap-x-4 rounded-b-md">
          <button @click="handleReject" class="h-10 px-8 bg-red-500 hover:bg-red-600 rounded-full font-medium text-white">Nope</button>
          <button @click="handleAccept" class="h-10 px-8 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium">Sure</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.modal-enter-active {
  @apply transition-all ease-in-out duration-500;
}
.modal-enter-from {
  @apply opacity-0 translate-y-[-50px];
}
.modal-enter-to {
  @apply opacity-100 translate-y-0;
}
</style>

<script setup lang="ts">
import InputSection from './components/InputSection.vue'
import OutputSection from './components/OutputSection.vue'
import { linkedList } from './store/LinkedList'
import { LinkedListType } from './types/LinkedListType'
import useStorage from './hooks/useStorage'
import StoragePermissionModal from './components/StoragePermissionModal.vue'
const { saveJson, jsonValue, stringValue } = useStorage('linkedListData')

if (stringValue) {
  linkedList.isAllowedToSave = true
  linkedList.head = jsonValue.head
}
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row justify-between items-start w-full">
    <StoragePermissionModal :is-open="linkedList.isModalShowing" />
    <OutputSection />
    <InputSection />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

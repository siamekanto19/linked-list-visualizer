<script setup lang="ts">
import { PropType } from 'vue'
import { LinkedListNodeType } from '../types/LinkedListNodeType'
defineProps({
  node: Object as PropType<LinkedListNodeType | null>,
})
</script>

<template>
  <div v-if="node" class="flex items-center gap-x-2">
    <div
      :class="{ 'bg-green-500 scale-110 -translate-y-4': node.hasBeenSearched, '-translate-y-4 scale-110': node.hasFocus, 'bg-yellow-400': !node.hasBeenSearched, 'h-14 lg:h-16 w-auto px-3': node.value > 9999, 'h-14 w-14 lg:h-16 lg:w-16': node.value < 10000 }"
      class="relative rounded-full text-gray-800 text-lg font-bold grid place-items-center transition-all duration-300 cursor-pointer group border-[2px] border-gray-800"
    >
      {{ node?.value }}
    </div>
    <img class="w-8" src="/images/right-arrow.png" alt="Right Arrow" />
  </div>
  <ListNode :node="node.next" v-if="node?.next" />
</template>

<script setup lang="ts">
import ListNode from './ListNode.vue'
import { linkedList, appendTail, searchNode } from '../store/LinkedList'
</script>

<template>
  <div class="w-screen lg:w-full p-8 lg:min-h-screen">
    <div class="flex items-start justify-start gap-x-2 flex-wrap gap-y-8">
      <div class="w-11/12 md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto grid place-items-center bg-white rounded-md shadow" v-if="!linkedList.head">
        <h3 class="text-lg md:text-xl font-medium text-gray-800 p-8 text-center">
          The List is empty. <br />
          Go ahead and append some items in the list.
        </h3>
      </div>
      <ListNode :node="linkedList.head" />
    </div>
  </div>
</template>

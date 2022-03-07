import { computed, ComputedRef, reactive } from 'vue'
import { LinkedListNodeType } from '../types/LinkedListNodeType'
import { LinkedListType } from '../types/LinkedListType'

export const linkedList = reactive<LinkedListType>({
  head: null,
  size: 0,
  isSearchRunning: false,
  isAllowedToSave: false,
  isModalShowing: false,
})

export const appendTail = async (value: number): Promise<LinkedListType> => {
  if (!linkedList.head) {
    linkedList.head = { value, next: null }
    linkedList.size++
    await pauseLoop(1000)
    linkedList.isModalShowing = true
    storeList()
    return linkedList
  }
  let currentNode: LinkedListNodeType | null = linkedList.head
  while (currentNode) {
    if (!currentNode.next) {
      currentNode.next = { value, next: null }
      storeList()
      return linkedList
    }
    currentNode = currentNode.next
  }
  linkedList.size++
  storeList()
  return linkedList
}

export const prependHead = async (value: number): Promise<LinkedListType> => {
  if (!linkedList.head) {
    linkedList.head = { value, next: null }
    linkedList.size++
    await pauseLoop(1000)
    linkedList.isModalShowing = true
    storeList()
    return linkedList
  }
  const oldHead = linkedList.head
  const newHead: LinkedListNodeType = { value, next: oldHead }
  linkedList.head = newHead
  storeList()
  return linkedList
}

export const searchNode = async (value: number): Promise<LinkedListNodeType | null> => {
  linkedList.isSearchRunning = true
  removeSearchRing()

  if (!linkedList.head) {
    return null
    linkedList.isSearchRunning = false
  }
  let currentNode: LinkedListNodeType | null = linkedList.head

  while (currentNode) {
    currentNode.hasFocus = true
    await pauseLoop(200)
    currentNode.hasFocus = false
    if (currentNode.value === value) {
      currentNode.hasBeenSearched = true
      linkedList.isSearchRunning = false
      return currentNode
    }
    currentNode = currentNode.next
  }

  linkedList.isSearchRunning = false
  return null
}

export const reverseList = () => {
  linkedList.head = reverseNode(linkedList.head)
  storeList()
}

const reverseNode = (head: LinkedListNodeType | null): LinkedListNodeType | null => {
  if (!head || !head.next) {
    return head
  }
  let tmp = reverseNode(head.next)
  head.next.next = head
  head.next = null
  return tmp
}

function pauseLoop(ms: number): Promise<any> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, ms)
  )
}

function removeSearchRing(): void {
  let currentNode: LinkedListNodeType | null = linkedList.head
  while (currentNode) {
    if (currentNode.hasBeenSearched) {
      currentNode.hasBeenSearched = false
    }
    currentNode = currentNode.next
  }
}

const storeList = (): void => {
  if (linkedList.isAllowedToSave) {
    localStorage.setItem('linkedListData', JSON.stringify(linkedList))
  }
}

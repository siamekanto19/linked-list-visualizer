import { LinkedListNodeType } from './LinkedListNodeType'

export type LinkedListType = {
  head: LinkedListNodeType | null
  size: number
  isSearchRunning: boolean
  isAllowedToSave: boolean
  isModalShowing: boolean
}

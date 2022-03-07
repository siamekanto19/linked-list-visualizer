export default function useStorage(key: string) {
  const jsonValue = JSON.parse(localStorage.getItem(key)!!)
  const stringValue = localStorage.getItem(key)
  const saveJson = (input: object): void => {
    localStorage.setItem(key, JSON.stringify(input))
  }
  return { jsonValue, stringValue, saveJson }
}

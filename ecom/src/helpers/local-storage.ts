const isBrowser = typeof window !== 'undefined'

const isCookieEnabled = isBrowser && navigator && navigator.cookieEnabled

const localstorage = isCookieEnabled ? window.localStorage : undefined

const hasLocalStorage = (): boolean => {
  if (!localstorage) {
    return false
  }

  try {
    localstorage.setItem('0', '')
    localstorage.removeItem('0')
    return true
  } catch (error) {
    return false
  }
}

const parse = (data: any) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.error(`Oops! Some problems parsing this ${typeof data}.`)
  }

  return null
}

const setItem = (key: string, data: object) => {
  if (!hasLocalStorage()) return
  localstorage?.setItem(key, JSON.stringify(data))
}

const getItem = (key: string) => {
  if (!hasLocalStorage()) return
  return parse(localstorage?.getItem(key))
}

const clear = () => {
  if (!hasLocalStorage()) {
    return
  }

  localstorage?.clear()
}

export default { setItem, getItem, clear }

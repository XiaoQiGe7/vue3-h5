// 本地存储类型
export const StorageType = {
  COOKIE: 'cookie',
  SESSION: 'sessionStorage',
  LOCAL: 'localStorage'
}
// 用户信息本地存储
const USER_KEY = 'user'
const USER_STORAGE = StorageType.LOCAL
// 访问秘钥 存储
const TOKEN_KEY = "token"
// 秘钥本地存储类型
const TOKEN_STORAGE = StorageType.LOCAL
// 菜单本地存储类型
// const MENU_STORAGE = StorageType.SESSION
const MENU_STORAGE = StorageType.LOCAL
const MENU_KEY = 'menus'
const PERMISSION_KEY = 'permissions'
/**
 * @description: 本地存储、获取、清除
 * @param {String} key 存储键值
 * @param {String} value 存储值
 * @param {String} storage 存储位置
 * @return {*}
 */
function set(key, value = '', storage) {
  switch (storage) {
    // case StorageType.COOKIE:
    //   cookie.set(key, value)
    //   break
    case StorageType.SESSION:
      sessionStorage.setItem(key, value)
      break
    case StorageType.LOCAL:
      localStorage.setItem(key, value)
      break
    default:
      localStorage.setItem(key, value)
      break
  }
}
function get(key, storage) {
  let result
  switch (storage) {
    // case StorageType.COOKIE:
    //   result = cookie.get(key)
    //   break
    case StorageType.SESSION:
      result = sessionStorage.getItem(key)
      break
    case StorageType.LOCAL:
      result = localStorage.getItem(key)
      break
    default:
      localStorage.getItem(key)
      break
  }
  return result
}
function clear(key, storage) {
  switch (storage) {
    // case StorageType.COOKIE:
    //   cookie.remove(key)
    //   break
    case StorageType.SESSION:
      sessionStorage.removeItem(key)
      break
    case StorageType.LOCAL:
      localStorage.removeItem(key)
      break
    default:
      localStorage.removeItem(key)
      break
  }
}
/**
 * @description: user-存储、获取、清除
 * @param {*}
 * @return {*}
 */
export function getUser() {
  return JSON.parse(get(USER_KEY, USER_STORAGE) || '{}')
}
export function setUser(user) {
  set(USER_KEY, JSON.stringify(user), USER_STORAGE)
}
export function clearUser() {
  clear(USER_KEY, USER_STORAGE)
}
/**
 * @description: token-存储、获取、清除
 * @param {*}
 * @return {*}
 */
export function getToken() {
  return get(TOKEN_KEY, TOKEN_STORAGE) || undefined
}
export function setToken(token) {
  set(TOKEN_KEY, token, TOKEN_STORAGE)
}
export function clearToken() {
  clear(TOKEN_KEY, TOKEN_STORAGE)
}

// /**
//  * @description: 菜单、权限-存储、获取、清除
//  * @param {*}
//  * @return {*}
//  */
// export function getMenuAndPermission() {
//   return {
//     menus: JSON.parse(get(MENU_KEY, MENU_STORAGE) || '[]') || [],
//     permissions: JSON.parse(get(PERMISSION_KEY, MENU_STORAGE) || '[]') || []
//   }
// }
// export function setMenuAndPermission(data) {
//   set(MENU_KEY, JSON.stringify(data.menus), MENU_STORAGE)
//   set(PERMISSION_KEY, JSON.stringify(data.permissions), MENU_STORAGE)
// }
// export function clearMenuAndPermission() {
//   clear(MENU_KEY, MENU_STORAGE)
//   clear(PERMISSION_KEY, MENU_STORAGE)
// }
/**
 * @description: 菜单-存储、获取、清除
 * @param {*}
 * @return {*}
 */
export function getMenu() {
  return JSON.parse(get(MENU_KEY, MENU_STORAGE) || '[]') || []
}
export function setMenu(menus) {
  set(MENU_KEY, JSON.stringify(menus), MENU_STORAGE)
}
export function clearMenu() {
  clear(MENU_KEY, MENU_STORAGE)
}
export function permission(){
  return getUser().userName === "8a4d8662-8d47-47b3-87a1-3cd7227a1fa3"
}
/**
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
export function uuid(length = 32) {
    const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let str = ''
    for (let i = 0; i < length; i++) {
        str += num.charAt(Math.floor(Math.random() * num.length))
    }
    return str
}
export function randomCol(){
    let col = '#'
    for(let i = 0;i < 6;i++){
        col += parseInt(Math.random() * 16).toString(16)
    }
    return col
}
export function randomStatus(){
    return 1 > Math.floor(Math.random() * 2)
}
export function randomId () {
    return parseInt(Math.random() * 1000000).toString(16)
}
/**
* @description m到n的随机数
* @param m
* @param n
* @returns {number}
*/
export function random(m, n) {
    return Math.floor(Math.random() * (m - n) + n)
}

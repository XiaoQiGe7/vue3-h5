/**
 * @description 父子关系的数组转换成树形结构数据
 * @param data
 * @returns {*}
 */
export function translateDataToTree(data) {
    const parent = data.filter(
        (value) => value.parentId === 'undefined' || value.parentId == null
    )
    const children = data.filter(
        (value) => value.parentId !== 'undefined' && value.parentId != null
    )
    const translator = (parent, children) => {
        parent.forEach((parent) => {
            children.forEach((current, index) => {
                if (current.parentId === parent.id) {
                    parent.hasChildren = false
                    const temp = JSON.parse(JSON.stringify(children))
                    temp.splice(index, 1)
                    translator([current], temp)
                    typeof parent.children !== 'undefined'
                        ? parent.children.push(current)
                        : (parent.children = [current])
                }
            })
        })
    }
    translator(parent, children)
    return parent
}

/**
* @description 树形结构数据转换成父子关系的数组
* @param data
* @returns {[]}
*/
export function translateTreeToData(data) {
    const result = []
    data.forEach((item) => {
        const loop = (data) => {
            result.push({
                id: data.id,
                name: data.name,
                parentId: data.parentId,
            })
            const child = data.children
            if (child) {
                for (let i = 0; i < child.length; i++) {
                    loop(child[i])
                }
            }
        }
        loop(item)
    })
    return result
}

/**
 * @description: 日期转字符串
 * @param {Date} time 日期 默认当前日期
 * @param {String} format 格式
 * @return {*}
 */
export function parseDate2Str(time = new Date(), format = '{y}-{M}-{d} {h}:{m}:{s}') {
    let result = ''
    let date = new Date()
    const type = typeof time
    if (type === 'object') {
        date = time
    } else if (type === 'number') {
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    result = format.replace(/\{[yMdhmsa]+\}/g, (val) => {
        const key = val.replace(/\{|\}/g, '')
        const value = formatObj[key]
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
    return result
}

/**
 * @description: 字符串转日期
 * @param {String} time 日期字符串
 * @param {Array} separator 分隔符
 * @return {*}
 */
export function parseStr2Date(time = '', separator = ['-', ' ', ':']) {
    let result = new Date()
    const regexp = `/[${separator.join('')}]/g`
    const data = time.split(eval(regexp))
    switch (data.length) {
        case 3:
            result = new Date(+data[0], +data[1] - 1, +data[2])
            break
        case 6:
            result = new Date(+data[0], +data[1] - 1, +data[2], +data[3], +data[4], +data[5])
            break
    }
    return result
}
/**
 * @description：新旧树差异对比
 * @param {原数组} ids 
 * @param {新数组} newIds 
 * 三种情况，只新增，只删除，新增又删除
 * @returns {Object{oldArr:删除的，newArr：新增的}}
 */
export function reSameArr(ids, newIds) {
    for (let i = 0; i < newIds.length;) {
        const index = ids.indexOf(newIds[i])
        if (index > -1) {
            newIds.splice(i, 1)
            ids.splice(index, 1)
        } else {
            i++
        }
    }

    return { ids, newIds }
}
/**
 * @description：普普通通的排序
 * @param {Object[]} arr 需要排序的数组
 * @param {String} prop 需要排列的key
 * @param {String} order 排列方法
 * @returns {Object[]}
 */
export function sort(arr = [], prop = null, order = "ascen") {
    // 降序
    if (order === 'descen' && prop) return arr.sort((a, b) => b[prop] - a[prop])
    // 升序
    if (order === 'ascen' && prop) return arr.sort((a, b) => a[prop] - b[prop])
}
/**
 * 
 * @param {*} arr 
 * @param {*} key 
 * @param {*} param2 
 * @returns {String} value || undefined
 */
export function keyFindValue(arr, key, { arrKey = 'id', value = 'value' }) {
    for (const item of arr) {
        if (item[arrKey] === key) return item[value]
    }
    return undefined
}

export function keyConvertValue(keys, values) {
    if (typeof keys === "string") keys = keys.split(",")
    if(!Array.isArray(values)) return
    const arr = []
    for (const item of values) {
        if (keys.includes(item.dictKey)) arr.push(item.dictValue)
    }
    return arr.join()
}
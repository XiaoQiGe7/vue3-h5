import { ElMessage } from "element-plus";
import { getToken,clearMenu,clearToken,clearUser } from "@/util/storage.js"
import router from '@/router/index'
// 请求头-内容类型
const CONTENT_TYPE = {
    JSON: 'application/json;charset=UTF-8',
    FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
    UPLOAD: 'multipart/form-data',
    STREAM: 'application/octet-stream;charset=UTF-8'
}
const errStatusMessage = {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '未找到该资源',
    405: '请求方法未允许',
    408: '请求超时',
    411: '需要知道长度',
    413: '请求的实体太大',
    414: '请求的URL太长',
    415: '不支持的媒体类型',
    500: '服务器端出错',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求',
}

export async function request(config = {
    url: "",
    method: "GET",
}) {
    const response = fetch(getRequestInfo(config))
    .then(async response =>{
        if (response.status > 499) {
            ElMessage.error(defaultMessage(response.status))
            router.push("/err500")
            return []
        }else{
            const res = await getContentType(response)
            if(response.status == 401){
                clearMenu()
                clearToken()
                clearUser()
                router.push("/login")
            }else if(response.status === 403){
                router.push("/err403")
            }else if(response.status === 404){
                router.push("/err404")
            }
            return res
        }

    })
    return response
}
const defaultMessage = function (status) {
    if (status === 200) return '操作成功'
    const errMessage = errStatusMessage[status] || '卧槽这么6?'
    return errMessage
}
const getRequestInfo = function (config) {
    const { url, method, body } = config
    const token = getToken()
    let contentType = ""
    if (method === 'POST' || method === 'post') {
        if(config["Content-Type"] !== undefined){
            contentType = config["Content-Type"]
        }else{
            contentType = CONTENT_TYPE.JSON
            config.body = JSON.stringify(body)
        }
        // const formData = new FormData()
        // formData.append('file',file)
    }
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType
    })
    config.headers = headers
    const req = new Request(url, config)
    return req.clone()
}
const getContentType = async function (response) {
    const contentType = response.headers.get('Content-Type')
    if (contentType) {
        if (contentType.indexOf('text') > -1) {
            console.log('text')
            return await response.text()
        }
        if (contentType.indexOf('form-data') > -1) {
            console.log('form')
            return await response.formData()
        }
        if (contentType.indexOf('video') > -1) {
            console.log('video')
            return await response.blob()
        }
        return await response.json()
    }
}
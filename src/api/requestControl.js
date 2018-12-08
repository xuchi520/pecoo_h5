import axios from 'axios'
import qs from 'qs'
let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let accessToken = window.localStorage.getItem('tokenId')
const CancelToken = axios.CancelToken

let removePending = config => {
  for (let p in pending) {
    if (pending[p].conf === config.url + '&' + config.method) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].func() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken(c => {
      pending.push({ conf: config.url + '&' + config.method, func: c })
    })
    // 添加请求头
    // config.headers.accessToken = accessToken
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    removePending(response.config) // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response
  },
  error => {
    return Promise.reject(error)
    // return { data: error }  // 返回一个空对象，主要是防止控制台报错
  }
)
const errorMsg = {
  401: '用户尚未登录或者用户身份已过期，即将跳转到登录页面',
  403: '当前用户权限无法执行操作',
  404: '未找到',
  500: '服务器发生错误',
  502: '服务器网关错误',
  503: '服务不可用',
  504: '服务器超时,请检查网络是否连接',
  10001: '业务降级',
  40000: '业务处理失败',
  40001: '缺少参数',
  40002: '非法参数',
  40003: '您还未登录，请登录',
  40004: '接口异常',
  40005: '服务异常',
  90000: '系统异常',
  timeout: '网络超时'
}

// 响应中包含错误
async function errorResponse (res, reject, bus) {
  let errMsg = errorMsg
  switch (res.data.code) {
    case '40003':
      // 登录检测失败
      // bus.$confirm(errMsg[res.data.code])
      delete window.localStorage.tokenId
      delete window.localStorage.userId
      bus.$router.push({
        name: 'login',
        query: {path: window.location}
      })
      break
    case 10001:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 40000:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 40001:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 40002:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 40004:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 40005:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    case 90000:
      bus.$dialog.toast({mes: errMsg[res.data.code]})
      reject(res)
      break
    default:
      bus.$dialog.toast({mes: res.data.msg})
      reject(res)
      break
  }
}

// 请求发生错误
async function failedRequest (err, reject, bus) {
  let errMsg = errorMsg
  if (err.response) {
    switch (err.response.status) {
      case 403:
        bus.$dialog.toast({mes: errMsg[err.response.status]})
        reject(err)
        break
      case 404:
        bus.$dialog.toast({mes: errMsg[err.response.status]})
        reject(err)
        break
      case 500:
        bus.$dialog.toast({mes: errMsg[err.response.status]})
        reject(err)
        break
      case 504:
        bus.$dialog.toast({mes: errMsg[err.response.status]})
        // bus.$dialog.toast({message: errMsg[err.response.status], duration: 0})
        reject(err)
        break
      default:
        bus.$dialog.toast({mes: err.message})
        reject(err)
        break
    }
  } else {
    if (err.code === 'ECONNABORTED') {
      bus.$dialog.toast({mes: errMsg['timeout']})
    }
    reject(err)
  }
}
/**
 *
 * @param {*请求的URL与方法} api
 * @param {*请求需要发送的数据} data
 * @param {*事件总线，主要是为了vue中的i18n和message} bus
 * @param {*回调函数，在上传中用于回调进度信息} cb
 */
export function requestControl (api, data, bus, cb = () => {}) {
  let accessToken = window.localStorage.getItem('tokenId')
  switch (api.method.toLowerCase()) {
    case 'post':
      return new Promise((resolve, reject) => {
        axios
          .post(api.url, data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'accessToken': accessToken || '',
              'sourceMode': 'H5',
              'version': 'V1.0.0',
              'clientTime': new Date().getTime()
            },
            transformRequest: [
              function (data) {
                return qs.stringify(data, { arrayFormat: 'repeat' })
              }
            ]
          })
          .then(res => {
            resolve(res)
            if (res.data.code === '10000') {
              resolve(res)
            } else {
              if ((res.data.scode && res.data.code !== '40003') || res.data.msg === '拍卖行不存在') {
                resolve(res)
              } else {
                errorResponse(res, reject, bus)
              }
            }
          })
          .catch(err => {
            failedRequest(err, reject, bus)
          })
      })
    case 'postjson':
      return new Promise((resolve, reject) => {
        axios
          .post(api.url, data, {
            headers: {
              'Content-Type': 'application/json',
              'accessToken': accessToken || '',
              'sourceMode': 'H5',
              'version': 'V1.0.0',
              'clientTime': new Date().getTime()
            },
            transformRequest: [
              function (data) {
                return data
              }
            ]
          })
        // posterJson({
        //   method: 'post',
        //   url: api.url,
        //   data: data,
        //   timeout: 15 * 1000
        // })
          .then(res => {
            resolve(res)
            if (res.data.code === '10000') {
              resolve(res)
            } else {
              errorResponse(res, reject, bus)
            }
          })
          .catch(err => {
            failedRequest(err, reject, bus)
          })
      })
    case 'get':
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: api.url,
          params: Object.assign(data, {
            dcs_request_unit: new Date().getTime()
          }),
          timeout: 30 * 1000
        })
          .then(res => {
            if (res.data.code === '10000') {
              resolve(res)
            } else {
              errorResponse(res, reject, bus)
            }
          })
          .catch(err => {
            failedRequest(err, reject, bus)
          })
      })
    case 'upload':
      return new Promise((resolve, reject) => {
        axios
          .post(api.url, data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'accessToken': accessToken || '',
              'sourceMode': 'H5',
              'version': 'V1.0.0',
              'clientTime': new Date().getTime()
            },
            onUploadProgress: progressEvent => {
              cb(progressEvent)
            }
          })
          .then(res => {
            if (res.data.code === '10000') {
              resolve(res)
            } else {
              errorResponse(res, reject, bus)
            }
          })
          .catch(err => {
            failedRequest(err, reject, bus)
          })
      })
    default:
      break
  }
}

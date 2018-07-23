let apiUrl = ''
let ApiStore = {}
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs-character */
if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://app.quandikeji.com:8088'
  ApiStore = {
    join: {
      post: function ({name, mobile, storename}) {
        let params = {
          Freelanding: 'TWlqaVdlYi9qb2luSW5zZXJ0LmFjdGlvbg=='
        }
        let joinUrl = 'http://app.quandikeji.com:8188/MijiWeb/joinInsert.action?param='
        params.name = name
        params.mobile = mobile
        params.storeName = storename
        joinUrl = joinUrl + JSON.stringify(params)
        return joinUrl
      }
    },
    express: {
      post: function ({brand, orderSn}) {
        // let url = 'http://192.168.0.168:8890/quandiExpressSite/Logistics/queryLogisticsInfoForJson?'
        console.log('apiUrl', apiUrl)
        let url = 'http://app.quandikeji.com:8088/quandiExpressSite1.4.0/Logistics/queryLogisticsInfoForJson?'
        url = url + 'brand=' + brand + '&orderSn=' + orderSn
        return url
      }
    }
  }
} else {
  apiUrl = 'http://app.quandikeji.com:8088/'
  ApiStore = {
    join: {
        post: function ({name, mobile, storename}) {
        let params = {
          Freelanding: 'TWlqaVdlYi9qb2luSW5zZXJ0LmFjdGlvbg=='
        }
        let joinUrl = 'http://app.quandikeji.com:8188/MijiWeb/joinInsert.action?param='
        params.name = name
        params.mobile = mobile
        params.storeName = storename
        joinUrl = joinUrl + JSON.stringify(params)
        return joinUrl
      }
    },
    /* eslint-disable indent */
    express: {
      post: function ({brand, orderSn}) {
        let url = 'http://app.quandikeji.com:8088/quandiExpressSite1.4.0/Logistics/queryLogisticsInfoForJson?'
        url = url + 'brand=' + brand + '&orderSn=' + orderSn
        return url
      }
    }
  }
}

export default ApiStore

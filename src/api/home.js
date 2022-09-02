import request from "@/utils/request"
/**
 * limit表示请求限制的数据个数
 * @return Promise
 */
export const findBrand = (limit=6) => {
    return request('/home/brand', 'get', {limit})
  }
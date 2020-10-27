import { request } from './request.js'
export function getMultDate() {
  return request({
    url:'/home/multidata'
  })
}
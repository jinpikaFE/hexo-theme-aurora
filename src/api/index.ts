/* eslint-disable @typescript-eslint/no-explicit-any*/
import server from '@/server'

/** 获取getSeetingSortTree */
export async function getSeetingSortTree() {
  return server.request({
    url: '/api/v1/setting/sort/tree',
    method: 'get'
  })
}

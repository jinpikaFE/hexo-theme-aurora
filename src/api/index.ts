/* eslint-disable @typescript-eslint/no-explicit-any*/
import server from '@/server'

/** 获取getSeetingSortTree */
export async function getSeetingSortTree() {
  return server.request({
    url: '/api/v1/setting/sort/tree',
    method: 'get'
  })
}

/** 获取getSeetingSortTree */
export async function getAssociatList(params: { wd: string }) {
  return server.request({
    url: '/api/v1/baidu/su',
    method: 'get',

    params: {
      p: 3,
      ie: 'UTF-8',
      ...params
    }
  })
}

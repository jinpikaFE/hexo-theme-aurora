/* eslint-disable @typescript-eslint/no-explicit-any*/
import server from '@/server'

/** 获取getSeetingSortTree */
export async function getSeetingSortTree() {
  return server.request({
    url: '/api/v1/setting/sort/tree',
    method: 'get'
  })
}

export async function getSeetingWebUrl(params: {
  pageIndex: number
  pageNumber: number
  name?: string
  url?: string
  type?: 0 | 1 | 2 // 1 最热 2 上新
  status?: 1 | 2 // 2正常 1 停用
  sort?: 'desc' | 'asc'
}) {
  return server.request({
    url: '/api/v1/setting/web_url/list',
    method: 'get',
    params
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

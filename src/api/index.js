import requests from '@/api/request'
import mockRequests from '@/api/mockRequest'
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqGetBaneerList = () => mockRequests({ url: '/banner', method: 'get' })

export const reqFloorList = () => mockRequests.get('/floor');

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })
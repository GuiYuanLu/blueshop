/*
 * @Author: Ray
 * @Date: 2023-12-22 10:25:32
 * @LastEditors: Ray
 * @LastEditTime: 2023-12-22 10:33:52
 * @FilePath: /blueshop/src/apis/goods.js
 * @Description:
 *
 * Copyright (c) 2023 by Ray, All Rights Reserved.
 */
import request from '@/utils/axios'

/**
 * @description 获取商品列表
 */
export default function getGoodsApi() {
  return request({
    url: '/api/shop/goods/',
    params: {
      project_id: 1
    }
  })
}

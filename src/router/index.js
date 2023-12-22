/*
 * @Author: Ray
 * @Date: 2023-11-09 14:26:26
 * @LastEditors: Ray
 * @LastEditTime: 2023-12-22 11:44:22
 * @FilePath: /blueshop/src/router/index.js
 * @Description:为项目搭建路由
 *
 * Copyright (c) 2023 by Ray, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/views/Home/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router

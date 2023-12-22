/*
 * @Author: Ray
 * @Date: 2023-11-09 14:26:26
 * @LastEditors: Ray
 * @LastEditTime: 2023-12-22 11:01:10
 * @FilePath: /blueshop/src/router/index.js
 * @Description:
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
      name: 'Layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router

import type { Component } from 'vue';

export { default as AdminLayout } from './layouts/AdminLayout.vue'
export { default as AdminHome } from './pages/AdminHome.vue'
export { default as AdminSettings } from './pages/AdminSettings.vue'
export { default as AdminUsers } from './pages/AdminUsers.vue'

// Stores
export { useAdminStore } from './stores'

// Dynamic route configuration
export interface AdminRoute {
  path: string;
  name: string;
  component: () => Promise<Component>;
}

export function getAdminRoutes(): AdminRoute[] {
  return [
    {
      path: '',
      name: 'admin-home',
      component: () => import('./pages/AdminHome.vue')
    },
    {
      path: 'settings',
      name: 'admin-settings',
      component: () => import('./pages/AdminSettings.vue')
    },
    {
      path: 'users',
      name: 'admin-users',
      component: () => import('./pages/AdminUsers.vue')
    }
  ];
}
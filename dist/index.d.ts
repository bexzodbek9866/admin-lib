import { Component } from 'vue';
export { default as AdminLayout } from './layouts/AdminLayout.vue';
export { default as AdminHome } from './pages/AdminHome.vue';
export { default as AdminSettings } from './pages/AdminSettings.vue';
export { default as AdminUsers } from './pages/AdminUsers.vue';
export { useAdminStore } from './stores';
export interface AdminRoute {
    path: string;
    name: string;
    component: () => Promise<Component>;
}
export declare function getAdminRoutes(): AdminRoute[];
//# sourceMappingURL=index.d.ts.map
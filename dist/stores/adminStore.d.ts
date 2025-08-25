interface AdminUser {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'moderator' | 'user';
    status: 'active' | 'inactive';
    lastLogin?: Date;
}
interface AdminStats {
    totalUsers: number;
    activeUsers: number;
    totalOrders: number;
    revenue: number;
}
export declare const useAdminStore: import('pinia').StoreDefinition<"admin", Pick<{
    adminUsers: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[], AdminUser[] | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[]>;
    currentAdmin: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null, AdminUser | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null>;
    stats: import('vue').Ref<{
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }, AdminStats | {
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    totalAdminUsers: import('vue').ComputedRef<number>;
    activeAdminUsers: import('vue').ComputedRef<number>;
    adminsByRole: import('vue').ComputedRef<{
        admin: number;
        moderator: number;
        user: number;
    }>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    fetchAdminUsers: () => Promise<void>;
    fetchStats: () => Promise<void>;
    setCurrentAdmin: (admin: AdminUser) => void;
    logout: () => void;
    addUser: (user: Omit<AdminUser, "id">) => void;
    updateUserStatus: (userId: number, status: "active" | "inactive") => void;
    updateUserRole: (userId: number, role: "admin" | "moderator" | "user") => void;
    removeUser: (userId: number) => void;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
}, "loading" | "stats" | "adminUsers" | "currentAdmin" | "error" | "notifications">, Pick<{
    adminUsers: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[], AdminUser[] | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[]>;
    currentAdmin: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null, AdminUser | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null>;
    stats: import('vue').Ref<{
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }, AdminStats | {
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    totalAdminUsers: import('vue').ComputedRef<number>;
    activeAdminUsers: import('vue').ComputedRef<number>;
    adminsByRole: import('vue').ComputedRef<{
        admin: number;
        moderator: number;
        user: number;
    }>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    fetchAdminUsers: () => Promise<void>;
    fetchStats: () => Promise<void>;
    setCurrentAdmin: (admin: AdminUser) => void;
    logout: () => void;
    addUser: (user: Omit<AdminUser, "id">) => void;
    updateUserStatus: (userId: number, status: "active" | "inactive") => void;
    updateUserRole: (userId: number, role: "admin" | "moderator" | "user") => void;
    removeUser: (userId: number) => void;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
}, "totalAdminUsers" | "activeAdminUsers" | "adminsByRole" | "isLoggedIn" | "hasNotifications">, Pick<{
    adminUsers: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[], AdminUser[] | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    }[]>;
    currentAdmin: import('vue').Ref<{
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null, AdminUser | {
        id: number;
        name: string;
        email: string;
        role: "admin" | "moderator" | "user";
        status: "active" | "inactive";
        lastLogin?: Date | undefined;
    } | null>;
    stats: import('vue').Ref<{
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }, AdminStats | {
        totalUsers: number;
        activeUsers: number;
        totalOrders: number;
        revenue: number;
    }>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    notifications: import('vue').Ref<string[], string[]>;
    totalAdminUsers: import('vue').ComputedRef<number>;
    activeAdminUsers: import('vue').ComputedRef<number>;
    adminsByRole: import('vue').ComputedRef<{
        admin: number;
        moderator: number;
        user: number;
    }>;
    isLoggedIn: import('vue').ComputedRef<boolean>;
    hasNotifications: import('vue').ComputedRef<boolean>;
    fetchAdminUsers: () => Promise<void>;
    fetchStats: () => Promise<void>;
    setCurrentAdmin: (admin: AdminUser) => void;
    logout: () => void;
    addUser: (user: Omit<AdminUser, "id">) => void;
    updateUserStatus: (userId: number, status: "active" | "inactive") => void;
    updateUserRole: (userId: number, role: "admin" | "moderator" | "user") => void;
    removeUser: (userId: number) => void;
    addNotification: (message: string) => void;
    removeNotification: (message: string) => void;
    clearAllNotifications: () => void;
}, "fetchAdminUsers" | "fetchStats" | "setCurrentAdmin" | "logout" | "addUser" | "updateUserStatus" | "updateUserRole" | "removeUser" | "addNotification" | "removeNotification" | "clearAllNotifications">>;
export {};
//# sourceMappingURL=adminStore.d.ts.map
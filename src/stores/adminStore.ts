import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface AdminUser {
  id: number
  name: string
  email: string
  role: 'admin' | 'moderator' | 'user'
  status: 'active' | 'inactive'
  lastLogin?: Date
}

interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalOrders: number
  revenue: number
}

export const useAdminStore = defineStore('admin', () => {
  // State
  const adminUsers = ref<AdminUser[]>([])
  const currentAdmin = ref<AdminUser | null>(null)
  const stats = ref<AdminStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    revenue: 0
  })
  const loading = ref(false)
  const error = ref<string | null>(null)
  const notifications = ref<string[]>([])

  // Getters
  const totalAdminUsers = computed(() => adminUsers.value.length)
  const activeAdminUsers = computed(() => 
    adminUsers.value.filter(user => user.status === 'active').length
  )
  const adminsByRole = computed(() => {
    const roles = { admin: 0, moderator: 0, user: 0 }
    adminUsers.value.forEach(user => {
      roles[user.role]++
    })
    return roles
  })
  const isLoggedIn = computed(() => currentAdmin.value !== null)
  const hasNotifications = computed(() => notifications.value.length > 0)

  // Actions
  async function fetchAdminUsers() {
    loading.value = true
    error.value = null
    
    try {
      // API simulyatsiyasi
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      adminUsers.value = [
        {
          id: 1,
          name: 'Super Admin',
          email: 'admin@company.com',
          role: 'admin',
          status: 'active',
          lastLogin: new Date()
        },
        {
          id: 2,
          name: 'Moderator Ali',
          email: 'ali@company.com',
          role: 'moderator',
          status: 'active',
          lastLogin: new Date(Date.now() - 24 * 60 * 60 * 1000)
        },
        {
          id: 3,
          name: 'John Smith',
          email: 'john@company.com',
          role: 'user',
          status: 'inactive'
        }
      ]
      
      console.log('Admin users fetched:', adminUsers.value.length)
    } catch (err) {
      error.value = 'Admin foydalanuvchilarni yuklashda xatolik'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function fetchStats() {
    loading.value = true
    error.value = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      
      stats.value = {
        totalUsers: 1250,
        activeUsers: 890,
        totalOrders: 3450,
        revenue: 125000
      }
      
      console.log('Admin stats fetched:', stats.value)
    } catch (err) {
      error.value = 'Statistikalarni yuklashda xatolik'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  function setCurrentAdmin(admin: AdminUser) {
    currentAdmin.value = admin
    console.log('Current admin set:', admin.name)
  }

  function logout() {
    currentAdmin.value = null
    notifications.value = []
    console.log('Admin logged out')
  }

  function addUser(user: Omit<AdminUser, 'id'>) {
    const newUser: AdminUser = {
      ...user,
      id: Math.max(...adminUsers.value.map(u => u.id), 0) + 1
    }
    adminUsers.value.push(newUser)
    addNotification(`Yangi foydalanuvchi qo'shildi: ${newUser.name}`)
    console.log('User added:', newUser)
  }

  function updateUserStatus(userId: number, status: 'active' | 'inactive') {
    const user = adminUsers.value.find(u => u.id === userId)
    if (user) {
      user.status = status
      addNotification(`${user.name} holati ${status} ga o'zgartirildi`)
      console.log('User status updated:', user)
    }
  }

  function updateUserRole(userId: number, role: 'admin' | 'moderator' | 'user') {
    const user = adminUsers.value.find(u => u.id === userId)
    if (user) {
      user.role = role
      addNotification(`${user.name} roli ${role} ga o'zgartirildi`)
      console.log('User role updated:', user)
    }
  }

  function removeUser(userId: number) {
    const index = adminUsers.value.findIndex(user => user.id === userId)
    if (index > -1) {
      const removedUser = adminUsers.value.splice(index, 1)[0]
      addNotification(`${removedUser.name} o'chirildi`)
      console.log('User removed:', removedUser)
    }
  }

  function addNotification(message: string) {
    notifications.value.unshift(message)
    // Avtomatik o'chirish (5 sekund)
    setTimeout(() => {
      removeNotification(message)
    }, 5000)
  }

  function removeNotification(message: string) {
    const index = notifications.value.indexOf(message)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  function clearAllNotifications() {
    notifications.value = []
  }

  return {
    // State
    adminUsers,
    currentAdmin,
    stats,
    loading,
    error,
    notifications,
    // Getters
    totalAdminUsers,
    activeAdminUsers,
    adminsByRole,
    isLoggedIn,
    hasNotifications,
    // Actions
    fetchAdminUsers,
    fetchStats,
    setCurrentAdmin,
    logout,
    addUser,
    updateUserStatus,
    updateUserRole,
    removeUser,
    addNotification,
    removeNotification,
    clearAllNotifications
  }
})

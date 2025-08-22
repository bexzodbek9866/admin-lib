<template>
  <div class="admin-settings q-pa-md">
    <div class="row q-gutter-md">
      <div class="col-12">
        <h3 class="q-mb-md">Admin Sozlamalar</h3>
      </div>

      <!-- Current Admin Info -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Joriy Admin Ma'lumotlari</div>
            
            <div v-if="isLoggedIn" class="q-gutter-md">
              <div>
                <strong>Ism:</strong> {{ currentAdmin?.name }}
              </div>
              <div>
                <strong>Email:</strong> {{ currentAdmin?.email }}
              </div>
              <div>
                <strong>Rol:</strong> 
                <q-chip 
                  :color="getRoleColor(currentAdmin?.role)" 
                  text-color="white"
                >
                  {{ currentAdmin?.role }}
                </q-chip>
              </div>
              <div>
                <strong>Holat:</strong>
                <q-chip 
                  :color="currentAdmin?.status === 'active' ? 'positive' : 'negative'"
                  text-color="white"
                >
                  {{ currentAdmin?.status === 'active' ? 'Faol' : 'Faol emas' }}
                </q-chip>
              </div>
              
              <div class="q-mt-md">
                <q-btn 
                  color="negative" 
                  label="Chiqish"
                  @click="logout"
                />
              </div>
            </div>
            
            <div v-else class="text-center">
              <div class="q-mb-md">Tizimga kirilmagan</div>
              <q-btn 
                color="primary" 
                label="Admin sifatida kirish"
                @click="loginAsAdmin"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Add New User Form -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Yangi Foydalanuvchi Qo'shish</div>
            
            <q-form @submit="handleAddUser" class="q-gutter-md">
              <q-input
                v-model="newUser.name"
                label="Ism"
                required
                :rules="[val => val && val.length > 0 || 'Ism majburiy']"
              />
              
              <q-input
                v-model="newUser.email"
                label="Email"
                type="email"
                required
                :rules="[
                  val => val && val.length > 0 || 'Email majburiy',
                  val => val.includes('@') || 'Email formati noto\'g\'ri'
                ]"
              />
              
              <q-select
                v-model="newUser.role"
                :options="roleOptions"
                label="Rol"
                emit-value
                map-options
                required
              />
              
              <q-select
                v-model="newUser.status"
                :options="statusOptions"
                label="Holat"
                emit-value
                map-options
                required
              />
              
              <div class="q-mt-md">
                <q-btn 
                  type="submit"
                  color="primary" 
                  label="Qo'shish"
                  :disable="!canAddUser"
                />
                <q-btn 
                  type="button"
                  color="grey" 
                  label="Tozalash"
                  class="q-ml-sm"
                  @click="resetForm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <!-- System Statistics -->
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Tizim Statistikalari</div>
            
            <div class="row q-gutter-md">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="stat-item">
                  <div class="stat-value">{{ totalAdminUsers }}</div>
                  <div class="stat-label">Jami Adminlar</div>
                </div>
              </div>
              
              <div class="col-12 col-sm-6 col-md-3">
                <div class="stat-item">
                  <div class="stat-value">{{ activeAdminUsers }}</div>
                  <div class="stat-label">Faol Adminlar</div>
                </div>
              </div>
              
              <div class="col-12 col-sm-6 col-md-3">
                <div class="stat-item">
                  <div class="stat-value">{{ stats.totalUsers }}</div>
                  <div class="stat-label">Jami Foydalanuvchilar</div>
                </div>
              </div>
              
              <div class="col-12 col-sm-6 col-md-3">
                <div class="stat-item">
                  <div class="stat-value">${{ stats.revenue.toLocaleString() }}</div>
                  <div class="stat-label">Jami Daromad</div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- System Actions -->
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Tizim Amalları</div>
            
            <div class="q-gutter-sm">
              <q-btn 
                color="primary" 
                label="Ma'lumotlarni yangilash"
                @click="refreshAllData"
                :loading="loading"
              />
              <q-btn 
                color="warning" 
                label="Test bildirishnoma"
                @click="addTestNotification"
              />
              <q-btn 
                v-if="hasNotifications"
                color="negative" 
                label="Barcha bildirishnomalarni tozalash"
                @click="clearAllNotifications"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAdminStore } from '../stores'

const adminStore = useAdminStore()

// Reactive properties
const { 
  currentAdmin, 
  stats,
  loading,
  notifications,
  totalAdminUsers,
  activeAdminUsers,
  isLoggedIn,
  hasNotifications,
  adminUsers
} = storeToRefs(adminStore)

// Actions
const { 
  setCurrentAdmin,
  logout,
  addUser,
  fetchAdminUsers,
  fetchStats,
  addNotification,
  clearAllNotifications
} = adminStore

// Form data
const newUser = ref({
  name: '',
  email: '',
  role: 'user' as 'admin' | 'moderator' | 'user',
  status: 'active' as 'active' | 'inactive'
})

// Options
const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Moderator', value: 'moderator' },
  { label: 'User', value: 'user' }
]

const statusOptions = [
  { label: 'Faol', value: 'active' },
  { label: 'Faol emas', value: 'inactive' }
]

// Computed
const canAddUser = computed(() => {
  return newUser.value.name.trim() && 
         newUser.value.email.trim() && 
         newUser.value.email.includes('@')
})

// Methods
function getRoleColor(role?: string) {
  switch (role) {
    case 'admin': return 'red'
    case 'moderator': return 'orange'
    case 'user': return 'blue'
    default: return 'grey'
  }
}

function loginAsAdmin() {
  // Demo admin yaratish
  const demoAdmin = {
    id: 999,
    name: 'Demo Admin',
    email: 'demo@admin.com',
    role: 'admin' as const,
    status: 'active' as const,
    lastLogin: new Date()
  }
  setCurrentAdmin(demoAdmin)
  addNotification('Demo admin sifatida tizimga kirildi')
}

function handleAddUser() {
  if (canAddUser.value) {
    addUser({
      name: newUser.value.name,
      email: newUser.value.email,
      role: newUser.value.role,
      status: newUser.value.status
    })
    resetForm()
  }
}

function resetForm() {
  newUser.value = {
    name: '',
    email: '',
    role: 'user',
    status: 'active'
  }
}

function refreshAllData() {
  fetchStats()
  fetchAdminUsers()
  addNotification('Barcha ma\'lumotlar yangilandi')
}

function addTestNotification() {
  addNotification('Bu test bildirishnomasi - ' + new Date().toLocaleTimeString())
}
</script>

<style scoped>
.admin-settings {
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f5f5f5;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #1976d2;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
  margin-top: 4px;
}
</style>
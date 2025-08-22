<template>
  <div class="admin-home q-pa-md">
    <div class="row q-gutter-md">
      <div class="col-12">
        <h3 class="q-mb-md">Admin Boshqaruv Paneli</h3>
        <p class="text-caption q-mb-md">Bugungi sana: {{ currentDate }}</p>
        
        <!-- Notifications -->
        <div v-if="hasNotifications" class="q-mb-md">
          <q-banner 
            v-for="notification in notifications" 
            :key="notification"
            class="bg-positive text-white q-mb-sm"
          >
            {{ notification }}
            <template v-slot:action>
              <q-btn 
                flat 
                round 
                icon="close" 
                @click="removeNotification(notification)"
              />
            </template>
          </q-banner>
        </div>
      </div>

      <!-- Statistics Cards -->
      <div class="col-12">
        <div class="row q-gutter-md">
          <div class="col-md-3 col-sm-6 col-12">
            <q-card class="bg-primary text-white">
              <q-card-section>
                <div class="text-h6">Jami Foydalanuvchilar</div>
                <div class="text-h3">{{ stats.totalUsers }}</div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-md-3 col-sm-6 col-12">
            <q-card class="bg-positive text-white">
              <q-card-section>
                <div class="text-h6">Faol Foydalanuvchilar</div>
                <div class="text-h3">{{ stats.activeUsers }}</div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-md-3 col-sm-6 col-12">
            <q-card class="bg-info text-white">
              <q-card-section>
                <div class="text-h6">Jami Buyurtmalar</div>
                <div class="text-h3">{{ stats.totalOrders }}</div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-md-3 col-sm-6 col-12">
            <q-card class="bg-orange text-white">
              <q-card-section>
                <div class="text-h6">Daromad</div>
                <div class="text-h3">${{ stats.revenue.toLocaleString() }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- Control Buttons -->
      <div class="col-12">
        <div class="q-gutter-sm">
          <q-btn 
            color="primary" 
            label="Statistikalarni yangilash"
            @click="fetchStats"
            :loading="loading"
          />
          <q-btn 
            color="secondary" 
            label="Foydalanuvchilarni yuklash"
            @click="fetchAdminUsers"
            :loading="loading"
          />
          <q-btn 
            v-if="hasNotifications"
            color="negative" 
            label="Bildirishnomalarni tozalash"
            @click="clearAllNotifications"
          />
        </div>
      </div>

      <!-- Admin Users Table -->
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">
              Admin Foydalanuvchilari 
              <q-chip color="primary" text-color="white">
                {{ totalAdminUsers }} ta
              </q-chip>
            </div>
            
            <div v-if="error" class="text-negative q-mb-md">
              {{ error }}
            </div>

            <q-table
              :rows="adminUsers"
              :columns="columns"
              row-key="id"
              :loading="loading"
              binary-state-sort
            >
              <template v-slot:body-cell-status="props">
                <q-td :props="props">
                  <q-chip 
                    :color="props.value === 'active' ? 'positive' : 'negative'"
                    text-color="white"
                  >
                    {{ props.value === 'active' ? 'Faol' : 'Faol emas' }}
                  </q-chip>
                </q-td>
              </template>
              
              <template v-slot:body-cell-role="props">
                <q-td :props="props">
                  <q-select
                    :model-value="props.value"
                    :options="roleOptions"
                    emit-value
                    map-options
                    dense
                    @update:model-value="(val) => updateUserRole(props.row.id, val)"
                  />
                </q-td>
              </template>
              
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn
                      size="sm"
                      :color="props.row.status === 'active' ? 'negative' : 'positive'"
                      :label="props.row.status === 'active' ? 'Faolsizlashtirish' : 'Faollashtirish'"
                      @click="updateUserStatus(props.row.id, props.row.status === 'active' ? 'inactive' : 'active')"
                    />
                    <q-btn
                      size="sm"
                      color="negative"
                      label="O'chirish"
                      @click="removeUser(props.row.id)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>

      <!-- Role Statistics -->
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Rollar bo'yicha statistika</div>
            <div class="row q-gutter-md">
              <div class="col">
                <q-chip color="red" text-color="white" size="lg">
                  Admin: {{ adminsByRole.admin }}
                </q-chip>
              </div>
              <div class="col">
                <q-chip color="orange" text-color="white" size="lg">
                  Moderator: {{ adminsByRole.moderator }}
                </q-chip>
              </div>
              <div class="col">
                <q-chip color="blue" text-color="white" size="lg">
                  User: {{ adminsByRole.user }}
                </q-chip>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAdminStore } from '../stores'

const adminStore = useAdminStore()

// Computed properties
const currentDate = computed(() => {
  return new Date().toLocaleDateString('uz-UZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Reactive properties
const { 
  adminUsers, 
  stats, 
  loading, 
  error, 
  notifications,
  totalAdminUsers,
  activeAdminUsers,
  adminsByRole,
  hasNotifications
} = storeToRefs(adminStore)

// Actions
const { 
  fetchAdminUsers, 
  fetchStats, 
  updateUserStatus,
  updateUserRole,
  removeUser,
  removeNotification,
  clearAllNotifications
} = adminStore

// Table columns
const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true
  },
  {
    name: 'name',
    label: 'Ism',
    field: 'name',
    align: 'left',
    sortable: true
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left',
    sortable: true
  },
  {
    name: 'role',
    label: 'Rol',
    field: 'role',
    align: 'center'
  },
  {
    name: 'status',
    label: 'Holat',
    field: 'status',
    align: 'center'
  },
  {
    name: 'actions',
    label: 'Amallar',
    field: 'actions',
    align: 'center'
  }
]

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Moderator', value: 'moderator' },
  { label: 'User', value: 'user' }
]

// Sahifa yuklanganda ma'lumotlarni yuklash
onMounted(() => {
  fetchStats()
  fetchAdminUsers()
})
</script>

<style scoped>
.admin-home {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
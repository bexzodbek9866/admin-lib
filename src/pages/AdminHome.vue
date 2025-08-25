<template>
  <div class="admin-home">
    <div class="welcome-section">
      <h1>Admin Panelga Xush Kelibsiz!</h1>
      <p>Bu yerda siz tizimni to'liq boshqarishingiz mumkin</p>
    </div>

    <div class="dashboard-cards">
      <BaseCard
        title="Umumiy Foydalanuvchilar"
        subtitle="Ro'yxatdan o'tgan foydalanuvchilar"
        class="stats-card"
      >
        <div class="card-number">
          {{ stats.totalUsers }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Faol Sessiyalar"
        subtitle="Hozirda faol sessiyalar"
        class="stats-card"
      >
        <div class="card-number">
          {{ stats.activeSessions }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Jami Buyurtmalar"
        subtitle="Barcha buyurtmalar soni"
        class="stats-card"
      >
        <div class="card-number">
          {{ stats.totalOrders }}
        </div>
      </BaseCard>
      
      <BaseCard
        title="Daromad"
        subtitle="Jami daromad miqdori"
        class="stats-card"
      >
        <div class="card-number">
          ${{ stats.totalRevenue }}
        </div>
      </BaseCard>
    </div>

    <BaseCard
      title="So'nggi Tizim Faoliyati"
      class="recent-activity-card"
    >
      <div class="activity-list">
        <div
          v-for="activity in recentActivities"
          :key="activity.id"
          class="activity-item"
        >
          <div class="activity-icon">
            ⚡
          </div>
          <div class="activity-content">
            <h4>{{ activity.title }}</h4>
            <p>{{ activity.description }}</p>
            <small>{{ formatDate(activity.date) }}</small>
          </div>
        </div>
      </div>
    </BaseCard>

    <div class="quick-actions">
      <h2>Tezkor Boshqaruv</h2>
      <div class="actions-grid">
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="primary"
              label="Foydalanuvchilarni Ko'rish"
              @click="router.push('/admin/users')"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              👥
            </div>
            <h3>Foydalanuvchilar</h3>
            <p>Foydalanuvchilarni boshqarish</p>
          </div>
        </BaseCard>
        
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="secondary"
              label="Sozlamalarni Ochish"
              @click="router.push('/admin/settings')"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              ⚙️
            </div>
            <h3>Sozlamalar</h3>
            <p>Tizim sozlamalarini o'zgartirish</p>
          </div>
        </BaseCard>
        
        <BaseCard class="action-card-wrapper">
          <template #actions>
            <BaseButton
              class="full-width"
              color="accent"
              label="Hisobotlarni Ko'rish"
              @click="showReports"
            />
          </template>
          <div class="action-content">
            <div class="action-icon">
              📊
            </div>
            <h3>Hisobotlar</h3>
            <p>Statistika va hisobotlar</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseCard, BaseButton } from '@apps/shared'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock data for demonstration
const stats = ref({
  totalUsers: 1250,
  activeSessions: 89,
  totalOrders: 3456,
  totalRevenue: 125000
})

const recentActivities = ref([
  {
    id: 1,
    title: 'Yangi foydalanuvchi qo\'shildi',
    description: 'Ahmad Karimov tizimga ro\'yxatdan o\'tdi',
    date: new Date()
  },
  {
    id: 2,
    title: 'Buyurtma yaratildi',
    description: 'Yangi buyurtma #1234 yaratildi',
    date: new Date()
  }
])

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const showReports = () => {
  alert('Hisobotlar sahifasi hali tayyorlanmoqda!')
}
</script>

<style scoped>
.admin-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #6b7280;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stats-card {
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #dc2626;
  margin: 1rem 0;
}

.recent-activity-card {
  margin-bottom: 3rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.activity-item:hover {
  background: #f3f4f6;
}

.activity-icon {
  font-size: 1.5rem;
  padding: 0.5rem;
  background: #dc2626;
  border-radius: 50%;
  color: white;
  min-width: 3rem;
  text-align: center;
}

.activity-content h4 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.activity-content p {
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.activity-content small {
  color: #9ca3af;
  font-size: 0.8rem;
}

.quick-actions {
  margin-bottom: 2rem;
}

.quick-actions h2 {
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.action-card-wrapper {
  transition: transform 0.3s, box-shadow 0.3s;
}

.action-card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.action-content {
  text-align: center;
  padding: 1rem 0;
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.action-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #1f2937;
}

.action-content p {
  color: #6b7280;
  font-size: 0.9rem;
}

.full-width {
  width: 100%;
}
</style>
<template>
  <div class="admin-home">
    <div class="welcome-section">
      <h1>Admin Panelga Xush Kelibsiz!</h1>
      <p>Bu yerda siz tizimni to'liq boshqarishingiz mumkin</p>
    </div>

    <div class="dashboard-cards">
      <div class="card">
        <h3>Umumiy Foydalanuvchilar</h3>
        <div class="card-number">
          {{ stats.totalUsers }}
        </div>
        <p>Ro'yxatdan o'tgan foydalanuvchilar</p>
      </div>
      
      <div class="card">
        <h3>Faol Sessiyalar</h3>
        <div class="card-number">
          {{ stats.activeSessions }}
        </div>
        <p>Hozirda faol sessiyalar</p>
      </div>
      
      <div class="card">
        <h3>Jami Buyurtmalar</h3>
        <div class="card-number">
          {{ stats.totalOrders }}
        </div>
        <p>Barcha buyurtmalar soni</p>
      </div>
      
      <div class="card">
        <h3>Daromad</h3>
        <div class="card-number">
          ${{ stats.totalRevenue }}
        </div>
        <p>Jami daromad miqdori</p>
      </div>
    </div>

    <div class="recent-activity">
      <h2>So'nggi Tizim Faoliyati</h2>
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
    </div>

    <div class="quick-actions">
      <h2>Tezkor Boshqaruv</h2>
      <div class="actions-grid">
        <router-link
          to="/admin/users"
          class="action-card"
        >
          <div class="action-icon">
            👥
          </div>
          <h3>Foydalanuvchilar</h3>
          <p>Foydalanuvchilarni boshqarish</p>
        </router-link>
        
        <router-link
          to="/admin/settings"
          class="action-card"
        >
          <div class="action-icon">
            ⚙️
          </div>
          <h3>Sozlamalar</h3>
          <p>Tizim sozlamalarini o'zgartirish</p>
        </router-link>
        
        <div class="action-card">
          <div class="action-icon">
            📊
          </div>
          <h3>Hisobotlar</h3>
          <p>Statistika va hisobotlar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAdminStore } from '../stores'

const adminStore = useAdminStore()

onMounted(() => {
  adminStore.fetchStats()
  adminStore.fetchRecentActivities()
})

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// Store dan kerakli ma'lumotlarni olish
const { stats, recentActivities } = adminStore
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

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.card-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.card p {
  color: #6b7280;
  font-size: 0.9rem;
}

.recent-activity {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.recent-activity h2 {
  color: #1f2937;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
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

.action-card {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.action-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.action-card p {
  opacity: 0.9;
  font-size: 0.9rem;
}
</style>
<template>
  <div class="home-page">
    <!-- Main Section -->
    <main>
      <div class="welcome-message">
        <h1>Welcome to Your Financial Dashboard</h1>
        <p>Track, Save, and Achieve Your Financial Goals</p>
      </div>

      <div class="quick-stats">
        <StatsCard title="Total Income" :value="totalIncome" />
        <StatsCard title="Total Expenses" :value="totalExpense" />
        <div class="progress-card">
          <h3>Savings Progress</h3>
          <ProgressBar :progress="70" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StatsCard from "@/components/StatsCard.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import { useTransactionStore } from "@/stores/transaction";

export default {
  components: {
    StatsCard,
    ProgressBar,
  },
  setup() {
    const transactionStore = useTransactionStore()
    transactionStore.fetchTransactions()   
    return {
      ...transactionStore,
    }
  },
};
</script>

<style scoped>
/* General Page Styling */
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Main Section Styling */
main {
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
}
.welcome-message {
  text-align: center;
  margin-bottom: 2rem;
}
.quick-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.progress-card {
  text-align: center;
}
</style>

<template>
  <div class="home-page">
    <!-- Header Section -->
    <header>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/tracker">Tracker</router-link></li>
          <li><router-link to="/savings-goals">Savings Goals</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main Section -->
    <main>
      <div class="welcome-message">
        <h1>Welcome to Your Financial Dashboard</h1>
        <p>Track, Save, and Achieve Your Financial Goals</p>
      </div>

      <div class="quick-stats">
        <StatsCard title="Total Income" value="$5,000" />
        <StatsCard title="Total Expenses" value="$2,000" />
        <div class="progress-card">
          <h3>Savings Progress</h3>
          <ProgressBar :progress="70" />
        </div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer>
      <p>Contact us: support@financeapp.com</p>
      <p>&copy; 2024 FinanceApp</p>
    </footer>
  </div>
</template>

<script>
import StatsCard from "@/components/StatsCard.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "HomeView",
  components: {
    StatsCard,
    ProgressBar,
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

/* Header Styling */
header {
  background-color: #004080;
  color: white;
  padding: 1rem;
}
.navbar ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
.navbar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
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

/* Footer Styling */
footer {
  background-color: #f1f1f1;
  color: #333;
  text-align: center;
  padding: 1rem;
}
</style>

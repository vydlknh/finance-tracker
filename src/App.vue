<template>
  <div class="app">
    <div class="login" v-if="!isLoggedIn">
      <LoginForm v-if="showLogin" @loggedIn="isLoggedIn = true" />
      <SignupForm v-else @loggedIn="isLoggedIn = true" />
      <button @click="toggleForm">
        {{ showLogin ? "Create an Account" : "Already have an account? Log In" }}
      </button>
    </div>
    <div v-else>
      <header>
        <nav class="navbar">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tracker">Tracker</router-link></li>
            <li><router-link to="/savings-goals">Savings Goals</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
            <li style="cursor: pointer;" @click="logout"><b>Log Out</b></li>
          </ul>
        </nav>
      </header>
      <RouterView />
      <footer>
        <p>Contact us: support@financeapp.com</p>
        <p>&copy; 2024 FinanceApp</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useTransactionStore } from "@/stores/transaction";
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
import { auth } from "./firebase/init";

export default {
  RouterLink,
  RouterView,
  components: {
    LoginForm,
    SignupForm
  },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
    }
  },
  methods: {
    toggleForm() {
      this.showLogin = !this.showLogin
    },
    logout() {
      auth.signOut()
        .then(() => {
          this.isLoggedIn = false;
          this.displayName = ""
        })
    },
  },
  setup() {
    const transactionStore = useTransactionStore()
    transactionStore.fetchTransactions()   
    return {
      ...transactionStore,
    }
  }
};
</script>

<style>
header {
  background-color: #004080;
  color: white;
  padding: 1rem;
}
.navbar ul {
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
.navbar li {
  float: left;
  padding: 0 7px;
}
footer {
  background-color: #f1f1f1;
  color: #333;
  text-align: center;
  padding: 1rem;
}
button {
  background-color: #004080;
}
</style>

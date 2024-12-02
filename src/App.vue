<template>
  <div class="app">
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
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  RouterLink,
  RouterView
}
</script>

<style>
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
.navbar li {
  padding: 0 7px
}
</style>
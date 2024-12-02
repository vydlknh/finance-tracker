<template>
  <div class="app">
    <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/tracker">Tracker</RouterLink>
          <RouterLink to="/savings">Savings</RouterLink>
          <RouterLink to="/goals">Goals</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
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
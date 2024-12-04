<template>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/Tracker">Tracker</a></li>
        <li><a href="/SavingsView">Savings</a></li>
        <li><a href="/">Settings</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  .navbar ul li a {
    color: white;
    text-decoration: none;
  }
  </style>
  
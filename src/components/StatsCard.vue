<template>
    <div class="stats-card">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatsCard",
    props: {
      title: { type: String, required: true },
      value: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .stats-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    width: 200px;
  }
  </style>
  
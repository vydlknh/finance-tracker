<template>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgressBar",
    props: {
      progress: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container for the progress bar */
  .progress-bar-container {
    width: 100%;
    max-width: 300px;
    height: 20px;
    background-color: #e0e0e0; /* Light gray background */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  /* Dynamic progress bar */
  .progress-bar {
    height: 100%;
    background-color: #76c7c0; /* Teal color */
    border-radius: 10px 0 0 10px; /* Rounded left corner */
    transition: width 0.4s ease-in-out; /* Smooth transition for width changes */
  }
  </style>
  
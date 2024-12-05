<template>
    <form @submit.prevent="submitGoal">
      <input
        v-model="name"
        type="text"
        placeholder="Goal Name"
        required
      />
      <input
        v-model.number="targetAmount"
        type="number"
        placeholder="Target Amount ($)"
        required
      />
      <input
        v-model.number="savedAmount"
        type="number"
        placeholder="Saved Amount ($)"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  </template>
  
  <script>
  export default {
    emits: ["submit"],
    data() {
      return {
        name: "",
        targetAmount: 0,
        savedAmount: 0,
      };
    },
    methods: {
      submitGoal() {
        // Emit a new goal object to the parent
        this.$emit("submit", {
          name: this.name,
          targetAmount: this.targetAmount,
          savedAmount: this.savedAmount,
        });
  
        // Reset form fields
        this.name = "";
        this.targetAmount = 0;
        this.savedAmount = 0;
      },
    },
  };
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
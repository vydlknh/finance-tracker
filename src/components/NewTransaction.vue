<template>
  <form @submit.prevent="submitTransaction">
    <label for="type">Type: 
      <select v-model="transaction.type" required>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </label>
    <label for="description">Description: 
      <input type="text" v-model="transaction.description" placeholder="Enter description" required>
    </label>
    <label for="amount">Amount: 
      <input type="number" v-model="transaction.amount" placeholder="Enter amount" required>
    </label>
    <button type="submit">Add transaction</button>
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      transaction: {
        type: "",
        description: "",
        amount: null,
      }
    }
  },
  methods: {
    async submitTransaction() {
      if(!this.newTransaction.description || !this.newTransaction.amount) {
        alert("Please fill in all fields")
        return;
      }
      const transaction = {
        ...this.transaction,
        amount: parseFloat(this.transaction.amount),
        date: new Date().toLocaleDateString()
      }
      this.onSubmit(transaction)
      this.resetForm()
    },
    resetForm() {
      this.transaction = {
        type: "",
        description: "",
        amount: null,
      }
    }
  }
}
</script>
<style>
button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #004080;
  color: white;
  border-color: #004080;
  border-style: none;
  cursor: pointer;
} 
input {
  margin: 0 5px
}
label {
  margin: 0 5px
}
</style>
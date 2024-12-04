<template>
  <form @submit.prevent="submitTransaction">
    <label for="type"
      >Type:
      <select v-model="transaction.type" required>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </label>
    <label for="description"
      >Description:
      <input
        type="text"
        v-model="transaction.description"
        placeholder="Enter description"
        required
      />
    </label>
    <label for="date"
      >Date:
      <input type="date" v-model="transaction.date" required />
    </label>
    <label for="amount"
      >Amount:
      <input
        type="number"
        v-model="transaction.amount"
        placeholder="Enter amount"
        step="0.01"
        @blur="formatAmount"
        required
      />
    </label>
    <button id="submit" type="submit">Add transaction</button>
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      transaction: {
        type: "",
        description: "",
        amount: null,
        date: null,
      },
    };
  },
  methods: {
    async submitTransaction() {
      if (
        !this.transaction.description ||
        !this.transaction.amount ||
        !this.transaction.date
      ) {
        alert("Please fill in all fields!");
        return;
      }
      const transaction = {
        ...this.transaction,
        amount: parseFloat(this.transaction.amount).toFixed(2),
        date: new Date(this.transaction.date),
      };
      transaction.amount = parseFloat(transaction.amount);
      this.onSubmit(transaction);
      this.resetForm();
    },
    resetForm() {
      this.transaction = {
        type: "",
        description: "",
        amount: null,
      };
    },
    formatAmount() {
      if (this.transaction.amount != null) {
        this.transaction.amount = parseFloat(this.transaction.amount).toFixed(
          2
        );
      }
    },
  },
};
</script>
<style>
#delete {
  background-color: #bc3947;
}
button {
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border-style: none;
}
#submit {
  background-color: #004080;
  border-color: #004080;
}
input {
  margin: 0 5px;
}
label {
  margin: 0 5px;
}
</style>

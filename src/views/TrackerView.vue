<template>
  <div class="tracker">
    <main>
      <div class="title">
        <h1>Tracker</h1>
        <NewTransaction :onSubmit="addTransaction" />
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in sortedTransactions" :key="t.id">
              <td>{{ t.type }}</td>
              <td>{{ formatDate(t.date) }}</td>
              <td>{{ t.description }}</td>
              <td>${{ t.amount }}</td>
              <td>
                <button id="delete" @click="deleteTransaction(t.id)">
                  <b>X</b>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import { useTransactionStore } from "@/stores/transaction";
import NewTransaction from "@/components/NewTransaction.vue";

export default {
  components: {
    NewTransaction,
  },
  setup() {
    const transactionStore = useTransactionStore()
    transactionStore.fetchTransactions()
    return {
      ...transactionStore,
      formatDate(timestamp) {
        if (!timestamp) return "";
        const date = timestamp.toDate();
        return date.toLocaleDateString();
      },
    }
  },
};
</script>

<style>
.tracker {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
main {
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>

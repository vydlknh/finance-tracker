<template>
  <div class="tracker">
    <main>
      <div class="title">
        <h1>Tracker</h1>
        <NewTransaction :onSubmit="addTransaction"/>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in transactions" :key="t.id">
              <td>{{ t.type }}</td>
              <td>{{ t.date }}</td>
              <td>{{ t.description }}</td>
              <td>{{ t.amount }}</td>
              <td>
                <button @click="deleteTransaction(t.id)"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import db from '../firebase/init'
import { doc, addDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import NewTransaction from '@/components/NewTransaction.vue';

export default {
  components: {
    NewTransaction
  },
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    async fetchTransactions() {
      try {
        this.transactions = []
        const querySnap = await getDocs(collection(db, 'transactions'))
        querySnap.forEach((doc) => {
          this.transactions.push({id: doc.id, ...doc.data()})
        })
      }
      catch (error) {
        console.error("Error fetching transaction", error)
      }
    },
    async addTransaction(transaction) {
      try {
        await addDoc(collection(db, 'transactions'), transaction)
        this.fetchTransactions()
      }
      catch(error) {
        console.error("Error adding transaction", error)
      }
    },
    async deleteTransaction(id) {
      try {
        await deleteDoc(doc(db, 'transactions'), id)
        this.fetchTransactions()
      }
      catch (error) {
        console.error("Error deleting transaction", error)
      }
    }
  },
  created() {
    this.fetchTransactions()
  }
}
</script>

<style>
.tracker {
  display: flex;
  flex-direction: col umn;
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
  margin-top: 10px;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
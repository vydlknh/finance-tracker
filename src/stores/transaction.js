import { defineStore } from "pinia"
import db from "../firebase/init";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  Timestamp
} from "firebase/firestore";

export const useTransactionStore = defineStore('transaction', {
  state: () => ({ 
    transactions: [], 
  }),
  getters: {
    sortedTransactions(state) {
      return state.transactions.sort((a, b) => {
        const dateA = a.date instanceof Timestamp ? a.date.toDate() : a.date;
        const dateB = b.date instanceof Timestamp ? b.date.toDate() : b.date;
        return dateB - dateA;
      });
    },
    totalIncome(state) {
      return state.transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((sum, transaction) => sum + transaction.amount, 0)
        .toFixed(2);
    },
    totalExpense(state) {
      return state.transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((sum, transaction) => sum + transaction.amount, 0)
        .toFixed(2);
    },
  },
  actions: {
    async fetchTransactions() {
      try {
        if (this.transactions.length > 0) return;
        const querySnap = await getDocs(collection(db, "transactions"));
        const data = [];
        querySnap.forEach((doc) => {
          const transaction = doc.data();
          transaction.amount = transaction.amount;
          data.push({ id: doc.id, ...transaction });
        });
        this.transactions = data;
      } catch (error) {
        console.error("Error fetching transaction", error);
      }
    },
    async addTransaction(transaction) {
      try {
        const transactionTimed = {
          ...transaction,
          date: Timestamp.fromDate(transaction.date),
          amount: parseFloat(transaction.amount)
        };
        const docRef = await addDoc(collection(db, "transactions"), transactionTimed);
        this.transactions.unshift({ id: docRef.id, ...transactionTimed });  
      } catch (error) {
        console.error("Error adding transaction", error);
      }
    },
    async deleteTransaction(id) {
      try {
        const docRef = await deleteDoc(doc(db, "transactions", id));
        this.transactions.unshift({ id: docRef.id, ...transactionTimed });  
      } catch (error) {
        console.error("Error deleting transaction", error);
      }
    },
  }
})
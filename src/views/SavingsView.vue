<template>
  <div class="savings">
    <main>
      <div class="title">
        <h1>Savings Goals</h1>
        <NewGoal @submit="addGoal" />
      </div>
      <div class="goal-list">
        <div v-for="goal in goals" :key="goal.id" class="goal-item">
          <h3>{{ goal.name }}</h3>
          <ProgressBar
            :target="goal.targetAmount"
            :current="goal.savedAmount"
          />
          <p>Saved: ${{ goal.savedAmount }} / ${{ goal.targetAmount }}</p>
          <button @click="deleteGoal(goal.id)">Delete Goal</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive } from "vue";
import NewGoal from "@/components/NewGoal.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  components: {
    NewGoal,
    ProgressBar,
  },
  setup() {
    // Local reactive state
    const goals = reactive([
      { id: 1, name: "Spring Break", targetAmount: 500, savedAmount: 150 },
      { id: 2, name: "New Laptop", targetAmount: 1200, savedAmount: 400 },
    ]);

    // Add a new goal
    const addGoal = (goal) => {
      goal.id = goals.length + 1; // Simulate unique ID
      goals.push(goal);
    };

    // Delete a goal
    const deleteGoal = (id) => {
      const index = goals.findIndex((goal) => goal.id === id);
      if (index !== -1) goals.splice(index, 1);
    };

    return {
      goals,
      addGoal,
      deleteGoal,
    };
  },
};
</script>

<style>
.savings {
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
.goal-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.goal-item {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
}
button {
  margin-top: 0.5rem;
  padding: 5px 10px;
  cursor: pointer;
}
</style>

<template>
  <div class="profile-view">
    <main>
      <div class="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your personal information and settings</p>
      </div>

      <div class="profile-content">
       
        <form @submit.prevent="saveChanges">
  
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="profileFields.name"
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

     
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="profileFields.email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>


          <div class="form-group">
            <label for="currency">Preferred Currency</label>
            <select v-model="profileFields.currency" id="currency" required>
              <option v-for="option in profileFields.currencyOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>

        ->
          <button type="submit" :disabled="isSaving">
            {{ isSaving ? 'Saving...' : 'Save Changes' }}
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useProfileStore } from "@/stores/profile"; 
import { getAuth } from "firebase/auth"; 

export default {
  setup() {
    const profileStore = useProfileStore();
    const userId = ref(null); 

    const auth = getAuth();
    onMounted(() => {
      const user = auth.currentUser;
      if (user) {
        userId.value = user.uid; 
        profileStore.fetchProfile(userId.value);
      } else {
        console.error("No authenticated user found.");
      }
    });


    const saveChanges = async () => {
      if (userId.value) {
        profileStore.saveProfile(userId.value);
      } else {
        console.error("User ID is missing.");
      }
    };

    return {
      profileFields: profileStore.profileFields,
      isSaving: profileStore.isSaving,
      saveChanges,
    };
  },
};
</script>

<style scoped>

.form-group {
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}
</style>

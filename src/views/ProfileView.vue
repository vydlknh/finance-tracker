<template>
  <div class="profile-view">
    <main>
      <div class="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your personal information and settings</p>
      </div>

      <div class="profile-content">
        <div class="profile-picture">
          <img :src="profilePicture" alt="Profile Picture" />
          <input type="file" @change="onProfilePictureChange" />
        </div>

        <Form
          :fields="profileFields"
          @save="onSaveChanges"
          :loading="isSaving"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Form from "@/views/Form.vue";
import { ref, reactive } from "vue";

export default {
  components: {
    Form,
  },
  setup() {
    // Replace these with Firebase data fetches
    const profilePicture = ref("/default-avatar.png"); // Placeholder image
    const isSaving = ref(false);

    const profileFields = reactive([
      { label: "Name", value: "First Last", key: "name", type: "text" }, // Replace with user data from Firebase
      { label: "Email", value: "FirstLast@example.com", key: "email", type: "email", readonly: true }, // Replace with Firebase data
      { label: "Preferred Currency", value: "USD", key: "currency", type: "text" }, // Replace with Firebase data
    ]);

    const onProfilePictureChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          profilePicture.value = reader.result; // Show preview of the selected image
          // TODO: Implement Firebase storage upload
        };
        reader.readAsDataURL(file);
      }
    };

    const onSaveChanges = (formValues) => {
      isSaving.value = true;
      console.log("Saving profile changes:", formValues); // Debugging: Log changes
      // TODO: Update user profile in Firebase
      setTimeout(() => {
        isSaving.value = false; // Simulate save completion
      }, 1000);
    };

    return {
      profilePicture,
      profileFields,
      isSaving,
      onProfilePictureChange,
      onSaveChanges,
    };
  },
};
</script>

<style scoped>
/* General Page Styling */
.profile-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Main Section Styling */
main {
  flex: 1;
  padding: 2rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>

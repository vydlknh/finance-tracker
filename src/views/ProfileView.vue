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
    const profilePicture = ref("/default-avatar.png"); // Placeholder for profile picture
    const isSaving = ref(false);

    const profileFields = reactive([
  { label: "Name", value: "John Doe", key: "name", type: "text" },
  { label: "Email", value: "john.doe@example.com", key: "email", type: "email" }, 
  {
    label: "Preferred Currency",
    value: "USD",
    key: "currency",
    type: "select",
    options: ["USD", "EUR", "GBP", "JPY"], 
  },
]);


    const onSaveChanges = async (formValues) => {
      isSaving.value = true;

      console.log("Saving profile changes:", formValues); // Debugging: Log submitted data
      
      try {
        // Simulate a delay for saving (replace with Firebase or API logic)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Profile updated successfully!");
      } catch (error) {
        console.error("Failed to save profile changes:", error);
      } finally {
        isSaving.value = false;
      }
    };

    return {
      profilePicture,
      profileFields,
      isSaving,
      onSaveChanges,
    };
  },
};
</script>
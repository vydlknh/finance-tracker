<script>
import { useProfileStore } from "@/stores/profile";
import { onMounted } from "vue";

export default {
  setup() {
    const profileStore = useProfileStore();
    const userId = "replace-with-authenticated-user-id"; // Replace with actual user ID logic


    onMounted(() => {
      profileStore.fetchProfile(userId);
    });

    return {
      profileStore,
      saveChanges: () => profileStore.saveProfile(userId),
    };
  },
};
</script>

<template>
  <div class="profile-view">
    <main>
      <div class="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your personal information and settings</p>
      </div>

      <div class="profile-content">
        <Form
          :fields="profileStore.profileFields"
          @save="saveChanges"
          :loading="profileStore.isSaving"
        />
      </div>
    </main>
  </div>
</template>

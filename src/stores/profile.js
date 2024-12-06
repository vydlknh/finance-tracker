import { defineStore } from "pinia";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const useProfileStore = defineStore("profile", {
    state: () => ({
      profileFields: {
        name: "",
        email: "",
        currency: "", 
        currencyOptions: ["USD", "EUR", "GBP", "JPY"],
      },
      isSaving: false,
    }),
  

  actions: {
    /**
     * Fetch the user's profile data from Firestore
     * @param {string} userId - The user's ID
     */
    async fetchProfile(userId) {
      const db = getFirestore();
      const profileDocRef = doc(db, "profile", userId);

      try {
        const docSnap = await getDoc(profileDocRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
     
          this.profileFields.forEach((field) => {
            if (data[field.key] !== undefined) {
              field.value = data[field.key];
            }
          });
        } else {
          console.log("No profile document found. Initializing blank profile...");
          await setDoc(profileDocRef, {});
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },

    /**
     * Save the user's profile data to Firestore
     * @param {string} userId - The user's ID
     */
    async saveProfile(userId) {
      const db = getFirestore();
      const profileDocRef = doc(db, "profile", userId);

      this.isSaving = true;

      try {
        const formValues = this.profileFields.reduce((obj, field) => {
          obj[field.key] = field.value;
          return obj;
        }, {});
        await setDoc(profileDocRef, formValues, { merge: true });
        console.log("Profile updated successfully!");
      } catch (error) {
        console.error("Error saving profile changes:", error);
      } finally {
        this.isSaving = false;
      }
    },
  },
});

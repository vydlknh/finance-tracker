<template>
  <form @submit.prevent="saveForm">
    <div v-for="field in fields" :key="field.key" class="form-group">
      <label :for="field.key">{{ field.label }}</label>
      <input
        :type="field.type"
        :id="field.key"
        :value="field.value"
        :readonly="field.readonly || false"
        @input="updateField(field.key, $event.target.value)"
      />
    </div>
    <button type="submit" :disabled="loading">Save Changes</button>
  </form>
</template>

<script>
export default {
  props: {
    fields: Array, // Array of field objects
    loading: Boolean, // Disable button during saving
  },
  emits: ["save"], // Emit save event with data
  methods: {
    saveForm() {
      // Emit the fields as a keyed object
      const formData = this.fields.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});
      this.$emit("save", formData);
    },
    updateField(key, value) {
      const field = this.fields.find((f) => f.key === key);
      if (field) field.value = value; // Update value reactively
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>

<template>
  <form @submit.prevent="saveForm">
    <div v-for="field in fields" :key="field.key" class="form-group">
      <label :for="field.key">{{ field.label }}</label>

      <!-- Input Field for Text/Email -->
      <input
        v-if="field.type === 'text' || field.type === 'email'"
        :type="field.type"
        :id="field.key"
        :value="field.value"
        :readonly="field.readonly || false"
        @input="updateField(field.key, $event.target.value)"
      />

      <!-- Dropdown for Select Type -->
      <select
        v-if="field.type === 'select'"
        :id="field.key"
        :value="field.value"
        @change="updateField(field.key, $event.target.value)"
      >
        <option v-for="option in field.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <button type="submit" :disabled="loading">Save Changes</button>
  </form>
</template>

<script>
export default {
  props: {
    fields: Array,
    loading: Boolean,
  },
  emits: ["save"],
  methods: {
    saveForm() {
      const formData = this.fields.reduce((acc, field) => {
        acc[field.key] = field.value;
        return acc;
      }, {});
      this.$emit("save", formData);
    },
    updateField(key, value) {
      const field = this.fields.find((f) => f.key === key);
      if (field) field.value = value;
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

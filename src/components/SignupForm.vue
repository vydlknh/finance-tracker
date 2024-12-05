<template>
  <div class="signup">
    <h2 class="title">Sign up</h2>
    <form @submit.prevent="signup">
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Username" required v-model="username">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" required v-model="email">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" required v-model="password">
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/init';

export default {
  emits: ["loggedIn"],
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    signup() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then (() => {
        updateProfile(auth.currentUser, {
          displayName: this.username
        })
      })
      .then(() => {
        console.log(auth.currentUser.displayName);
        this.$emit("loggedIn")
      })
      .catch ((error) => {
        console.log(error.message);
      })     
    }
  }
}
</script>

<style>
.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15vh 0
}
main {
  flex: 1;
  padding: 2rem;
}
.title {
  text-align: center;
  margin: 2rem 0;
}
form {
  margin-left: auto;
  margin-right: auto;
}
</style>
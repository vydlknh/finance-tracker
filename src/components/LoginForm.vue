<template>
  <div class="login">
    <h2 class="title">Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" required v-model="email">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" required v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/init';

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        this.$emit("loggedIn");
      })
    }
  }
}
</script>

<style>
.login {
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
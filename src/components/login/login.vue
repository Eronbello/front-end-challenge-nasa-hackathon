<template lang="pug">
v-card.elevation-12
  v-toolbar(color='primary' dark='' flat='')
  v-card-text
    v-form
      v-text-field(v-model="email" label='Email' name='Email' prepend-icon='fas fa-envelope' type='email')
      v-text-field#password(v-model="password" label='Password' name='password' prepend-icon='fas fa-lock' type='password')
  v-card-actions
    v-spacer
    v-btn(color='#2196f3' style="color: white !important" @click="clicked") Criar conta
    v-btn(color='#2196f3' style="color: white !important" @click="auth") Login
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapMutations('app', ['setLogin']),
    auth () {
      this.setLogin(true)
      const data = {
        email: this.email,
        password: this.password
      }
      return this.$http.post('http://localhost:3000/auth/login', data)
        .then(response => {
          this.setLogin(true)
        })
        .catch(error => {
          console.log(error)
        })
    },
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

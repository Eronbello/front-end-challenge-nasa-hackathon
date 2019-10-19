<template lang="pug">
  div#form_page.px-4
    img(:src="require('../../img/logo.png')")#logo_login
    h1.mb-3 Welcome Back,
    v-form
      v-text-field(v-model="email" label='Email' name='Email' type='email')
      v-text-field#password(v-model="password" label='Password' name='password' type='password').mb-3
      // v-btn(color='#2196f3' style="color: white !important" @click="clicked") Criar conta
      v-btn(color='#2196f3' style="color: white !important" @click="auth") Login
      #new_user
        h2(@click="clicked") New user? Signup
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  data: () => ({
    email: '',
    password: '',
    url: import('@/img/logo.png')
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

<style lang="scss">
#logo_login {
  position: fixed;
  height: 125px;
  width: 125px;
  top: 5%;
  left: 36%;
  border-radius: 50%;
}
h1 {
  font-size: 28px !important;
  font-weight: 400 !important;
  color: #756c6c;
}
button {
  width: 100%;
}
h2 {
  text-align: right;
  color: #756c6c;
  font-weight: 400 !important;
  margin-top: 0px;
  font-size: 16px !important;
}
#new_user {
  bottom: 5%;
  h2 {
    text-align: center;
  }
}
#form_page {
  img {
    width: 125px;
    height: 125px;
    border-radius: 100%;
  }
  @media screen and (max-width: 672px) {
    img {
      display: initial;
    }
    #logo_login {
      position: absolute;
      height: 100px;
      width: 100px;
      top: 5%;
      left: 36%;
      border-radius: 50%;
    }
    h1 {
      font-size: 28px !important;
      font-weight: 400 !important;
      color: #756c6c;
    }
    button {
      width: 100%;
    }
    h2 {
      text-align: right;
      color: #756c6c;
      font-weight: 400 !important;
      margin-top: 0px;
      font-size: 16px !important;
    }
    #new_user {
      position: absolute;
      bottom: 5%;
      left: 32%;
    }
  }
}
</style>

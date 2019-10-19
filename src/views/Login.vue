<template lang="pug">
v-app
  v-content#content_login
    v-container(fluid='' fill-height='')
      v-layout(align-center='' justify-center='')
        v-flex(xs12='' sm8='' md4='')
          login(v-if="login" @clicked="changePage")
          register(v-else  @clicked="changePage")
</template>

<script>
const register = () => import('@/components/login/register')
const login = () => import('@/components/login/login')

export default {
  components: { register, login },
  data: () => ({
    login: true
  }),
  methods: {
    changePage () {
      this.login = !this.login
    }
  }
}
</script>

<style lang="scss">
#content_login {
   @media screen and (max-width: 672px) {
    background-color: white;
    h1 {
      font-size: 28px!important;
    }
  }
}
</style>

<template lang="pug">
v-app
  v-content#content_login
    v-container(fluid='' fill-height='')
      v-layout(align-center='' justify-center='')
        v-flex(xs12='' sm8='' md4='').login_card
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
    .login_card {
      box-shadow: 0 0 0 0 rgba(220,220,220,1) !important;
      border: 0 !important;
      height: initial !important;
      display: initial;
    }
  }
  .login_card {
    background-color: white;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    -webkit-box-shadow: 10px 10px 5px -2px rgba(220,220,220,1);
    -moz-box-shadow: 10px 10px 5px -2px rgba(220,220,220,1);
    box-shadow: 10px 10px 5px -2px rgba(220,220,220,1);
    height: 600px;
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>

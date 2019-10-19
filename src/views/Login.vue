<template lang="pug">
v-app#inspire
  v-content
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

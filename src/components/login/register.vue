<template lang="pug">
  div#form_page.px-4
    img(src='https://st4.depositphotos.com/24222942/25417/v/1600/depositphotos_254179020-stock-illustration-tree-logo-design-minimalist-green.jpg')#logo_login
    h1.mb-3 Register
    v-form
      v-text-field(label='Name' name='Name' type='text')
      v-text-field(label='Email' name='Email' type='email')
      v-text-field#password(label='Password' name='password' type='password').mb-3
      v-text-field#password(label='Confirm password' name='password' type='password').mb-3
      v-btn(color='#2196f3' style="color: white !important") Register
      #new_user.fix
        h2(@click="clicked") Already have a user? Sign
</template>

<script>
export default {
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss">
  .fix {
    left: 24% !important;
  }
</style>

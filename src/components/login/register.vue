<template lang="pug">
v-card.elevation-12
  v-toolbar(color='primary' dark='' flat='')
  v-card-text
    v-form
      v-text-field(label='Nome' name='Nome' prepend-icon='mdi-account' type='text')
      v-text-field(label='Email' name='Email' prepend-icon='mdi-account' type='email')
      v-text-field#password(label='Senha' name='password' prepend-icon='fas fa-lock' type='password')
      v-text-field#password(label='Confirmação de senha' name='password' prepend-icon='fas fa-lock' type='password')
  v-card-actions
    v-spacer
    v-btn(color='#2196f3' style="color: white !important" @click="clicked") Já tenho uma conta
    v-btn(color='#2196f3' style="color: white !important") Criar conta
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

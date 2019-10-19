<template lang="pug">
v-card.mx-auto()
  v-img(src='https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/EAD2/Thumb%20EAD2/Como%20criar%20um%20modelo%20de%20neg%C3%B3cio%20de%20impacto%20socioambiental.png' height='300px')
  v-card-title
    .title Como criar um modelo de negócio de impacto socioambiental
    .subheading(style="color: green") R$ 30,00
  v-card-actions
    v-layout(row wrap).pb-3
      v-btn(color="blue" @click="comprar" style="color: white !important" v-if="pay") Comprar
      v-btn(@click='show = !show')
        | Detalhes
  v-expand-transition
    div(v-show='show')
      v-card-text
        | Conheça modelos de negócios de impacto socioambiental e aprenda como transformar realidades por meio do empreendedorismo com propósito.
</template>

<script>
export default {
  props: {
    pay: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    comprar () {
      this.$emit('buy')
    }
  }
}
</script>
<style lang="scss">
</style>

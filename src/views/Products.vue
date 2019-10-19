<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-flex(xs12 md6 lg3 v-for="(item, index) in products" :key="index")
      cardProduct(:pay="false")
</template>

<script>
import {
  mapState
} from 'vuex'
const cardProduct = () => import('@/components/card/product')
export default {
  components: { cardProduct },
  computed: {
    ...mapState('app', ['products'])
  }
}
</script>

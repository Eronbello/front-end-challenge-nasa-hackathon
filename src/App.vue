<template lang="pug">
  v-app
    login(v-if="!login")
    core-filter(v-if="login")
    core-toolbar(v-if="login")
    core-drawer(v-if="login")
    core-view(v-if="login")
</template>
<script>
import {
  mapState,
  mapMutations
} from 'vuex'
const login = () => import('@/views/Login')
export default {
  components: { login },
  data: () => ({
    landing: false,
    dialog: false
  }),
  computed: {
    ...mapState('app', ['login', 'money', 'manager'])
  },
  methods: {
    ...mapMutations('app', ['setMoney']),
    closeDialog () {
      this.dialog = false
      this.setMoney(this.money + 2.00)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
/* Remove in 1.2 */
.v-dialog {
  width: initial !important;
}
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
// .v-dialog:not(.v-dialog--fullscreen) {
//   width: 1024px;
//   height: initial;
// }
// .v-dialog:not(.v-dialog--fullscreen) {
//     max-height: 80vh;
//     width: 70vw;
//     @media screen and (max-width: 1200px){
//       max-height: 80%;
//       width: 100vw;
//     }
//     @media screen and (max-width: 600px){
//       max-height: 80%;
//       width: 100vw;
//     }
// }
</style>

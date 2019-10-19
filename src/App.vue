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
    dialog: true
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
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

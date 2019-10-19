<template lang="pug">
  div#toolbar
    v-toolbar#core-toolbar(flat="" prominent="" style="background: #eee;")
      .v-toolbar-title
        v-toolbar-title.tertiary--text.font-weight-light
          v-btn.default.v-btn--simple(v-if="responsive" dark="" icon="" @click.stop="onClickBtn")
            v-icon mdi-view-list
          |         {{ title }}
      //- v-spacer
      //-   v-toolbar-items()
      //-     v-flex(align-center="" layout="" py-2="")
      //-       .money R$ {{money}}
</template>

<script>

import {
  mapMutations, mapState
} from 'vuex'
export default {
  data: () => ({
    title: null,
    responsive: false,
    responsiveInput: false,
    hasBackupStandard: false
  }),
  computed: {
    ...mapState('app', ['money'])
  },
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
<style lang="scss" scoped>
.money {
  font-size: 30px;
  color: green;
}
#core-toolbar a {
  text-decoration: none;
}
.v-toolbar .v-toolbar__content .v-toolbar__items > div {
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
}
.botao-informacoes {
  @media screen and (max-width: 789px){
      width: 100% !important;
    }
}
.listMarket:hover {
  background-color: #dddddd
}
.notification-backup {
  padding-left: 265px;
  padding-top: 5px;
  padding-right: 5px;
  @media screen and (max-width: 990px){
    padding-left: 5px !important;
  }
  .v-alert {
    padding: 0px 10px !important;
    margin: 0 !important
  }
  .message {
    position: absolute;
    font-size: 20px;
    @media screen and (max-width: 1200px){
      position: relative;
      font-size: 18px;
    }
    @media screen and (max-width: 789px){
      // position: relative;
      font-size: 15px !important;
    }
  }
}
</style>

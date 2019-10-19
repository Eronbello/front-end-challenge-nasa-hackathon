<template lang="pug">
  #LandingPage
    v-fade-transition(mode='out-in')
      #money(v-if="moneyBag")
        img(src="../img/money-bag.png" height="100")
        p Você ganhou pontos!
    #principal
      h1 Cadastre sua Empresa
      h1 Atualize seus dados
      h1 Responda os Quizzes
      h1 Receba CashBack
      .begin
        a.btn.btn-1(@click='teste') Vamos começar?
    #imagem1
      h1 Vamos começar seu cadastro?
      .card
        h2 Qual é o seu nome?
        v-text-field(solo='' height="80" v-on:keyup.enter='$vuetify.goTo("#imagem2", options)')
    #imagem2
      .card
        h2 Agora insira seu e-mail
        v-text-field(solo='' height="80" v-on:keyup.enter='$vuetify.goTo("#imagem3", options)')
    #imagem3
      .card
        h2 Quase lá!
        h2 Vamos criar uma senha
        v-text-field(solo='' type="password" height="80" v-on:keyup.enter="goToLogin")
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  data: () => ({
    fundo1: () => import('../img/cashback.png'),
    fundo2: () => import('@/img/fundo2.png'),
    fundo3: () => import('@/img/fundo3.png'),
    moneyBag: false
  }),
  computed: {
    options () {
      return {
        duration: 700,
        offset: 0,
        easing: 'linear'
      }
    }
  },
  methods: {
    ...mapMutations('app', ['setLogin']),
    teste () {
      // this.moneyBag = true
      this.$vuetify.goTo('#imagem1', this.options)
    },
    goToLogin () {
      this.$router.push({ name: 'Dash' })
      this.setLogin(false)
    }
  }
}
</script>

<style lang="scss">
.btn {
  font-size: 33px;
  width: 30%;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }

/* Demo Stuff End -> */

/* <- Magic Stuff Start */

.btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
}

.btn-2 {
  background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
}

.btn-3 {
  background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
}

.btn-4 {
  background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
}

.btn-5 {
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);
}
.begin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
}
/* Magic Stuff End -> */
#money {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px !important;
    color: white;
  }
}
#principal {
  background-image: url("../img/fundo.png") !important;
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  h1 {
      margin: 0 !important;
      color: #FFFFFF;
      font-family: Blinker;
      font-style: normal;
      font-weight: bold !important;
      font-size: 70px !important;
      line-height: 30px;
      text-align: center;
  }
}
#imagem1 {
  background-image: url("../img/fundo1.png");
  height: 100vh;
  width: 100vw;
  padding-top: 20px;
  h1 {
      margin: 0 0 0 0 !important;
      color: #FFFFFF;
      font-family: Blinker;
      font-style: normal;
      font-weight: bold !important;
      font-size: 70px !important;
      line-height: 30px;
      text-align: center;
    }
  .card {
    margin-top: 200px;
    margin-left: 200px;
    height: 200px;
    padding-left: 25px;
    padding-right: 25px;
    width: 500px;
    background: linear-gradient(180deg, rgba(26, 84, 160, 0.9) 0%, rgba(17, 130, 192, 0.9) 100%);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      color: white;
      text-align: center;
      font-family: Blinker;
      font-style: normal !important;
      font-weight: bold !important;
      font-size: 40px !important;
      line-height: 20px;
    }
  }
}
#imagem2 {
  background-image: url("../img/fundo2.png");
  height: 100vh;
  width: 100vw;
  padding-top: 10%;
  .card {
    margin-left: 300px;
    height: 200px;
    padding-left: 25px;
    padding-right: 25px;
    width: 500px;
    background: linear-gradient(180deg, rgba(26, 84, 160, 0.9) 0%, rgba(17, 130, 192, 0.9) 100%);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      color: white;
      text-align: center;
      font-family: Blinker;
      font-style: normal !important;
      font-weight: bold !important;
      font-size: 40px !important;
      line-height: 20px;
    }
  }
}
#imagem3 {
  background-image: url("../img/fundo3.png");
  height: 100vh;
  width: 100vw;
  padding-top: 10%;
    .card {
      margin-left: 200px;
      height: 300px;
      padding-left: 25px;
      padding-right: 25px;
      width: 500px;
      background: linear-gradient(180deg, rgba(26, 84, 160, 0.9) 0%, rgba(17, 130, 192, 0.9) 100%);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      h2 {
        color: white;
        text-align: center;
        font-family: Blinker;
        font-style: normal !important;
        font-weight: bold !important;
        font-size: 40px !important;
        line-height: 20px;
      }
  }
}
// #imagem1 {
//   header {
//     width: 100vw;
//     position: absolute;
//     h1 {
//       color: #FFFFFF;
//       font-family: Blinker;
//       font-style: normal;
//       font-weight: bold !important;
//       font-size: 70px !important;
//       line-height: 30px;
//       text-align: center;
//     }
//   }
//   .card {
//     position: absolute;
//     height: 100px;
//     width: 100px;
//     background-color: black;
//   }
// }
</style>

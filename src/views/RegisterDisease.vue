<template lang="pug">
  div#form_page.px-4
    h1.mb-3 Register disease
    v-form
      v-text-field(label='City' name='City' type='text')
      v-text-field(label='State' name='State' type='email')
      v-text-field(label='Disease' name='City' type='text')
      v-text-field(label='Country' name='State' type='email')
      v-btn(color='#2196f3' style="color: white !important") Save a life
  //- v-container(fluid='' fill-height='')
  //-   v-layout(align-center='' justify-center='')
  //-     v-flex(xs12)
  //-       material-card(color='blue' title='Register disease')
  //-         v-form()
  //-           v-text-field(v-model='name' label='City')
  //-           v-text-field(v-model='email' label='State')
  //-           v-text-field(v-model='email' label='Disease')
  //-           v-text-field(v-model='email' label='Country')
</template>

<script>
export default {
  data: () => ({
    location: {}
  }),
  mounted () {
    this.geolocate()
    console.log(location)
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.longitude)
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

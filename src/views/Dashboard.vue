<template lang="pug">
div
  v-container(fill-height='' fluid='' grid-list-xl='')
    v-layout(row wrap='')
      v-flex(xs12 md12 lg12)
        material-card(color='blue' title='Diseases')
          gmap-map(:center='center', :zoom='3', style='width:100%;  height: 65vh' mapTypeId='terrain'
            :options="option")
            GmapCluster(minimumClusterSize="1")
              gmap-marker(v-for='(m, index) in markers', :key='index', :position='m.position', @click='center=m.position')
        v-btn(@click="newRegister" fab dark color="indigo" style="position: fixed; right: 15px; bottom: 15px")
          v-icon mdi-plus
</template>

<script>
import GmapCluster from 'vue2-google-maps/dist/components/cluster'
export default {
  name: 'GoogleMap',
  components: { GmapCluster },
  data () {
    return {
      center: {
        lat: -11.9283,
        lng: -61.9953,
        dialog: false,
        loaded: false
      },
      option: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      },
      markers: []
    }
  },

  mounted () {
    this.geolocate()
    this.getData()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    newRegister () {
      console.log('Teste')
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.locgmapclusteration.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    getData () {
      this.loaded = true
      this.$http.get('http://157.230.215.80:5000/patient')
        .then(r => {
          r.data.forEach(element => {
            this.markers.push({
              position: {
                lat: parseFloat(element.lat),
                lng: parseFloat(element.long)
              }
            })
          })
          this.loaded = false
        })
        .catch(err => {
          this.loaded = false
          console.log(err)
        })
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

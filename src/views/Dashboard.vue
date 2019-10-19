<template lang="pug">
div
  v-container(fill-height='' fluid='' grid-list-xl='')
    v-layout(row wrap='')
      v-flex(xs12 md12 lg12)
        material-card(color='blue' title='Diseases')
          gmap-map(:center='center', :zoom='3', style='width:100%;  height: 65vh' mapTypeId='terrain'
            :options="option")
            GmapCluster(:minimumClusterSize="1" @click="openWindow")
              gmap-marker(v-for='(m, index) in markers', :key='index', :position='m.position', :clickable="true" :draggable="true" :label="m.label")
    v-dialog(v-model="dialog" max-width="620")
      v-card
        v-card-title.headline.grey.lighten-2(style="background-color: #2196f3 !important; color: white")
          | Total diseases last year in Curitiba: {{ total }}
        v-card-text
          v-chart(:options="chartData" resizable)
</template>

<script>
import GmapCluster from 'vue2-google-maps/dist/components/cluster'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
export default {
  name: 'GoogleMap',
  components: { GmapCluster, 'v-chart': ECharts },
  data () {
    return {
      total: 0,
      chartData: {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },

      dialog: false,
      item: 'sadas',
      center: {
        lat: -11.9283,
        lng: -61.9953,
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
    openWindow (m) {
      this.loaded = true
      this.$http.get('http://157.230.215.80:5000/contagem')
        .then(r => {
          this.loaded = false
          const mapped = r.data.map(item => item.count)
          const total = mapped.reduce(function (a, b) {
            return a + b
          })
          this.total = total
        })
        .catch(err => {
          this.loaded = false
          console.log(err)
        })
      this.dialog = true
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

<style lang="scss">
.echarts {
  height: 200px;
}
</style>

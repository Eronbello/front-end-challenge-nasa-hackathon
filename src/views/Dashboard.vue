<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-flex(xs12 md12)
      material-card(color='blue' title='Pagamentos')
        GChart(ref="GChart"
          :settings="{ packages: ['geomap'], mapsApiKey:'AIzaSyANkJr-XaEm94SkLoxpfIKHitCJVdduj-0' }"
          :data="chartData"
          :options="chartOptions"
          :events="chartEvents"
          :resize-debounce="500"
          type="GeoChart")
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['City', 'Popularity'],
        ['New York', 200],
        ['Boston', 300],
        ['Miami', 400],
        ['Chicago', 500],
        ['Los Angeles', 600],
        ['Houston', 700]
      ],
      chartOptions: {
        chart: {
          region: 'US',
          displayMode: 'markers',
          colorAxis: {
            colors: ['#acb2b9', '#2f3f4f']
          }
        }
      },
      chartEvents: {
        select: () => {
          const table = this.$refs.GChart.chartObject
          const selection = table.getSelection()
          console.log(selection)
        }
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <GChart
      ref="GChart"
      :data="chartData"
      :options="chartOptions"
      :events="chartEvents"
      :resize-debounce="500"
      type="GeoChart"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Country', 'Population', 'Area Percentage'],
        ['France', 65700000, 50],
        ['Germany', 81890000, 27],
        ['Poland', 38540000, 23]
      ],
      chartOptions: {
        chart: {
          sizeAxis: { minValue: 0, maxValue: 100 },
          region: '155', // Western Europe
          displayMode: 'markers',
          colorAxis: { colors: ['#e7711c', '#4374e0'] } // orange to blue
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

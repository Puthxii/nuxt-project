<template>
  <client-only>
    <div>
      <VueApexCharts
        width="500"
        type="area"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </client-only>
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
    }
  }
}
</script>
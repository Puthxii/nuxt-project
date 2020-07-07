<template>
    <client-only>
        <div class="row">
            <div class="col-3">
                <div class="pt-5" id="chart">
                    <VueApexCharts 
                        type="bar" 
                        height="380" 
                        :options="chartOptions" 
                        :series="series">
                    </VueApexCharts>
                </div>
            </div>
        </div>   
    </client-only>
</template>

<script>
export default {
    components: {
        VueApexCharts: () => import('vue-apexcharts') //shorten part
    },
    // TODO : data adn decorate 
    data() {
        return {   
            series: [{
                data: [82.66, 55.10, 15.4, 7.3, 28.81]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 380,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: ['#D514A8', '#179FDE', '#217B6D', '#B2A82F', '#343DA7'],
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Promotion 6.6 2020', 'Brand A', 'Product Category C', 'Promotion B', 'Product Category D'],
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                title: {
                    text: 'Top 5 Online Revenue Tag',
                    align: 'left',
                    floating: true
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return ''
                            }
                        }
                    }
                }
            },
        }
    }
    // TODO : Function change data by date
}
</script>
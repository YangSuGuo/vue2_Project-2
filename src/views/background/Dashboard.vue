<template>
    <div id="Dashboard">
        <div class="Dashboard03">
            <div ref="Dashboard05" class="图表05"></div>

            <div id="Dashboard02">
                <div ref="Dashboard" class="图表"></div>
                <div ref="Dashboard02" class="图表"></div>
            </div>
        </div>

        <div>
            <div ref="Dashboard04" class="图表04"></div>
            <div ref="Dashboard03" class="图表03"></div>
        </div>

    </div>
</template>

<script>

import * as echarts from 'echarts'

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('A' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Dashboard",

    mounted() {
        this.Dashboard = echarts.init(this.$refs.Dashboard)
        this.Dashboard.setOption({
            title: {
                text: '试例图表01'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: 'rgb(126,199,255)',
                    },
                },
            },
            legend: {
                show: true,
                itemWidth: 30,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 14,
                    padding: [0, 8, 0, 8]
                }
            },
            grid: {
                top: '20%',
                left: '15%',
                right: '7%',
                bottom: '15%',
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgb(41,188,245)',
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(112, 151, 184, 1)',
                            fontSize: 12,
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    data: ['2023', '2022', '2021', '2020', '2019',],
                },
            ],
            yAxis: [
                {
                    name: "",
                    nameTextStyle: {
                        color: "#fff",
                        fontSize: 12,
                        padding: [0, 60, 0, 0]
                    },
                    // minInterval: 1,
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'rgba(112, 151, 184, 1)',
                            fontSize: 14
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    type: 'line',
                    symbol: 'circle',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#00ffa2', // 线条颜色
                        },
                    },
                    showSymbol: false,
                    itemStyle: {
                        normal: {
                            color: '#00f0ff',//拐点颜色
                            label: {
                                show: true, //开启显示
                                color: '#fff',
                                position: 'top', //在上方显示
                                formatter: function (res) {
                                    if (res.value) {
                                        return res.value
                                    } else {
                                        return 0
                                    }
                                },
                            },
                        },
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [  // 渐变颜色
                                {
                                    offset: 0,
                                    color: 'rgba(36, 214, 214, 0.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(36, 214, 214, 0)',
                                },
                            ],
                            global: false,
                        },
                    },
                    data: ['30', '70', '130', '200', '90',],
                },
                {
                    type: 'line',
                    showSymbol: false,
                    symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#3D84F7', // 线条颜色
                        },
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [  // 渐变颜色
                                {
                                    offset: 0,
                                    color: 'rgba(61, 132, 247, 0.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(61, 132, 247, 0)',
                                },
                            ],
                            global: false,
                        },
                    },
                    data: ['95', '30', '170', '60', '210',],
                }
            ]
        })

        this.Dashboard02 = echarts.init(this.$refs.Dashboard02)
        this.Dashboard02.setOption({
            title: {
                text: '试例图表02'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    emphasis: {
                        focus: 'series'
                    },
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    emphasis: {
                        focus: 'series'
                    },
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        })

        this.Dashboard03 = echarts.init(this.$refs.Dashboard03)
        this.Dashboard03.setOption({
            title: {
                text: '试例图表03'
            },
            backgroundColor: '#FFF',
            tooltip: {
                show: true
            },
            radar: {
                radius: '60%',
                center: ['50%', '55%'],
                // startAngle: 0,
                splitNumber: 10,
                nameGap: '10',
                name: {
                    textStyle: {
                        color: '#646464',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#076CFF'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgb(125,200,242)', 'rgb(137,205,244)', 'rgb(143,210,246)', 'rgb(155,216,248)', 'rgb(167,220,250)', 'rgb(186,227,252)', 'rgb(200,230,253)', 'rgb(216,235,254)', 'rgb(233,245,255)', '#fff'],

                    }
                },
                indicator: [{
                    name: 'Sunday',
                    max: 100
                },
                    {
                        name: 'Monday',
                        max: 100
                    },
                    {
                        name: 'Tuesday',
                        max: 100
                    },
                    {
                        name: 'Wednesday',
                        max: 100
                    },
                    {
                        name: 'Thursday',
                        max: 100
                    },
                    {
                        name: 'Friday',
                        max: 100
                    },
                    {
                        name: 'Saturday',
                        max: 100
                    }
                ]
            },
            series: [{
                name: '使用时段',
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        width: 0,
                        opacity: 0.4,
                    },
                },
                lineStyle: {
                    normal: {
                        width: 0,
                    },
                },
                data: [{
                    itemStyle: {
                        normal: {
                            color: '#0291FF',
                        },
                    },
                    value: [20, 33, 80, 50, 30, 40, 80]
                }]
            }]
        })

        this.Dashboard04 = echarts.init(this.$refs.Dashboard04)
        this.Dashboard04.setOption({
            title: {
                text: '试例图表04'
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [25, 100],
                    center: ['50%', '60%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        {value: 40, name: ' 1'},
                        {value: 38, name: ' 2'},
                        {value: 32, name: ' 3'},
                        {value: 30, name: ' 4'},
                        {value: 28, name: ' 5'},
                        {value: 26, name: ' 6'},
                        {value: 22, name: ' 7'},
                        {value: 18, name: ' 8'}
                    ]
                }
            ]
        })

        this.Dashboard05 = echarts.init(this.$refs.Dashboard05)
        this.Dashboard05.setOption({
            graphic: {
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: 'Apache ECharts',
                            fontSize: 100,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#000',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 3000,
                            loop: false,/*循环*/
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.8,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: 'black'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        type: 'text',
                        left: '1%',
                        top: '1%',
                        style: {
                            text: '楊蘇國',
                            fontSize: 30,
                            lineDash: [20, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#606266',
                            lineWidth: 0.3
                        },
                        keyframeAnimation: {
                            duration: 2000,
                            loop: false,/*循环*/
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [300, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.5,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: 'black'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        })
    }
}
</script>

<style scoped>
#Dashboard {
    width: 100%;
    height: 100%;
    display: flex;
}

#Dashboard02 {
    display: flex;
    margin-top: 10px;
    margin-left: -10px;
}

.Dashboard03 {

}

.图表 {
    margin-left: 10px;
    width: 375px;
    height: 300px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 20px;
}

.图表03, .图表04 {
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 20px;

    margin-left: 20px;
    margin-bottom: 10px;
}

.图表05 {
    width: 800px;
    height: 300px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 20px;
}
</style>
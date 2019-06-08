<template>
    <div>
        <div ref='box1' style='width:600px;height:300px'></div>
        <div ref='box2' style='width:600px;height:300px'></div>
    </div>
</template>

<script>
// 引入 echarts ;
import myecharts from "echarts";
export default {
    data() {
        return {
            series: [
                {
                    name: "邮件123",
                    type: "line",
                    stack: "总量",
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: "联盟广告",
                    type: "line",
                    stack: "总量",
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: "视频广告",
                    type: "line",
                    stack: "总量",
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: "直接访问",
                    type: "line",
                    stack: "总量",
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: "搜索引擎",
                    type: "line",
                    stack: "总量",
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    },
    mounted() {
        this.init1();
        this.getData();
    },
    methods: {
        init1() {
            // echarts初始化时， 传递的参数是一个DOM元素
            var myChart = myecharts.init(this.$refs.box1);
            // 绘制图表
            var option = {
                title: {
                text: "ECharts 入门示例"
                },
                tooltip: {},
                xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
                ]
            };
            myChart.setOption(option);
        },
        init2() {
            var myChart = myecharts.init(this.$refs.box2);
            // 我们需要修改的 也就是这个 option
            var option = {
                title: {
                text: "标题"
                },
                tooltip: {
                trigger: "axis"
                },
                legend: {
                data: ["邮件123", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
                },
                grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
                },
                toolbox: {
                feature: {
                    saveAsImage: {}
                }
                },
                xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
                yAxis: {
                type: "value"
                },
                series: this.series
            };

            myChart.setOption(option);
        },
        getData(){
            // 用定时器 模拟了以下接口请求
            setTimeout(() => {
                // ary 是模拟的从后台获取的数据
                var ary = [
                    [100,300,400,600,300],
                    [1000,300,4000,600,300],
                    [10,300,400,800,300],
                    [100,380,400,600,300],
                    [100,500,400,600,300]
                ];
                this.series = this.series.map((item,index)=>{
                    item.data = ary[index];
                    return item
                })
                this.init2();
            }, 3000);
        }
    },
};
</script>

<style lang="less" scoped>
</style>
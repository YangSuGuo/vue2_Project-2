<template>
    <div id="home">
        <div class="Git">
            <h1 class="项目版本标题">项目版本：</h1>
            <el-timeline class="项目版本">
                <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp">
                    {{ activity.content }}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="必要依赖">
            <h1 class="必要依赖标题">必要依赖：</h1>
            <el-timeline class="依赖">
                <el-timeline-item
                        v-for="(depend, index) in depend"
                        :key="index"
                        :icon="depend.icon"
                        :type="depend.type"
                        :color="depend.color"
                        :size="depend.size"
                        :timestamp="depend.timestamp">
                    {{ depend.content }}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="小组成员">
            <h1 class="小组成员标题">小组成员：</h1>
            <el-row>
                <el-col class="卡片" :span="8">
                    <el-card class="卡片01" shadow="always" :body-style="{ padding: '0px' }">
                        <img class="image"
                             src="https://i.328888.xyz/2023/03/27/inNe9A.jpeg"
                             alt="背景图">
                        <div style="padding: 14px;">
                            <el-avatar
                                    class="图片"
                                    src="https://i.328888.xyz/2023/03/27/inBwDz.png">
                            </el-avatar>
                            <span class="卡片标题">楊蘇國</span>
                            <div class="subheading clearfix">
                                <span class="副标题">负责：</span>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="卡片02" shadow="always" :body-style="{ padding: '0px' }">
                        <img class="image"
                             src="https://i.328888.xyz/2023/03/30/i0G3Pq.jpeg"
                             alt="背景图">
                        <div style="padding: 14px;">
                            <el-avatar
                                    class="图片"
                                    src="https://i.328888.xyz/2023/03/30/i0GwmJ.jpeg">
                            </el-avatar>
                            <span class="卡片标题">范余强</span>
                            <div class="subheading clearfix">
                                <span class="副标题">负责：</span>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="卡片03" shadow="always" :body-style="{ padding: '0px' }">
                        <img class="image"
                             src="https://i.328888.xyz/2023/03/31/iwpBcL.jpeg"
                             alt="背景图">
                        <div style="padding: 14px;">
                            <el-avatar
                                    class="图片"
                                    src="https://i.328888.xyz/2023/03/31/iwpaWA.png">
                            </el-avatar>
                            <span class="卡片标题">文涛</span>
                            <div class="subheading clearfix">
                                <span class="副标题">负责：</span>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data() {
        return {
            activities: [{
                content: 'YSG 当前版本',
                timestamp: '2023-03-29 11:59',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more'
            }, {
                content: 'YSG 近期版本',
                timestamp: '2023-03-28 20:54',
                color: '#0bbd87'
            }, {
                content: 'YSG V0.13',
                timestamp: '2023-03-26 14:27',
                size: 'large'
            }, {
                content: 'YSG V0.12',
                timestamp: '2023-03-22 22:40'
            }, {
                content: 'YSG V0.10',
                timestamp: '2023-03-21 11:55'
            }, {
                content: 'YSG V0.09',
                timestamp: '2023-03-20 21:09'
            }, {
                content: 'YSG V0.08',
                timestamp: '2023-03-18 19:13'
            }, {
                content: 'YSG V0.07',
                timestamp: '2023-03-9 13:01'
            }],
            depend: [{
                content: 'Element',
                timestamp: 'V2.15.13 vue-ui组件',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'Router',
                timestamp: 'V5.0.8 路由',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'Mysql',
                timestamp: 'V2.18.1 数据库',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'Express',
                timestamp: 'V4.18.2',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'Cors',
                timestamp: 'V2.8.5 跨域',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'Axios',
                timestamp: 'V1.3.4 接口',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }, {
                content: 'ECharts',
                timestamp: 'V5.4.2 js图表',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-finished'
            }],
            currentDate: new Date()
        };
    }
}
</script>

<style scoped>
#home {
    display: flex;
}

.项目版本标题, .必要依赖标题, .小组成员标题 {
    /*位置*/
    margin-top: 10px;
    margin-bottom: 20px;
    /*文本*/
    font-size: 23px;
    font-family: Elephant, serif;
    color: #303133;
}

.项目版本, .依赖 {
    width: 200px;
    margin-left: 20px;
}

.Git, .必要依赖, .小组成员 {
    width: 200px;
}

.Git {
    width: 200px;
}

.必要依赖 {
    margin-left: 30px;
}

.小组成员 {
    margin-left: 30px;
    width: auto;
}

.卡片 {
    /*zoom: 80%;*/
    display: flex;
    width: auto;
}

.卡片02, .卡片03 {
    margin-left: 15px;
}

.图片 {
    position: relative;
    top: -25px;
    zoom: 175%;
    border-radius: 20%;
}

.卡片标题 {
    position: relative;
    top: -55px;
    left: 10px;
    font-size: 23px;
    font-family: Elephant, serif;
    font-weight: bold;
    color: #303133;
}

.副标题 {

    font-size: 18px;
    color: #606266;
}

.subheading {
    margin-top: 0;
    line-height: 0;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
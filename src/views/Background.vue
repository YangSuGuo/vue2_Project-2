<template>
    <div id="app">
        <el-container class="顶级容器">
            <el-header class="顶栏">
                <el-row class="标题栏">
                    <el-avatar
                            class="图片01"
                            src="https://i.328888.xyz/2023/03/27/inBwDz.png">
                    </el-avatar>
                    <el-link
                            :underline="false"
                            class="主页链接"
                            href="http://localhost:8080/#/Background/home"
                            target="_blank"
                            type="info">
                        <label class="text">楊蘇國的后台管理系统</label>
                    </el-link>
                    <el-col :span="12" class="搜索栏">
                        <el-autocomplete
                                v-model="state"
                                :fetch-suggestions="querySearchAsync"
                                :trigger-on-focus="false"
                                class="搜索框"
                                placeholder="  搜索设置项"
                                prefix-icon="el-icon-edit el-input__icon">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-autocomplete>
                    </el-col>
                    <el-menu
                            :default-active="activeIndex"
                            background-color="#a4cfd6"
                            class="账号导航"
                            mode="horizontal"
                            router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-user-solid" style="color: #32415A"></i>
                                <label style="color: #32415A">{{ user }}-管理员</label>
                            </template>
                            <el-menu-item index="/Background/Account_management" style="color: #32415A">
                                <i class="el-icon-user" style="color: #32415A"></i>账号管理
                            </el-menu-item>
                            <el-menu-item index="/Background/Message_notifications" style="color: #32415A">
                                <i class="el-icon-chat-line-square" style="color: #32415A"></i>消息通知
                            </el-menu-item>
                            <el-menu-item index="/Background/Recent_tasks" style="color: #32415A">
                                <i class="el-icon-wind-power" style="color: #32415A"></i>最近任务
                            </el-menu-item>
                            <el-menu-item index="/" style="color: #c04851">
                                <i class="el-icon-switch-button" style="color: #c04851"></i>返回登录
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-row>
            </el-header>

            <el-container class="次级容器">
                <el-aside class="侧边栏" style="width: 190px">
                    <el-row class="null"></el-row>
                    <el-row class="侧边栏容器">
                        <el-row class="头像">
                            <el-row class="遮罩">
                                <el-avatar
                                        :src="src"
                                        class="图片">
                                </el-avatar>
                                <label class="昵称">{{ nickname }}</label>
                            </el-row>
                        </el-row>
                        <el-row class="遮罩02">
                            <el-menu
                                    active-text-color="#0d70e5"
                                    background-color="#e8d8bd"
                                    class="el侧边栏"
                                    collapse-transition
                                    default-active="/Background/home"
                                    router
                                    text-color="#061629">
                                <el-menu-item class="列表" index="/Background/home">
                                    <i class="el-icon-s-home"></i>
                                    <span slot="title">首页</span>
                                </el-menu-item>
                                <el-menu-item class="列表" index="/Background/Dashboard">
                                    <i class="el-icon-timer"></i>
                                    <span slot="title">仪表盘</span>
                                </el-menu-item>
                                <el-menu-item disabled style="height: 2px;">
                                    <hr align=center class="分割线" color=#FFF size="2px" width=150px>
                                </el-menu-item>
                                <el-menu-item class="列表" index="/Background/Personal_Information">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">个人信息</span>
                                </el-menu-item>
                                <el-menu-item class="列表" index="/Background/Course_information">
                                    <i class="el-icon-data-analysis"></i>
                                    <span slot="title">课程信息</span>
                                </el-menu-item>
                                <el-menu-item class="列表" index="/Background/Service_subscriptions">
                                    <i class="el-icon-coordinate"></i>
                                    <span slot="title">服务订阅</span>
                                </el-menu-item>
                                <el-menu-item class="列表" index="/Background/Notes_ToDo">
                                    <i class="el-icon-notebook-1"></i>
                                    <span slot="title">笔记待办</span>
                                </el-menu-item>
                            </el-menu>
                        </el-row>
                    </el-row>
                </el-aside>

                <el-main class="主要内容">
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import axios from "axios";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Background",
    data() {
        return {
            nickname: this.$store.state.userinfo.user,
            settings: [],
            state: '',
            timeout: null,
            src: this.$store.state.avatar.img,
            user: this.$store.state.userinfo.user,
            haha: [],

            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        loadAll() {
            axios.get('http://127.0.0.1/suggestion')
                .then(res => {
                    this.settings = [...res.data]
                })
                .catch(err => {
                    console.log(err);
                })
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.settings;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 1000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
    },
    mounted() {
        this.haha = this.loadAll();
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

body {
    background: #FFF; /*网页背景*/
}

.侧边栏 {
    background-color: #DCDFE6;
    overflow: hidden; /*溢出检测*/
}

.侧边栏容器 {
    /*位置与大小*/
    /*top: 10px;*/
    left: 5%;
    width: 170px;
    height: 740px;
    /*样式*/
    /*background: #608BA8;*/
    /*border-radius: 6%;*/
}

.遮罩02 {
    margin-top: 30px;
    height: 660px;
    background-color: #FFC86D55;
    /*border-radius: 2%;*/

    /*background: rgba(255, 255, 255, 0.2);*/
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

.el侧边栏 {
    margin-top: 30px;
    /*opacity: 0.3;*/
}

.头像 {
    /*  position: relative;
      top: -5%;*/

}

.遮罩 {
    position: relative;
    /*top: 50%;*/
    height: 50px;
    background-color: #c0485195;
    /*border-radius: 6%;*/

    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

.图片 {
    position: relative;
    top: -40%;
    left: 8%;
    z-index: 10;
    zoom: 210%;
    border-radius: 20%;
}

.昵称 {
    position: relative;
    top: -110%;
    left: 15%;
    color: #FFFFFF;
    font-size: 15px;
    font-family: Elephant, serif;
}

.列表 {
    border-radius: 6%;
}

.分割线 {
    position: relative;
    left: -10%;
}

.顶栏 {
    /*noinspection CssUnknownTarget*/
    background: url("https://i.328888.xyz/2023/03/27/inNe9A.jpeg");
}

.标题栏 {

}

.图片01 {
    position: relative;
    top: 10px;
    left: -50%;
    border-radius: 20%;
}

.主页链接 {
    top: -6px;
    left: -49.5%;
    min-width: 200px;
    font-size: 20px;
}

.text {
    align-items: center;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    font-family: Elephant, serif;
    font-style: normal;
    color: #FFFFFF;
}

.搜索框 {
    margin-top: 1.5%;
    left: 50%;
}

.搜索框 {
    width: 660px;
    opacity: 0.9;
}

.账号导航 {
    position: absolute;
    top: 0;
    left: 85%;
    opacity: 0.8;
    /*zoom: 90%;*/
}

.主要内容 {
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    position: relative;

    background: rgba(114, 125, 146, 0.1);
    border-radius: 1%;
}

.null {
    /*background-color: chocolate;*/
    margin-bottom: 10px;
    height: 35px;
    /*z-index: -1;*/
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
//主页面
import Login from "@/views/Login.vue";
import Enroll from "@/views/Enroll.vue";
import Background from "@/views/Background.vue";
//后台子页面
import Home from "@/views/background/Home.vue";
import Dashboard from "@/views/background/Dashboard.vue";
import Personal_Information from "@/views/background/Personal_Information.vue";
import Course_information from "@/views/background/Course_information.vue";
import Map from "@/views/background/Map.vue";
import Notes_ToDo from "@/views/background/Notes_ToDo.vue";
import Video_management from "@/views/background/Video_management.vue";
//用户子页面
import Account_management from "@/views/user/Account_management.vue";
import Message_notifications from "@/views/user/Message_notifications.vue";
import Recent_tasks from "@/views/user/Recent_tasks.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Enroll',
        name: 'Enroll',
        component: Enroll,
    },
    {
        path: '/Background',
        name: 'Background',
        component: Background,
        // 子路由
        children: [
            //后台子页面
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'Dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'Personal_Information',
                name: 'Personal_Information',
                component: Personal_Information
            },
            {
                path: 'Course_information',
                name: 'Course_information',
                component: Course_information
            },
            {
                path: 'Map',
                name: 'Map',
                component: Map
            },
            {
                path: 'Notes_ToDo',
                name: 'Notes_ToDo',
                component: Notes_ToDo
            },
            {
                path: 'Video_management',
                name: 'Video_management',
                component: Video_management
            },
            //用户子页面
            {
                path: 'Account_management',
                name: 'Account_management',
                component: Account_management
            },
            {
                path: 'Message_notifications',
                name: 'Message_notifications',
                component: Message_notifications
            },
            {
                path: 'Recent_tasks',
                name: 'Recent_tasks',
                component: Recent_tasks
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router

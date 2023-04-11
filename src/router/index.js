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
import Service_subscriptions from "@/views/background/Service_subscriptions.vue";
import Notes_ToDo from "@/views/background/Notes_ToDo.vue";
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
                path: 'Service_subscriptions',
                name: 'Service_subscriptions',
                component: Service_subscriptions
            },
            {
                path: 'Notes_ToDo',
                name: 'Notes_ToDo',
                component: Notes_ToDo
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

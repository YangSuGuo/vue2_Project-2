import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userinfo: {
            user: null,
            password: null,
        },
        avatar: {
            img: "https://i.328888.xyz/2023/03/27/iUme5k.jpeg"
        }
    },
    getters: {},
    mutations: {
        userinfo(state, userdate) {
            state.userinfo.user = userdate
        },
        passinfo(state, pass){
            state.userinfo.password = pass
        },
        img(state, avatar_img){
            state.avatar.img = avatar_img
        }
    },
    actions: {},
    modules: {}
})

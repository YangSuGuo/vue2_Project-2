import Vue from 'vue'
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';

// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, {
    /* 插件配置项 */
    lang: 'zh',
});
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App'
import YuUI from '../src/index'

Vue.use(YuUI) //初始化install，供插件全局使用

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
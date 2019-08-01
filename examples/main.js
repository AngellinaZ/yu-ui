import 'babel-polyfill'
import Vue from 'vue'
import App from './app.vue'
import router from './router'

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
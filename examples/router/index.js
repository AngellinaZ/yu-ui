import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const requireRouter = require.context('../view', true, /\index.vue/)

let routes = [{
    path: '/',
    component: App,
    children: []
}];

console.log(requireRouter.keys())
requireRouter.keys().forEach(fileName => {
    const name = fileName.split('/')[1];
    const route = {
        path: `/${name}`,
        component: (resolve) => require([`../view/${name}/index.vue`], resolve)
    }
    routes[0].children.push(route)
})

console.log(routes)

export default new VueRouter({
    routes,
    mode: 'hash'
})
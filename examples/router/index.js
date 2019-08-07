import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const requireRouter = require.context('../view', true, /\index.vue/)

let routes = [];

requireRouter.keys().forEach(fileName => {
    const name = fileName.split('/')[1];
    const route = {
        path: `/${name}`,
        component: (resolve) => require([`../view/${name}/index.vue`], resolve)
    }
    routes.push(route)
})

console.log(routes)

export default new VueRouter({
    routes
})
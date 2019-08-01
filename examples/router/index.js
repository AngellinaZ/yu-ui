import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const requireRouter = path.context('../components', true, )

let routes = [];

requireRouter.keys().forEach(fileName => {
    const name = fileName.split('/')[1];
    const route = {
        path: `/${name}`,
        component: (resolve) => require([`../view/${name}/index.vue`], resolve)
    }
    routes.push(route)
})

export default new Router({
    routes
})
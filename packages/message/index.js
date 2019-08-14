import Vue from 'vue'
import YuMessage from './src/main'
import CreateAPI from 'vue-create-api'

YuMessage.install = function (Vue) {
    Vue.component(YuMessage.name, YuMessage)
}

Vue.use(CreateAPI, {
    componentPrefix: 'yu-',
    apiPrefix: '$'
})

Vue.createAPI(YuMessage, true, true, true)

export default YuMessage
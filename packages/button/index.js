import YuButton from './src/main'

YuButton.install = function (Vue) {
    Vue.component(YuButton.name, YuButton)
}

export default YuButton
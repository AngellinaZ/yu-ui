import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'

const components = {};

const requireComponent = require.context('../packages', true, /\.js/)

requireComponent.keys().forEach(path => {
    const componentConfig = requireComponent(path)
    const key = upperFirst(camelCase(path.split('/')[1]))
    components[key] = componentConfig.default || componentConfig
});

console.log(components)

// 一个公开方法 install, 第一个参数 Vue 构造器，第二个参数一个可选的选项对象
const install = function (Vue, opts = {}) {
    if (install.installed) return

    Object.keys(components).forEach(key => {
        const component = components[key]
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    ...components
}

module.exports.default = module.exports
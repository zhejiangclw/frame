import OboTipTemplate from './OtherBrowserOpenTip.vue';

const OboTip = {};
OboTip.install = function (Vue) {
    // 将扩展组件的template放入vue.extend扩展组件中
    const constructor = Vue.extend(OboTipTemplate);

    // 创建扩展组件的实例，并$mount挂载,然后插入实例化
    const instance = new constructor();
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    // 编写扩展组件内部方法
    OboTip.close = () => {
        instance.visible = false;
    };
    OboTip.open = () => {
        instance.visible = true;
    };

    // 配置到vue的原型链上，可通过直接使用this.$oboTip使用
    Vue.prototype.$oboTip = {
        close: () => {
            instance.visible = false;
        },
        open: () => {
            instance.visible = true
        }
    }

};

export default OboTip;

// 使用时：
// 如果用的多，在main.js中引入
// import OboTip from '@/components/otherBrowserOpenTip'
// Vue.use(OboTip)

import ContinueComponent from './alert.vue'

const continueAlert = {};

continueAlert.install = function(Vue) {

    const ContinueConstructor = Vue.extend(ContinueComponent);

    const instance = new ContinueConstructor();

    instance.$mount(document.createElement('div'));

    document.body.appendChild(instance.$el);

    continueAlert.open = () => {
        instance.show = true;
    }

    continueAlert.close = () => {
        instance.show = false;
    }

    Vue.prototype.$alert = {
        open: () => {
            instance.show = true;
        },
        close: () => {
            instance.show = false;
        }
    }

}

export default continueAlert;

import LoadingComponent from './loading.vue'

const Loading = {}

Loading.install = function(Vue) {

	const LoadingConstructor = Vue.extend(LoadingComponent);

	const instance = new LoadingConstructor();

	instance.$mount(document.createElement('div'));

	document.body.appendChild(instance.$el);

    Loading.open = () => {
        instance.show = true;
    }

    Loading.close = () => {
        instance.show = false;
    }

	Vue.prototype.$loading = {
		open: () => {
			instance.show = true;
		},
		close: () => {
			instance.show = false;
		}
	}

}

export default Loading;

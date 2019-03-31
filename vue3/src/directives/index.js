import Vue from 'vue';

// 防连点指令，可自定义间隔时间
Vue.directive('preventReClick', {
    inserted(el, binding) {
        el.addEventListener('click', e => {
            if (!el.disabled) {
                el.disabled = true;
                el.style.cursor = 'not-allowed';
                setTimeout(() => {
                    el.style.cursor = 'pointer';
                    el.disabled = false;
                },binding.value || 2000)
            }
        })
    }
});

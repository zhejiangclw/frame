<template>
    <div>
        <h1>这是所有拓展插件的展示区</h1>
        <ul>
            <li v-for="(item, index) in extendList" :key="item.name" @click="item.fn">
                <button class="btn_init ui_inline_click bd_radius_8 pd_20" style="background-color:skyblue;">{{item.name}}</button>
            </li>
        </ul>

        <ul>
            <li>
                <progress-bar :current="1" :sum="20" :time-show="'11: 22'"></progress-bar>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import OboTip from '@/components/otherBrowserOpenTip';
    import Loading from '@/components/loading';
    import Alert from '@/components/alert';

    import Progress from '@/components/progress/Progress'

    // 微信内分享提示弹窗
    Vue.use(OboTip);
    // 自定义加载图片
    Vue.use(Loading);
    // 自定义弹窗
    Vue.use(Alert);

    export default {
        name: "extend",
        components:{
            'progress-bar': Progress,
        },
        data() {
            return {
                extendList: [
                    {
                        fn(){
                            OboTip.open()
                        },
                        name: '微信内分享提示弹窗',
                    },
                    {
                        fn(){
                            Loading.open();
                            let timeout = setTimeout(() =>{
                                Loading.close();
                                timeout = null;
                            }, 2000)
                        },
                        name: '自定义加载图片',
                    },
                    {
                        fn(){
                            Alert.open();
                        },
                        name: '自定义弹窗',
                    }
                ]
            }
        },

    }
</script>

<style scoped>
    ul li{
        margin-top: 20px;
    }
</style>

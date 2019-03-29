<template>
    <div>
        <h1>这是所有拓展插件的展示区</h1>
        <ul>
            <li v-for="(item, index) in extendList" :key="item.name" @click="item.fn">
                <button class="btn_init ui_inline_click bd_radius_8 pd_20" style="background-color:skyblue;">{{item.name}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import OboTip from '@/components/otherBrowserOpenTip'

    // 微信内分享提示弹窗
    Vue.use(OboTip);

    export default {
        name: "extend",
        data() {
            return {
                extendList: [
                    {
                        fn(){
                            OboTip.open()
                        },
                        name: '微信内分享提示弹窗',
                    }
                ]
            }
        },

    }
</script>

<style scoped>

</style>

<template>
    <div class="logout_wap">
        <transition name="fade">
            <div class="continue" v-if="show">
                <div class="alert_box">
                    <p class="txt">是否从上次中断位置继续</p>
                    <div class="flex_around" style="margin-top: 15px;">
                        <button class="ui_inline_click" @click="remark">重做</button>
                        <button class="ui_inline_click" @click="handleContinue">继续</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "alert",
        data(){
            return {
                show: false
            }
        },
        methods: {
            open(){
                this.show = true;
            },
            close(){
                this.show = false;
            },
            handleContinue() {
                this.show = false;
                // router.app.$router.push('/exam/JHtest?moduleSort='+router.app.$route.query.moduleSort+'&examId=' + router.app.$route.query.examId)
            },
            remark() {
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    .continue {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /*width: 80px;*/
        /*height: 80px;*/
        /*transform: translate(-50%, -50%);*/
        background-color: transparent;
        color: #fff;
        text-align: center;
        /*line-height: 80px;*/
        z-index: 9999!important;

    }
    .alert_box {
      /*  width: 68%;
        height: 21%;
        max-width: 255px;
        max-height: 139px;*/
        padding: 25px 32.5px 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,0);
        background: #FFFFFF;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        border-radius: 8px;
        /*background-color: red;*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .alert_box p{
        font-size: 17px;
        color: #032141;
        letter-spacing: 2px;
        text-align: center;
        line-height: 30px;
        padding-top: 20px;
        padding-bottom: 5px;
    }
    .alert_box .txt{
        white-space: nowrap;
    }
    .alert_box button{
        font-size: 17px;
        outline: none;
        border: 0;
        background: transparent;
        letter-spacing: 2px;
        font-weight: 600;
    }
    .alert_box button:first-child{
        color: #A7A7A7 !important;

    }
    .alert_box button:last-child{
        color: #477BB4;
    }
    .alert_box .close{
        display: inline-block;
        position: absolute;
        top: 8px;
        right: 1%;
        height: 20px;
        width: 20px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: 0.3s ease-out;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>

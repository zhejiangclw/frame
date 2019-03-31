<template>
    <div class="progress_bar bd_radius_8 bg_fff box_bdbox flex_between">
        <span class="flex">
            <span class="current">{{current+1}}</span>
            <span class="sum">/{{sum}}</span>
        </span>
        <div class="progress_bar_sum bg_e3e3e3">
            <div class="progress_bar_now" :style="{'width': (current+1)/sum*100 + '%'}"></div>
        </div>
        <div class="flex_between">
            <span class="clock"></span>
            <span class="time">{{timeShow}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['current', 'sum', 'timeShow'],
        name: "progressBar",
    }
</script>

<style scoped>
    /*进度条*/
    .progress_bar{
        height: 56px;
        padding: 30px 20px;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.20);
    }
    .progress_bar .progress_bar_sum, .progress_bar .progress_bar_now{
        height: 8px;
        width: 100%;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 16px;
        flex: 1;
    }
    .progress_bar .progress_bar_now{
        width: 60%;
        background: #4B8099;
        position: relative;
    }
    .progress_bar .progress_bar_now::after{
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background: #4B8099;
        position: absolute;
        top: -10px;
        right: 0;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .current{
        font-size: 14px;
        color: #030303;
        letter-spacing: 0;
        font-weight: 600;
        margin-top: -3px;
    }
    .sum{
        font-size: 10px;
        color: #030303;
        letter-spacing: 0;
        margin-right: 10px;
    }
    .clock{
        width: 10px;
        height: 10px;
        display: inline-block;
        background-image: url('./icon_clock.png');
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        margin-right: 5px;
        margin-left: 10px;
    }
</style>

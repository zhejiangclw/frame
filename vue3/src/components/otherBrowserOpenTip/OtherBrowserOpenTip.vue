<template>
    <div class="tip-warp" v-show="visible">

    </div>
</template>

<script>
    export default {
        name: "other-browser-open-tip",
        props: ['visible'],
        mounted() {



        },
        methods: {

        }
    }
</script>
<style>
    .fixed{
        /*position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;*/
        overflow: hidden;
        height: 100%;
    }
</style>
<style scoped lang="scss">
    /*修正距离和修正层级*/
    $amend-width: 20px;
    $amend-z-index: 3001;
    .tip-warp{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.6);
        background-image: url("./timg.png");
        -webkit-background-size: 330px 199px;
        background-size: 330px 199px;
        background-position: calc(100vw - 330px - #{$amend-width}) 0;
        background-repeat: no-repeat;
        z-index: $amend-z-index;
        overflow: hidden;
    }

</style>

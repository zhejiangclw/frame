<template>
    <div class="home">
        <div class="bili-header">
            <div class="nav-bg"></div>
            <div class="nav-mask"></div>
            <div class="nav-menu">
                <div class="nav-wrapper flex_between">
                    <div class="nav-con right">
                        <ul class="flex">
                            <li class="nav-item home">
                                <a href="//www.bilibili.com" title="主站">主站</a>
                            </li>
                            <li class="nav-item vue">
                                <a href="//www.bilibili.com/audio/home/?type=10" title="vue" target="_blank">vue</a>
                                <div class="i-frame" style="width: 680px; height: 260px; display: none;">
                                    <iframe src="https://www.bilibili.com/page-proxy/game-nav.html" frameborder="0"
                                            width="100%" height="100%"></iframe>
                                </div>
                            </li>
                            <li class="nav-item js">
                                <a href="//h.bilibili.com" title="js" target="_blank">js</a>
                            </li>
                            <li class="nav-item css">
                                <a href="//game.bilibili.com" title="vue" target="_blank">css</a>
                                <div class="i-frame" style="width: 528px; height: 266px; display: none;">
                                    <iframe src="https://live.bilibili.com/blackboard/dropdown-menu.html"
                                            frameborder="0" width="100%" height="100%"></iframe>
                                </div>
                            </li>
                            <li class="nav-item frame">
                                <a href="//www.bilibili.com" title="vue" target="_blank">框架</a>
                            </li>
                            <li class="nav-item extend">
                                <a href="//www.bilibili.com" title="vue" target="_blank">插件</a>
                                <div class="bili-qrcode-box"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-con left">
                        <ul class="flex">
                            <li class="nav-item space">
                                <a href="//space.bilibili.com" target="_blank" class="t">
                                    <div class="i-face scale-in">
                                        <i class="legalize small-vip"></i>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item big">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    大会员
                                </a>
                            </li>
                            <li class="nav-item big">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    动态
                                </a>
                            </li>
                            <li class="nav-item big">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    稍后再看
                                </a>
                            </li>
                            <li class="nav-item big">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    收藏
                                </a>
                            </li>
                            <li class="nav-item big">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    历史
                                </a>
                            </li>
                            <li class="nav-item upload">
                                <a href="//account.bilibili.com/account/big" target="_blank" class="t">
                                    投稿
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .bili-header{
        font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
        position: relative;
        width: 100%;
        height: 170px;
        background-image: url('./../assets/img/bili_bg1.png');
        background-position: center -10px;
        background-repeat: no-repeat;
        overflow: hidden;
        .nav-bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 42px;
            background-image: url('./../assets/img/bili_bg1.png');
            background-position: center -10px;
            background-repeat: no-repeat;
            filter: blur(4px);
            z-index: 199;
        }
        .nav-mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 42px;
            background-color: hsla(0,0%,100%,.4);
            box-shadow: 0 1px 2px rgba(0,0,0,.1);
            z-index: 200;
        }
        .nav-menu{
            margin: 0 auto;
            width: 960px;
            position: relative;
            z-index: 200;
            height: 42px;
            color: #222;
            .nav-wrapper{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 201;
                .nav-con.right ul li,.nav-con.left ul li{
                    padding: 0 10px;
                    text-align: center;
                    line-height: 42px;
                    height: 42px;
                    position: relative;
                    background-color: hsla(0,0%,100%,0);
                }
                .nav-con.left ul li.upload{
                    margin-left: 10px;
                    display: block;
                    padding: 0 20px;
                    height: 46px;
                    line-height: 42px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    background-color: #f45a8d;
                    border-radius: 0 0 6px 6px;
                }
            }

        }
    }
</style>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'


    export default {
        name: 'home',
        components: {
            HelloWorld,
        },
        mounted() {
            // OboTip.open()

        },
        methods: {
            open() {
                // this.$oboTip.open()
            }
        }
    }
</script>

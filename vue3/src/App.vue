<template>
    <div id="app">
        <div id="nav" v-show="navShow">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/extend/extend">插件区</router-link>
            |
            <router-link to="/directives/directives">指令区</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default{
        data() {
            return {

            }
        },
        computed:{
            navShow() {
                return this.$store.state.navShow;
            }
        }
    }
</script>
<style lang="scss">
    @import "assets/css/universal.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            padding: 10px;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

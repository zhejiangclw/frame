<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <button @click="open">测试</button>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'



    export default {
        name: 'home',
        components: {
            HelloWorld,
        },
        mounted(){

            // OboTip.open()
        },
        methods: {
            open() {
                // this.$oboTip.open()
            }
        }
    }
</script>

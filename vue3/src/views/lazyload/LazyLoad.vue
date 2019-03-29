<template>
    <div>
        <ul>
            <li class="" v-for="count in 10" v-lazy-container="{ selector: 'img', error: './bg1.png', loading: './bg1.png' }">
                <img :data-src="'https://picsum.photos/200/300/?'+count" alt="" width="200" height="300">
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueLazyload from 'vue-lazyload'

    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: './bg1.png',
        loading: './bg1.png',
        attempt: 1
    })
    export default {
        name: "lazy-load"
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <h1>这是所有拓展指令的展示区</h1>
        <ul>
            <li>
                <button
                    v-prevent-re-click
                    class="btn_init ui_inline_click bd_radius_8 pd_20"
                    style="background-color:skyblue;">
                    防连点指令
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "directives"
    }
</script>

<style scoped>

</style>

<template>
    <div class="mainpage">
        <div class="app-header">
            <app-header></app-header>
        </div>
        <div class="content">
            <img src="@/assets/who_logo.png">
        </div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"
    export default {
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
        }

    }
</script>

<style>
    .content{
        position: relative;
        width: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 350px;
    }
</style>
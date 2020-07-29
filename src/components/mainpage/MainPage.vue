<template>
    <div class="mainpage">
        <div class="app-header">
            <app-header></app-header>
        </div>
        <menu-bar></menu-bar>
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
    import MenuBar from "@/components/common/MenuBar";
    export default {
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
            'menu-bar':MenuBar
        }

    }
</script>

<style>
    .content{
        width: 350px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 350px;
    }
</style>
<template>
    <div class="mainpage">
        <div class="app-header">
            <app-header></app-header>
        </div>
        <div class="sidebar">
            <side-bar></side-bar>

        </div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>




<script>
    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"
    import SideBar from "@/components/common/MenuBar"
    export default {
        components: {
            'side-bar' : SideBar,
            'app-footer' : AppFooter,
            'app-header':AppHeader
        }
    }
</script>
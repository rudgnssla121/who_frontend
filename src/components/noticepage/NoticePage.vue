<template>
    <div class="noticepage">
        <div class="app-header">
            <app-header></app-header>
        </div>
            <div class="sidebar" >
                <side-bar></side-bar>
            </div>
            <notice-board></notice-board>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>




<script>
    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"
    import SideBar from "@/components/common/MenuBar"
    import NoticeBoard from "./NoticeBoard";

    export default {
        components: {
            'side-bar' : SideBar,
            'app-footer' : AppFooter,
            'app-header':AppHeader,
            'notice-board':NoticeBoard
        }
    }
</script>

<style>


</style>
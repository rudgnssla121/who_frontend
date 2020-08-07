<template>
    <div class="noticepage">
        <div class="app-header">
            <app-header></app-header>
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
    import NoticeBoard from "./NoticeBoard";

    export default {
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
            'notice-board':NoticeBoard
        }
    }
</script>

<style>


</style>
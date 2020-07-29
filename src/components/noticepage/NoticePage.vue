<template>
    <div class="mainpage">
        <div class="app-header">
            <app-header></app-header>
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
            'app-header':AppHeader
        }
    }
</script>
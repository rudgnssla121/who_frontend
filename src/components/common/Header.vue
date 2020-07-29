<template>
    <div class="header">
        <div class="who-logo">
            <router-link :to="{name:'main'}"><img src='@/assets/who_logo.png'> </router-link>
        </div>

        <div class="btn">
            <div class="loginbtn">
                <v-btn class="mr-4" @click="gotoUrl(logout)">로그아웃</v-btn>
            </div>
            <div class="signupbtn">

            </div>
        </div>
    </div>
</template>

<script>
    import MenuBar from "@/components/common/MenuBar.vue"

    export default {
        data:function(){
            return{
                loginUrl: '/login',
                signupUrl: '/signup',
                logout: '/login'
            }
        },
        methods:{
            gotoUrl(url){
                this.$router.push(url);
            }
        },
        components: {
            'menu-bar' : MenuBar
        },

    }
</script>

<style>
    .who-logo{
        float:left;
        margin: 15px;
    }

    .btn{
        position: relative;
        float: right;
        margin-right: 15px;
        margin-top: 15px;
    }
    .loginbtn{
        float: left;
        margin-right: 10px;
    }
    .signupbtn{
        float: left;
    }
</style>
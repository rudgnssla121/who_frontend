<template>
    <div class="header">
        <div class="who-logo">
            <router-link :to="{name:'mainpage'}"><img src='@/assets/who_logo.png'> </router-link>
        </div>

        <div class="btn">
            <div class="loginbtn">
                <v-btn class="white--text" @click="gotoUrl(logout)" color="#5c6bc0">로그아웃</v-btn>
            </div>
            <div class="signupbtn">

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data:function(){
            return{
                loginUrl: '/login',
                logout: '/login'
            }
        },
        methods:{
            gotoUrl(url){
                this.$router.push(url);
                localStorage.removeItem("pass");
            }
        },
        components: {

        },

    }
</script>

<style scoped>
    .header{
        height: 100px;
        width: 100%;
        clear: both;
        border-bottom: 4px solid #5c6bc0;
    }
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
    .mr-4 v-btn v-btn--contained theme--light v-size--default{
        color: white !important;
    }
</style>
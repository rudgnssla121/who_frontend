<template>
    <div class="noticewordpage">
        <div class="app-header">
            <app-header></app-header>
        </div>
        <div class = "contentform">
            <div class = "contentname">
                <h1>  공지사항  </h1>
                <div class = "contenttime">
                    <p>시간 : {{noticecontent.time}}</p>
                </div>
                <hr>
                <div class = "name">
                    <h2>제목 : {{noticecontent.name}}</h2>
                </div>
            </div>
            <br>
            <div class = "contenttitle">
                <p>{{noticecontent.content}}</p>
            </div>
            <div class="backbtn">
                <v-btn class="white--text" @click="gotoUrl()" color="#5c6bc0">목록으로</v-btn>
            </div>
        </div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>

    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"
    import noticeAPI from "@/api/notice"


    export default {
        created() {
            this.index = this.$route.params.noticeindex;
            noticeAPI.listFind(this.index)
              .then(result => {
                  this.noticecontent = result.data;
              })
        },

        data:()=>({
            noticecontent : {},
            listback:'/noticepage',
            index:0
        }),
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
        },
        methods:{
            gotoUrl(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .contentform{
        overflow-x: auto;
        height: calc(100vh - 60px);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 66%;
        margin-left: auto;
        margin-right: auto;
    }
    .backbtn{
        position: absolute;
        bottom: 10%;
    }
    .contenttitle{
        width: 100%;
        height: 400px;
        border: 1px solid black;
    }
</style>
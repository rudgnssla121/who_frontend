<template>
    <div class="noticewordpage">

        <div class = "contentform">
            <div class = "contentname">
                <h1>  공지사항  </h1>
                <div class = "contenttime">
                    <p>시간 : {{boardContent.noticecontent.date + ' ' + boardContent.noticecontent.time}}</p>
                </div>
                <hr>
                <div class = "name" style="margin-bottom: 5px;margin-top: 5px;}">
                    <h2>제목 : {{boardContent.noticecontent.name}}</h2>
                </div>
            </div>
            <div class = "contenttitle">
                <p style="margin-top: 10px;">{{boardContent.noticecontent.content}}</p>
            </div>
            <div class="backbtn">
                <v-btn class="white--text" @click="gotoBackUrl()" color="#5c6bc0" style="margin-right:15px">목록으로</v-btn>
                <v-btn v-if="userID == boardContent.noticecontent.username" class="white--text" style="margin-right:15px" @click="gotoUrl(modifyname)" color="#5c6bc0">수정하기</v-btn>
                <v-btn v-if="userID == boardContent.noticecontent.username" class="white--text" @click="deletenotice()" color="#5c6bc0">삭제하기</v-btn>
            </div>
        </div>

    </div>
</template>

<script>
    import noticeAPI from "@/api/notice"


    export default {
        created() {
            this.userID = localStorage.getItem('userID');
            this.boardContent.index = this.$route.params.noticeindex;
            noticeAPI.listFind(this.boardContent.index)
              .then(result => {
                  this.boardContent.noticecontent = result.data;
              })
        },

        data:()=>({
            boardContent : {
              noticecontent : {},
              index:0,

            },
            modifyname:'noticemodify',
            userID: ''
        }),
        components: {
        },
        methods:{
            gotoUrl(url){
                this.$router.push({name:url, params: {noticelistindex: this.boardContent.index}});
            },
            gotoBackUrl(){
                this.$router.go(-1);
            },
            deletenotice(){
              noticeAPI.listDelete(this.boardContent.index)
                  .then()
                      this.$router.push('/noticepage');
            }
        }
    }
</script>

<style scoped>
    .contentform{
        overflow-x: auto;
        height: calc(100vh - 95px);
        flex: 1;
        width: 66%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    .backbtn{
        position: relative;
        margin-top: 20px;
    }
    .contenttitle{
        width: 100%;
        height: 400px;
        border: 1px solid black;
        border-left:none;
        border-right:none;
    }
</style>
<template>
    <div class="noticeboard">
        <v-simple-table fixed-header height="600px">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left" width="200px">작성자</th>
                    <th class="text-left" width="700px">제목</th>
                    <th class="text-left" width="200px">시간</th>
                </tr>
                </thead>
                <tbody>
                <tr style="cursor:pointer;" @click="clickNotice(index)" v-for="(item,index) in calData" :key="index">
                        <td>{{ item.username }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.date + ' ' + item.time }}</td>
                </tr>
                </tbody>
            </template>

        </v-simple-table>
        <div class="addbtn" style="float: right; margin-right: 15px">
            <v-btn class="white--text" @click="gotoUrl(noticeadd)" color="#5c6bc0">글쓰기</v-btn>
        </div>
        <div class="paging">
            <div class="text-center">
                <v-pagination
                        v-model="PageNum"
                        :length="numOfPages"
                ></v-pagination>
            </div>

        </div>



    </div>

</template>

<script>

    import noticeAPI from "@/api/notice"

    export default {
      created() {
        noticeAPI.listView()
            .then(result => {
              this.noticedata = result.data;
            })

      },
      data: () => ({
            noticedata : [],
            dataPerPage: 10,
            PageNum: 1,
            noticeadd: 'noticeadd',
        }),
        methods:{
            gotoUrl(url){
                this.$router.push(url);
            },
            clickNotice(index){
                this.$router.push({ name: 'noticewordpage', params: {noticeindex: this.realpage+index}})
            }
        },
        computed: {
            startOffset() {
                return ((this.PageNum - 1) * this.dataPerPage);
            },
            endOffset() {
                return (this.startOffset + this.dataPerPage);
            },
            numOfPages() {
                return Math.ceil(this.noticedata.length / this.dataPerPage);
            },
            calData() {
                return this.noticedata.slice(this.startOffset, this.endOffset)
            },
            realpage(){
                let realNum = (this.PageNum-1)*this.dataPerPage;
                return realNum;
            }
        },
    }
</script>

<style scoped>

    .noticeboard{
        overflow-x: auto;
        height: calc(100vh - 75px);
        flex: 1;
    }
    .v-application a{
        color:black !important;
        text-decoration:none;
    }
</style>
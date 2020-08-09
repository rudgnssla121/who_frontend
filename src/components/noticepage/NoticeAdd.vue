<template>
    <div class="noticeadd">
        <div class ="noticeaddform">
            <v-form>
                <v-container>
                    <v-row>
                        제목
                    </v-row>
                    <v-row>
                        <v-text-field
                                :counter="50"
                                label="제목을 입력해주세요."
                                name="title"
                                required="required"
                                v-model="title"
                                maxlength="50"></v-text-field>
                    </v-row>
                    <v-row>
                        내용
                    </v-row>
                    <v-row>
                        <v-textarea
                                filled="filled"
                                name="content"
                                hint="내용을 입력해주세요."
                                v-model="content"
                                :counter="1000"
                                height="450px"
                                maxlength="1000"></v-textarea>
                    </v-row>
                    <v-row>
                        <div class="btn">
                            <v-btn block="block" outlined="outlined" color="blue" @click="addClick">
                                등록
                            </v-btn>
                        </div>
                    </v-row>
                </v-container>
            </v-form>
        </div>

    </div>
</template>



<script>
import noticeAPI from "@/api/notice"

    export default {
        data:()=>({
            title: '',
            content: '',
        }),
        components: {
        },
        methods:{
            addClick(){
              var temp = {
                username : localStorage.getItem('userID'),
                name : this.title,
                content : this.content
              }
              noticeAPI.listAdd(temp)
                .then(
                  this.$router.push('/noticepage')
                )

            }
        }
    }
</script>

<style scoped>
    .container{
        width: 95%;
        margin-top: 20px;
    }

    .noticeaddform{
        overflow-x: auto;
        height: calc(100vh - 75px);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

</style>
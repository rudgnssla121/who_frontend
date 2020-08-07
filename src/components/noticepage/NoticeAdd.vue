<template>
    <div class="noticeadd">
        <div class="app-header">
            <app-header></app-header>
        </div>
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
                                name="context"
                                hint="내용을 입력해주세요."
                                v-model="context"
                                :counter="1000"
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
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>




<script>
    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"

    export default {
        data:()=>({
            title: '',
            context: '',
        }),
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
        },
        methods:{
            addClick(){
                this.$router.push('/noticepage');
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
        height: calc(100vh - 60px);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

</style>
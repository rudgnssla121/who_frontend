<template>
  <div class="noticemodify">

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
            <v-btn block="block" outlined="outlined" color="blue" @click="modifyClick">
              수정하기
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </v-form>

  </div>
</template>

<script>
import noticeAPI from "@/api/notice"


export default {
  created() {
    this.boardContent = this.$route.params.boardContent;
    noticeAPI.listFind(this.index)
        .then(result => {
          this.noticecontent = result.data;
        })
  },

  data:()=>({
    boardContent : {},
  }),
  components: {
  },
  methods:{
    gotoUrl(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.noticemodify{
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
}
</style>
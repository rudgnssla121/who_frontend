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
              name="title"
              required="required"
              v-model="noticecontent.name"
              maxlength="50"></v-text-field>
        </v-row>
        <v-row>
          내용
        </v-row>
        <v-row>
          <v-textarea
              filled="filled"
              name="content"
              v-model="noticecontent.content"
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
    this.noticecontent.index = this.$route.params.noticelistindex;
    noticeAPI.listFind(this.noticecontent.index)
        .then(result => {
          this.noticecontent.username = result.data.username;
          this.noticecontent.name = result.data.name;
          this.noticecontent.content = result.data.content;
          this.noticecontent.time = result.data.time;
          this.noticecontent.date = result.data.date;

        })
  },

  data:()=>({
    noticecontent:{
      username:'',
      name:'',
      content:'',
      time:'',
      date:'',
      index : 0,
    }
  }),
  components: {

  },
  methods:{
    modifyClick(){
      var temp = {
        noticecontent : this.noticecontent
      }
      noticeAPI.listModify(temp)
          .then();
      this.$router.push({name:'noticepage'});
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

</style>
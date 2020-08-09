<template>
  <transition name="modal" v-if="visible">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              찾으시는 ID는
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{ findId }}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('update:visible', !visible)">
                확인
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        require: true,
        default: false
      },
      title: {
        type: String,
        require: false,
      },
    },
    computed:{
      findId(){
        let name = '';
        console.log(this.title);
        if(this.title == ''){
          name = "없습니다";
        }
        else {
          name = `${this.title} 입니다`;
        }
        return name;
      }
    }
  }

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 150px;
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
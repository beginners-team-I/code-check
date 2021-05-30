<template>
<div>
  <button v-on:click="clickEvent(isClicked)" class="button is-white white-space"> {{ codeElement }} </button>
  <div v-if="isClicked">
    <div v-if="!isSend">
      <input class="input is-primary" type="text" v-model="message" placeholder="質問の内容を入力してください">
      <br>
      <button class="button is-success" v-on:click="sendMessage()">メッセージを送る</button>
    </div>
    <div v-else>
      <div class="husen">{{ message }}</div>
       <button class="button is-danger" v-on:click="deleteMessage()">削除</button>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.code-layout{
  text-align: left
}
.white-space{
  white-space: pre-wrap; 
}
</style>

<script>
export default {
  data() {
    return {
      isClicked: false,
      message:"",
      isSend: false
    };
  },
  watch: {
    codeElement: function () {
     this.message = ""
    }
  },
  props: {
    codeElement: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickEvent(isClicked){
      this.isClicked = !this.isClicked
    },
    sendMessage(){
      this.isSend = true;
    },
    deleteMessage(){
      this.isClicked = !this.isClicked
      this.isSend = false;
    }
  }
}
</script>

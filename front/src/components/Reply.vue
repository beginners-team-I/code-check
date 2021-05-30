<template>
<div>
  <div v-if="!isSend">
    <input class="input is-primary margin-text" type="text" v-model="message" placeholder="質問の内容を入力してください">
    <br>
    <button class="button is-success" v-on:click="sendMessage()">メッセージを送る</button>
  </div>
  <div  class="margin-text" v-else>
     <div class="husen">{{ message }}</div>
    <button class="button is-info" v-on:click="sendReply()">返信</button>
    <button class="button is-danger" v-on:click="deleteMessage()">削除</button>
    <div v-if="isReplyed">
      <Reply></Reply>
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
.margin-text{
  margin: 0.5em 0em
}
.fusen-design{
  border-style: solid; 
  border-color: red;
}
</style>

<script>
import Reply from "@/components/Reply.vue";

export default {
  data() {
    return {
      isClicked: false,
      message:"",
      isSend: false,
      isReplyed: false
    };
  },
  watch: {
    codeElement: function () {
     this.message = ""
    }
  },
  name: "Reply",
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
    },
    sendReply(){
      this.isReplyed = !this.isReplyed
    }
  }
}
</script>

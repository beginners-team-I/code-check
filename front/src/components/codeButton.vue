<template>
<div>
  <button v-on:click="clickEvent(isClicked)" class="button is-white white-space"> {{ codeElement }} </button>
  <div v-if="isClicked">
    <div v-if="!isSend">
      <input class="input is-primary margin-text" type="text" v-model="message" placeholder="質問の内容を入力してください">
      <br>
      <button class="button is-success" v-on:click="sendMessage()">メッセージを送る</button>
    </div>
    <div class="box" v-else>
      <div class="husen">{{ message }}</div>
      <br>
      <button class="button is-info" v-on:click="sendReply()">返信</button>
      <button class="button is-danger" v-on:click="deleteMessage()">削除</button>
      <div v-if="isReplyed">
        <Reply></Reply>
      </div>
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
  components:{
    Reply
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
    },
    sendReply(){
      this.isReplyed = !this.isReplyed
    }
  }
}
</script>

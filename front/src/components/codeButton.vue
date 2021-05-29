<template>
<div>
  <button v-on:click="clickEvent(isClicked)" class="button is-white white-space"> {{ codeElement }} </button>
  <div v-if="isClicked">
    <div v-if="!isSend">
      <textarea v-model="message" placeholder="質問の内容を入力してください"></textarea>
      <br>
      <button v-on:click="sendMessage()">メッセージを送る</button>
    </div>
    <div v-else>
      {{ message }}
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
      this.isClicked = true
    },
    sendMessage(){
      this.isSend = true;
    }
  }
}
</script>

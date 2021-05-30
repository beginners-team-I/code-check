<template>


<div>
  <textarea class="textarea" rows="10" v-model="code" placeholder="質問したいプログラムを入力してください"></textarea>
  <div class="code-layout" v-for="codeElement in codeArray">
    <comment :codeElement="codeElement"></comment>
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
import comment from "@/components/codeButton.vue";

export default {
  watch: {
    code: function (code) {
      this.insertCodeArray(code)
    }
  },
  auth: false,
  head () {
    return {
      title: 'コードチェック',
    }
  },
  data() {
    return {
      code: '',
      codeArray: [],
    };
  },
  components: {
    comment
  },
  methods: {
    insertCodeArray(code){
       this.codeArray  = code.split(/\r\n|\n/);
    },
  }
}
</script>

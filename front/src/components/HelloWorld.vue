<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button @click="postCode">データ取得</button>
    <p>{{ kin }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      kin: ''
    }
  },
  props: {
    msg: String,
  },
  methods: {
    
    async post() {
      const kintoneData = await axios.post('http://localhost:3000/getCode', {createrName:"kojimakenta",codeName:"testPost.cpp",});

      this.kin = kintoneData;
    },
    async postCode() {
      const kintoneData = await axios.post('http://localhost:3000/postCode', {createrName:"kojimakenta",codeName:"testPost.cpp",});

      this.kin = kintoneData;
    }
  }
  
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
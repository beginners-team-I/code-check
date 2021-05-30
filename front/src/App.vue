<template>

  <div id="app">
         <header class="navbar">

          <div class="navbar-brand">
              <span class="navbar-item">
                  <span class="fa fa-language"></span><span class="icon-text">
  <span class="icon">
    <i class="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
              </span>
          </div>


          <div class="navbar-end">
            <div class="navbar-item">
                <div class="field has-addons">
                  <div class="control">
                      <input class="input" type="text" name="search" placeholder="キーワード検索">
                  </div>
                  <div class="control">
                      <a class="button is-info"><i class="fa fa-search"></i>検索</a>
                  </div>
                </div>
              </div>
           
            <div class="navbar-item">
              <a href="#"><i class="fa fa-user"></i>ログアウト</a>
            </div>
          </div>

      </header>

<!-- <style>
      main {
        background-color: #eeeeee;
      }
    </style> -->
   
<div class="hero is-info is-bold">
  <div class="hero-body">
      <div class="container">
         <h1 class="title">Sticky code</h1>
         <h2 class="subtitle">@UNISYS Hackathon</h2>
      </div>
  </div>
</div>




<main class="columns">
      <div class="submenu column is-2">
        <br>
        <div class="notification is-info">
          <button class="delete"></button>
          右のボックスにコードを入力してください
        </div>
        </div>

        <div class="column is-8">
        <!-- <div class="main-margin"> -->
      <router-link to="/codeCheck">codeCheck</router-link>
      <router-view />
      <!-- </div> -->
    </div>
  
 </main>


    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          2021 ©Team beginers
        </div>
      </div>
   </footer>




 </div>



</template>

<style lang="scss">
@import "./node_modules/bulma/bulma.sass";
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-margin{
  margin: 0em 30em
}
footer {
    background: #333333;
    // color: #ffffff;
    height: 40px;
}
</style>

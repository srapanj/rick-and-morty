<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components:{
    'navbar': () =>import('@/components/Navbar.vue')
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
    font-family: "Nunito", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

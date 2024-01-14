<template>
  <a href= "/">MB-Performance</a>
  <img alt="Vue logo" src="./assets/Logo2.jpg">
  <!--<Home msg="Welcome to your MB-Performance Application"/>-->
  <router-view/>

</template>

<script>
//import Home from './components/Home.vue'
//import NewUser from './components/NewUser.vue'

//export default {
  //name: 'App',
  //components: {
    //Home,
    //NewUser
  //}
//}
</script>

<style>
/*
body{
  background-image: url("@/assets/Logo2.jpg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
*/
img {
  max-width: 100%;
  height: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

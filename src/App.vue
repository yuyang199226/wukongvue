<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to='/'></router-link>
    <!-- <router-link to='/computers'>电脑</router-link> -->
    <!-- <router-link to='/phones'>手机</router-link> -->
      <router-view></router-view>
      <!-- <headrr></headrr> -->
  </div>
</template>

<script>
import xxx from '@/components/signup'
export default {
  name: 'app',
  // components:{
  //   'headrr':xxx
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

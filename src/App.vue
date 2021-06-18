<template>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <the-header></the-header>
  <div class="router-view">
 <router-view></router-view>
 <the-footer></the-footer>
  </div>
  


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheHeader,
    TheFooter

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: auto;
}

</style>

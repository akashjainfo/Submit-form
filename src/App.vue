<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloHome />
  </div>
</template>

<script>
import HelloHome from "./components/HelloHome.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HelloHome 
     }
};
</script>

<style>
 #app { 
  
  border: 10px,solid,green;
  border-radius: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
} 
</style>

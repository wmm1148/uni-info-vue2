<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link :to="{ name: 'Student'}">Student</router-link> |
      <router-link :to="{ name: 'Teacher'}">Teacher</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style  lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
#nav {
  padding: 20px;
  background: #2c3e50;

  a {
    font-weight: bold;
    color: #b7c0bf;

    &.active {
      color: #17c7e6;
    }
    // &.router-link-exact-active {
    //   color: #17c7e6;
    // }
  }
}
</style>

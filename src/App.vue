<template>
  <div id="app">
    <v-navbar />
    <router-view/>
  </div>
</template>

<script>
import vNavbar from './components/v-navbar'

export default {
  components: {
    vNavbar
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.block {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #2c3e50;
  min-height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #031b27;
  }
}
</style>

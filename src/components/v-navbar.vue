<template>
  <section class="navbar">
    <header>
      <router-link class="logo" to="/">LOGO</router-link>
      <ul class="navigation">
        <li><router-link to="/">Посты</router-link></li>
        <li><router-link to="/create">Добавить</router-link></li>
        <li><router-link to="/by">{{ STATUS.status ? 'PRO' : 'FREE' }}</router-link></li>
      </ul>
    </header>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'STATUS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_STATUS',
    ]),
  },
  mounted() {
    this.GET_STATUS()
  }
}
</script>

<style lang="scss">
.navbar {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 90px; 
  header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      position: relative;
      max-width: 150px;
      color: #fff;
    }
    .navigation {
      position: relative;
      display: flex;
      li {
        list-style: none;
        a {
          display: inline-block;
          color: #fff;
          font-weight: 500;
          text-decoration: none;
          margin-left: 40px;
          &.router-link-exact-active {
            color: #42b983;
          }
        }
      }
    }
  }
}
</style>


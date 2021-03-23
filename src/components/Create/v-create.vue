<template>
  <div class="v-create">
    <v-pro-create v-if="STATUS.status == true" />
    <v-free-create v-if="STATUS.status == false" />
  </div>
</template>

<script>
import vProCreate from './v-pro-create'
import vFreeCreate from './v-free-create'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    vProCreate, vFreeCreate
  },
  computed: {
    ...mapGetters([
      'STATUS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_STATUS'
    ]),
  },
  mounted() {
    this.GET_STATUS()
  }
}
</script>

<style lang="scss">
.v-create {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
}
.btn-grup {
  width: 120px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #2c3e50;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
  }
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  min-height: 450px;
  padding: 20px;
  input {
    background: rgba(255, 255, 255, 0.05);
    padding: 10px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  textarea {
    background: rgba(255, 255, 255, 0.05);
    padding: 10px;
    border-radius: 4px;
  }
  .material-icons {
    cursor: pointer;
  }
  .link {
    color: #fff;
  }
}
</style>
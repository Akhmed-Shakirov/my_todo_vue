<template>
  <div class="v-home row-c">
    <h3 v-if="PROPOSTS.length > 0 && STATUS.status == true">Список с подпунктом</h3>
    <v-pro-post 
      v-for="(propost, index) in PROPOSTS" 
      :key="propost.index"
      :propost_data="propost"
      :index="index"
    />
    <h3 v-if="FREEPOSTS.length > 0">Список с описанием</h3>
    <v-free-post
      v-for="(freepost, index) in FREEPOSTS" 
      :key="freepost.index"
      :freepost_data="freepost"
      :index="index"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vProPost from './v-pro-post'
import vFreePost from './v-free-post'

export default {
  components: {
    vProPost, vFreePost
  },
  computed: {
    ...mapGetters([
      'FREEPOSTS',
      'PROPOSTS',
      'STATUS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_FREEPOSTS',
      'GET_PROPOSTS',
      'GET_STATUS'
    ])
  },
  mounted() {
    this.GET_FREEPOSTS()
    this.GET_PROPOSTS()
    this.GET_STATUS()
  }
}
</script>

<style lang="scss">
.v-home {
  padding-bottom: 40px;
}
  .blocks {
    margin: 10px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 500px;
    min-height: 50px;
    .header {
      display: flex;
      justify-content: space-between;
      input {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        color: #fff;
        border: 1px solid #fff;
        border-radius: 2px;
        padding: 5px;
      }
      h2 {
        padding-right: 10px; 
        border-right: 3px solid #fff;
        border-radius: 10px;
        margin-right: 20px;
      }
      .material-icons {
        cursor: pointer;
      }
    }
    .content {
      padding: 10px;
      .par {
        margin: 20px;
        text-align: left;
      }
      textarea {
        padding: 5px;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      label {
        padding: 10px;
        display: flex;
        align-items: center;
        .editC {
          background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        color: #fff;
        border: 1px solid #fff;
        border-radius: 2px;
        padding: 5px;
        width: 100%;
        }
        input[type="checkbox"] {  
          width: 20px;
          height: 20px;
        }
        input[type="checkbox"]:checked ~ i {
          top: 1px;
          border-top: none;
          border-right: none;
          height: 15px;
          width: 25px;
          transform: rotate(-45deg);
        }
        span {
          position: relative;
          left: 10px;
          transition: 0.5s;
          &:before {
            content: '';
            position: absolute;
            top: 50%;
            width: 100%;
            height: 1px;
            background: #fff;
            transform: translateY(-50%) scale(0); 
            transform-origin: right;
            transition: transform 0.5s;
          }
        }
        input[type="checkbox"]:checked ~ span:before {
          transform: translateY(-50%) scale(1); 
          transform-origin: left;
          transition: transform 0.5s;
        }
        input[type="checkbox"]:checked ~ span {
          color: #9e9e9e;
        }
      }
    }
    .fotter {
      padding: 10px;
    }
  }
</style>

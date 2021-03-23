<template>
  <div class="list blocks" v-if="STATUS.status == true">
      <div class="header">
        <div class="row">
          <h2>{{index + 1}}</h2>
          <h3 v-if="!edit">{{propost_data.title}}</h3>
          <input v-if="edit" class="edit" type="text" v-model="propost_data.title">
        </div>
        <div v-if="!edit" @click="show = !show">
          <i v-if="!show" class="material-icons">arrow_downward</i>
          <i v-if="show" class="material-icons">arrow_upward</i>
        </div>
      </div>
      <div class="content" v-if="show"><br>
        <hr><br>
        <v-pro-post-item 
          v-for="list in propost_data.lists"
          :key="list.id"
          :list_data="list"
          :propost_data="propost_data"
          :edit="edit"
        /> <br>
        <hr><br>
        <div v-if="!edit" class="fotter row">
          <div @click="edits" class="btn">Редактировать</div><div @click="deletes" class="btn">Удаличть</div>
        </div>
        <div v-if="edit" class="fotter row">
          <div @click="saves" class="btn">Сохранить</div>
          <div @click="colses" class="btn">Отменить</div>
        </div>
      </div>
    </div>
</template>

<script>
import vProPostItem from './v-pro-post-item'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    vProPostItem
  },
  props: {
    propost_data: {
      type: Object,
      default() {return {}}
    },
    index: {
      type: Number,
      default() {return {}}
    }
  },
  computed: {
    ...mapGetters([
      'STATUS'
    ])
  },
  data() {
    return {
      show: false,
      edit: false,
    }
  },
  methods: {
    ...mapActions([
      'GET_PROPOSTS',
      'EDIT_PROPOST',
      'DELETE_PROPOST',
      'GET_STATUS'
    ]),
    colses() {
      this.edit = false
    },
    edits() {
      this.edit = true
    },
    deletes() {
      let deleteProPost = {
        id: this.propost_data.id
      }
      this.DELETE_PROPOST(deleteProPost)
      .then(() => {
        this.GET_PROPOSTS()
      })
    },
    saves() {
      let saveProPost = {
        id: this.propost_data.id,
        title: this.propost_data.title,
        lists: this.propost_data.lists
      }
      this.EDIT_PROPOST(saveProPost)
      .then(() => {
        this.GET_PROPOSTS()
        this.edit = false
      })
    },
  },
  mounted() {
    this.GET_PROPOSTS()
    this.GET_STATUS()
  }
}
</script>

<style>

</style>
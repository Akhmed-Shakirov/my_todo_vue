<template>
  <div class="list blocks">
    <div class="header">
      <div class="row">
        <h2>{{STATUS.status == true ? PROPOSTS.length + (index+1) : index+1}}</h2>
        <h3 v-if="!edit">{{freepost_data.title}}</h3>
        <input v-if="edit" class="edit" type="text" v-model="freepost_data.title">
      </div>
      <div  v-if="!edit" @click="show = !show">
        <i v-if="!show" class="material-icons">arrow_downward</i>
        <i v-if="show" class="material-icons">arrow_upward</i>
      </div>
    </div>
    <div class="content" v-if="show">
      <div><br>
        <hr>
        <p class="par" v-if="!edit">{{freepost_data.descrition}}</p>
        <textarea v-if="edit" cols="48" rows="6" v-model="freepost_data.descrition"></textarea>
        <hr>
      </div><br>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    freepost_data: {
      type: Object,
      default() {return {}}
    },
    index: {
      type: Number,
      default() {return {}}
    }
  },
  data() {
    return {
      show: false,
      edit: false,
    }
  },
  computed: {
    ...mapGetters([
      'PROPOSTS',
      'STATUS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_FREEPOSTS',
      'EDIT_FREEPOST',
      'DELETE_FREEPOST'
    ]),
    colses() {
      this.edit = false
    },
    edits() {
      this.edit = true
    },
    deletes() {
      let deletePost = {
        id: this.freepost_data.id
      }
      this.DELETE_FREEPOST(deletePost)
      .then(() => {
        this.GET_FREEPOSTS()
        this.show = false
      })
    },
    saves() {
      let savePost = {
        id: this.freepost_data.id,
        title: this.freepost_data.title,
        descrition: this.freepost_data.descrition
      }
      this.EDIT_FREEPOST(savePost)
      .then(() => {
        this.GET_FREEPOSTS()
        this.edit = false
      })
    }
  },
  mounted() {
    this.GET_FREEPOSTS()
  }
}
</script>

<style>
textarea {
  color: #fff;
  border: 1px solid #fff;
  font-size: 16px;
}
</style>
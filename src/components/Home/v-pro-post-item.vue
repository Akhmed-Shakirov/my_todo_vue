<template>
  <label for="">
    <input v-if="!edit" @click="click" type="checkbox" :checked="list_data.activ ? true : false">
    <span v-if="!edit">{{list_data.list}}</span>
    <input v-if="edit" class="editC" type="text" v-model="list_data.list">
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    list_data: {
      type: Object,
      default() {return {}}
    },
    propost_data: {
      type: Object,
      default() {return {}}
    },
    edit: {
      type: Boolean,
      default() {return {}}
    }
  },
  methods: {
    ...mapActions([
      'GET_PROPOSTS',
      'EDIT_PROPOST_ACTIV'
    ]),
    click() {
      this.list_data.activ = !this.list_data.activ
      let edit = {
        id: this.propost_data.id,
        title: this.propost_data.title,
        lists: this.propost_data.lists
      }
      
      this.EDIT_PROPOST_ACTIV(edit)
      .then(() => {
        this.GET_PROPOSTS()
      })
      console.log(edit)

      /* console.log('Id ' + this.propost_data.id + ' Title ' + this.propost_data.title + ' Id ' + this.list_data.id) */
    }
  },
  mounted() {
    this.GET_PROPOSTS()
  }
}
</script>

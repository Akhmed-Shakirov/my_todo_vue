<template>
  <div class="free">
    <div class="block free">
      <label for="">Заголовок:</label><br>
      <input type="text" placeholder="Title" v-model="title"><br>
      <label for="">Описание:</label><br>
      <textarea name="" id="" cols="40" rows="10" placeholder="Description" v-model="descrition"></textarea><br>
      <div @click="addFreePost" class="btn">Добавить</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      descrition: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_FREEPOSTS',
      'ADD_NEW_FREEPOST'
    ]),
    addFreePost() {
      let addPost = {
        title: this.title,
        descrition: this.descrition
      }
      this.ADD_NEW_FREEPOST(addPost)
      .then(() => {
        this.GET_FREEPOSTS()
        this.title = ''
        this.descrition = ''
      })
    },
  },
  mounted() {
    this.GET_FREEPOSTS()
  },
}
/* document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        alert('Нажата клавиша Escape');
        // Как изменить переменную keyDown?
    }
}); */
</script>

<style>

</style>
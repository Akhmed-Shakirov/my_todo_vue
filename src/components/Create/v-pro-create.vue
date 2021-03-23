<template>
  <div class="pro">
    <h2>Задач {{FREEPOSTS.length + PROPOSTS.length}}. Подпунктов {{cartTotal}}</h2><br>

    <div class="row">
      <div @click="freeV" class="btn-grup l row">Список с описанием</div>
      <div @click="proV" class="btn-grup r row">Список с подпунктом</div>
    </div>
 
    <br><div v-if="free" class="block free">
      <label for="">Заголовок:</label><br>
      <input type="text" placeholder="Title" v-model="title"><br>
      <label for="">Описание:</label><br>
      <textarea name="" id="" cols="40" rows="10" placeholder="Description" v-model="descrition"></textarea><br>
      <div @click="addFreePost" class="btn">Добавить</div>
    </div>

    <div v-if="pro" class="block pro">
      <label for="">Заголовок:</label><br>
      <input type="text" placeholder="Title" v-model="titlePro"><br>
      <label for="">С пунктами:</label><br>
      <input type="text" placeholder="1" v-model="list1">
      <input v-if="list > 1" type="text" v-model="list2" placeholder="2">
      <input v-if="list > 2" type="text" v-model="list3" placeholder="3">
      <input v-if="list > 3" type="text" v-model="list4" placeholder="4">
      <input v-if="list > 4" type="text" v-model="list5" placeholder="5"><br>
      <div v-if="list > 4 ? false : true" @click="list++"><i class="material-icons">add</i></div><br>
      <div v-if="list > 4">Хотите болльше ячеек? Купите за <a href="#" class="link">9 990 тг.</a></div><br>
      <div @click="addProPosts" class="btn">Добавить</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      list: 1,
      free: true,
      pro: false,
      title: '',
      descrition: '',
      titlePro: '',
      list1: '',
      list2: '',
      list3: '',
      list4: '',
      list5: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_STATUS',
      'GET_FREEPOSTS',
      'ADD_NEW_FREEPOST',
      'GET_PROPOSTS',
      'ADD_NEW_PROPOST'
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
    addProPosts() {
      let lists = []
      if (this.list1 > 0 || this.list2 == 0 && this.list3 == 0 && this.list4 == 0 && this.list5 == 0) {
        lists = [
          {
            id: 1,
            list: this.list1,
            activ: false
          }
        ]
      } else if (this.list2 > 0 || this.list3 == 0 && this.list4 == 0 && this.list5 == 0) {
        lists = [
          {
            id: 1,
            list: this.list1,
            activ: false
          },
          {
            id: 2,
            list: this.list2,
            activ: false
          },
        ]
      } else if (this.list3 > 0 || this.list4 == 0 && this.list5 == 0) {
        lists = [
          {
            id: 1,
            list: this.list1,
            activ: false
          },
          {
            id: 2,
            list: this.list2,
            activ: false
          },
          {
            id: 3,
            list: this.list3,
            activ: false
          },
        ]
      } else if (this.list4 > 0 || this.list5 == 0) {
        lists = [
          {
            id: 1,
            list: this.list1,
            activ: false
          },
          {
            id: 2,
            list: this.list2,
            activ: false
          },
          {
            id: 3,
            list: this.list3,
            activ: false
          },
          {
            id: 4,
            list: this.list4,
            activ: false
          },
        ]
      } else {
        lists = [
          {
            id: 1,
            list: this.list1,
            activ: false
          },
          {
            id: 2,
            list: this.list2,
            activ: false
          },
          {
            id: 3,
            list: this.list3,
            activ: false
          },
          {
            id: 4,
            list: this.list4,
            activ: false
          },
          {
            id: 5,
            list: this.list5,
            activ: false
          },
        ]
      }
      let addProPost = {
        title: this.titlePro,
        lists: lists
      }
      this.ADD_NEW_PROPOST(addProPost)
      .then(() => {
        this.GET_PROPOSTS()
        this.titlePro = ''
        this.list1 = ''
        this.list2 = ''
        this.list3 = ''
        this.list4 = ''
        this.list5 = ''
      })
    },
    freeV() {
      this.free = true,
      this.pro = false
    },
    proV() {
      this.free = false,
      this.pro = true
    }
  },
  computed: {
    ...mapGetters([
      'STATUS',
      'FREEPOSTS',
      'PROPOSTS'
    ]),
    cartTotal() {
      let result = []

      if (this.PROPOSTS.length) {
        for (let item of this.PROPOSTS) {
          result.push(item.lists.length)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }    
  },
  mounted() {
    this.GET_FREEPOSTS()
    this.GET_STATUS()
    this.GET_PROPOSTS()
  }
}
</script>

<style>

</style>
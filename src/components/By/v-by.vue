<template>
  <div class="v-by">
    <div class="services row row-e">

      <section class="pricecol">
        <div class="icon"><i class="material-icons row">thumb_down_alt</i></div>
        <h3><Span>Free</span></h3>
        <ul>
          <li>Список задач</li>
          <li>Описания задачи</li>
          <li class="row"><i class="material-icons">all_inclusive</i>добавление задач</li>
          <li>0 тг.</li>
        </ul>
        <p class="row">
          <a class="btn"><span>Приобритен</span></a>
        </p>
      </section>
      <section class="pricecol">
        <div class="icon"><i class="material-icons row">thumb_up_alt</i></div>
        <h3><Span>Pro</span></h3>
        <ul>
          <li>Список задач</li>
          <li>Описания задачи</li>
          <li>Подпункты к задачам</li>
          <li>5 подпунктов бесплано</li>
          <li>Админ панель</li>
          <li class="row"><i class="material-icons">all_inclusive</i>добавление задач</li>
          <li>2 500 тг.</li>
        </ul>
        <p class="row">
          <a v-if="STATUS.status == false" @click="by" class="btn"><span>Купить</span></a>
          <a v-if="STATUS.status == true" @click="byConsle" class="btn"><span>Отменить подписку</span></a>
        </p>
      </section>      
      <section class="pricecol">
        <div class="icon"><i class="material-icons row">thumb_down_alt</i></div>
        <h3><Span>Test</span></h3>
        <ul>
          <li>Список задач</li>
          <li>Описания задачи</li>
          <li class="row"><i class="material-icons">all_inclusive</i>добавление задач</li>
          <li>0 тг.</li>
        </ul>
        <p class="row"><a class="btn"><span>Приобритен</span></a></p>
      </section>

    </div>
  </div>
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
      'EDIT_STATUS',
      'EDIT_STATUS2'
    ]),
    by() {
      alert('Купить')
      this.EDIT_STATUS()
      .then(() => {
        this.GET_STATUS()
      })
    },
    byConsle() {
      alert('Отменить подписку')
      this.EDIT_STATUS2()
      .then(() => {
        this.GET_STATUS()
      })
      
    }
  },
  mounted() {
    this.GET_STATUS()
  }
}
</script>

<style lang="scss">
.v-by {
  .row-e {
    align-items: flex-end;
  }
  .material-icons {
    margin-right: 10px;
  }
  .services {
    width:1000px;
    overflow:auto;
    margin:0 auto;
  }
  .pricecol {
    width:31%;
    background: rgba(255, 255, 255, 0.05);
    /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); */
    min-height:30%;
    border-radius:10px;
    position:relative;
    padding:30px 0px;
    text-align:center;
    font-family:verdana;
    float:left;
    margin-left:20px;
  }
  .icon {
    width:60px;
    height:60px;
    border-radius:100%;
    background: rgba(255, 255, 255, 0.164);
    color: #fff;
    text-align:center;
    position:relative;
    margin:0 auto; 
    margin-bottom: 20px;
  }
  .icon i {
    font-size:30px;
    position:relative;
    top:15px;
  }
  h3 {
    text-align:center;
    background: rgba(255, 255, 255, 0.05);
    text-align:center;
      /* border-top:1px solid rgb(25, 31, 34);
      border-bottom:1px solid rgb(51, 60, 64); */
    color:#fff;
  }
  h3 span {
    /* border-top:1px solid rgb(51, 60, 64);
    border-bottom:1px solid  rgb(25, 31, 34); */
    display:block;
    padding: 10px 0px;
    font-family:verdana;
    font-size:20px;
  }
  .button {
    border-radius:34px;
    color:#fff;
    font-size:16px;
    margin-top:15px;
    cursor:pointer;
    display:inline-block;
  }
  /* .button span {
    display:inline-block;
    padding:10px 15px;
    background:#e6e6e6;
    border-radius:20px;
    color: #000;
  } */
  ul {
    list-style-type:none;
    padding:0px;
    color:#fff;
    font-family:verdana;
    font-size:14px;
    margin:0 auto;
    text-align:center;
    width:70%;
    color:rgb(165, 174, 178);
    /* border-bottom:1px solid rgb(51, 60, 64);
    border-top:1px solid rgb(25, 31, 34); */
  }
  li {
    padding:10px 0px;
    /* border-top:1px solid rgb(51, 60, 64);
    border-bottom:1px solid rgb(25, 31, 34); */
  }
}
</style>
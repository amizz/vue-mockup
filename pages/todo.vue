<template>
  <div>
    <div class="normal">
      <h1>Add and Delete</h1>
      <ol>
        <li v-for="(item, index) in todos" :key="index">
          {{item}} | <button @click="del(index)">Delete</button>
        </li>
      </ol>
      <input type="text" v-model="input" @keydown.enter="add">
    </div>
    <hr style="margin: 2em 0;">

    <div class="form">
      <h1>Add and Delete using Object</h1>
      <button @click="addInput">Add</button>
      <div class="form-item" v-for="(item, index) in form" :key="index">
        <input type="text" v-model="form[index].name" placeholder="name">
        <input type="text" v-model="form[index].date" placeholder="date">
        <input type="text" v-model="form[index].time" placeholder="time">
        <button @click="delInput(index)">Delete</button>
      </div>
    </div>

    <hr style="margin: 2em 0;">

    <div class="form-multi">
      <h1>Add and Delete using Multi Dimensional Object</h1>
      <button @click="addInputMulti">Add Multi</button>
      <div class="form-item" v-for="(item, index) in formMulti" :key="index">
        <h3>Day {{item.day}} <button @click="delInputMulti(index)">Delete</button></h3>
        <div class="form-item-in" v-for="(itemIn, indexIn) in item.item" :key="indexIn">
          <input type="text" v-model="formMulti[index].item[indexIn].name" placeholder="name">
          <input type="text" v-model="formMulti[index].item[indexIn].date" placeholder="date">
          <input type="text" v-model="formMulti[index].item[indexIn].time" placeholder="time">
          <button @click="addInputMultiIn(index)">Add Inside</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',

        todos: [
          "makan",
          "tido",
          "makan"
        ],
        
        form: [{
          name: '',
          date: '',
          time: ''
        }],

        formMulti: [{
          day: 1,
          item: [{
            name: '',
            date: '',
            time: ''
          }]
        }]
      }
    },
    methods: {
      del(index) {
        this.todos.splice(index, 1)
      },
      add() {
        this.todos.push(this.input)
      },
      addInput() {
        this.form.push({
          name: '',
          date: '',
          time: ''
        })
      },
      delInput(index) {
        this.form.splice(index, 1)
      },
      addInputMulti() {
        this.formMulti.push({
          day: this.formMulti.length+1,
          item: [{
            name: '',
            date: '',
            time: ''
          }]
        })
      },
      delInputMulti(index) {
        this.formMulti.splice(index, 1)
      },
      addInputMultiIn(index) {
        this.formMulti[index].item.push({
          name: '',
          date: '',
          time: ''
        })
      },
      save() {
        this.$axios({
          data: this.formMulti
        })
      }
    }
  }
</script>

<style>
  .form {
    margin-top: 2em;
  }

  .form-multi {
    margin-top: 2em;
  }
</style>
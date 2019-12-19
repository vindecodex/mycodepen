import Vue from '../vue/vue'

new Vue({
  el: '#app',
  data: function() {
    return {
      name: "vincent",
      link: "google.com",
      number: 0,
      a: 0,
      b: 0
    }
  },
  computed: {
    computedA() {
      console.log("computedA")
      return this.a
    },
    computedB() {
      console.log("computedB")
      return this.b
    }
  },
  methods: {
    sayhi() {
      return "hi"
    },
    changename() {
      this.name = "vince"
    },
    increment(){
      this.number++;
    },
    getA() {
      console.log("methodA")
      return this.a
    },
    getB() {
      console.log("methodB")
      return this.b
    }
  }
});

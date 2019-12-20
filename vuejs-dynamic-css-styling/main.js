import Vue from '../vue/vue'


new Vue({
  el: '#app',
  data: function() {
    return {
      status: false
    }
  },
  computed: {
    getBtnStats() {
      if (this.status) {
        return "ON"
      }
      return "OFF"
    }
  },
  methods: {
    triggerSwitch() {
      this.status = !this.status
    }
  }
})

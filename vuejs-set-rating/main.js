import Vue from '../vue/vue'

new Vue({
  el: '#rating_star',
  data: function() {
    return {
      rating: 0,
    }
  },
  methods: {
    ratingClass(val) {
      return {
        "fas": true,
        "fa-star": true,
        "active": val <= this.rating
        }
    },
    setRating(val) {
      this.rating = val
    }
  }
})

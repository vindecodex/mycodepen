// We use require([file_you_want_to_require], function(NameYouImport){
  // NameYouImport.Method
// })
require(['../../vue/vue'], function(Vue) {
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
})

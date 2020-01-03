'use strict';

require(['../../vue/vue'], function (Vue) {
  new Vue({
    el: '#rating_star',
    data: function data() {
      return {
        rating: 0
      };
    },
    methods: {
      ratingClass: function ratingClass(val) {
        return {
          "fas": true,
          "fa-star": true,
          "active": val <= this.rating
        };
      },
      setRating: function setRating(val) {
        this.rating = val;
      }
    }
  });
});
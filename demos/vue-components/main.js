Vue.component('restaurant-card', {
  data() {
    return {
      restaurant: {
        name: 'Brooklyn Street Local',
        ratings: [5, 5, 5, 4, 5, 5, 3, 5, 5, 5, 5, 4],
      },
    };
  },
  computed: {
    averageRating() {
      const average = this.totalRatings / this.numberOfRatings;
      
      return Math.round(10 * average) / 10;
    },
    numberOfRatings() {
      return this.restaurant.ratings.length;
    },
    totalRatings() {
      let total = 0;
      for (let i = 0; i < this.numberOfRatings; i++) {
        total += this.restaurant.ratings[i];
      }

      return total;
    },
  },
  template: '<div><h1>{{ restaurant.name }}</h1><p>The restuarant\'s average rating is {{ averageRating }}.</p></div>'
})

new Vue({
  el: '#root',
});
Vue.component('coupon', {
  data() {
    return {
      code: '',
    };
  },
  methods: {
    applyCoupon() {
      this.$emit('applied', this.code);
    },
  },
  template: `
    <form @submit.prevent="applyCoupon">
      <input type="text" v-model="code" />
      <button type="submit">Submit</button>
    </form>`,
});

new Vue({
  el: '#root',
  data() {
    return {
      couponCode: '',
    };
  },
  computed: {
    couponApplicationWasSuccessful() {
      return this.couponCode.toLowerCase() === 'free';
    },
    couponWasApplied() {
      return !!this.couponCode;
    },
  },
  methods: {
    onCouponApplied(code) {
      this.couponCode = code;
    },
  },
});

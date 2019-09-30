window.Event = new (class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
})();

Vue.component('coupon', {
  template:
    '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

  methods: {
    onCouponApplied() {
      Event.fire('applied');
    }
  }
});

new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  created() {
    Event.listen('applied', () => console.log('Handling on!'));
  }
});

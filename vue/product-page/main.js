const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    imageDescription: 'socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 3245,
        variantColor: 'green',
        variantImage: './assets/image/vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 1045,
        variantColor: 'blue',
        variantImage: './assets/image/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0,
      },
    ],
    cart: 0,
    outOfStockStyle: 'thr',
    onSale: false,
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
      // this.imageDescription = 'socks';
      // this.imageDescription = `${this.imageDescription} ${variantColor}`;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return `${this.brand} ${this.product} are on sale`;
      } else {
        return `${this.brand} ${this.product} are not on sale`;
      }
    },
  },
});

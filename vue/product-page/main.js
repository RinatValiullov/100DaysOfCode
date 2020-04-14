const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/image/vmSocks-green-onWhite.jpg',
    imageDescription: 'socks',
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 3245,
        variantColor: 'green',
        variantImage: './assets/image/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 1045,
        variantColor: 'yellow',
        variantImage: './assets/image/vmSocks-blue-onWhite.jpg'
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart++
    },
    updateProduct(variantImage) {
      console.log(this);
      this.image = variantImage
    }
  }
});

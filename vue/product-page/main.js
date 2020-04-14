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
      },
      {
        variantId: 1045,
        variantColor: 'yellow',
      },
    ],
  },
});

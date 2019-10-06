let config = {
  type: 'carousel',
  perView: 3,
  breakpoints: {
    800: {
      perView: 2,
    },
  },
};

new Glide('.glide', config).mount();

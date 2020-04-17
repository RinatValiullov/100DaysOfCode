Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="detail in details">
        {{ detail }}
      </li>
    </ul>
  `,
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">
    <div class="product-image">
      <img v-bind:src="image" :alt="imageDescription" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="[ !inStock ? outOfStockStyle : '']">Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>

      <product-details :details="details"></product-details>

      <div class="showInfo">{{ sale }}</div>

      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>

      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="[ !inStock ? 'disabledButton' : '']"
      >
        Add to Cart
      </button>

      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
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
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(index) {
      this.selectedVariant = index;
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
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99;
    },
  },
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
  },
});

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

let eventBus = new Vue();

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

      <button
        v-on:click="deleteFromCart"
      >
        Delete from Cart
      </button>

      <product-tabs :reviews="reviews"></product-tabs>

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
      reviews: [],
      outOfStockStyle: 'thr',
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    deleteFromCart() {
      this.$emit(
        'delete-from-cart',
        this.variants[this.selectedVariant].variantId
      );
    },
    updateProduct(index) {
      this.selectedVariant = index;
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
  mounted() {
    eventBus.$on('review-submitted', (productReview) => {
      this.reviews.push(productReview);
    });
  },
});

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please, correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>Would you recommend this product?</p>
      <label>
        Yes
        <input type="radio" value="Yes" v-model="recommend" />
      </label>
      <label>
        No
        <input type="radio" value="No" v-model="recommend" />
      </label>

      <p>
        <input type="submit" value="Submit">  
      </p>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.review && this.rating && this.name && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend,
        };
        eventBus.$emit('review-submitted', productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
        this.recommend = null;
      } else {
        if (!this.name) {
          this.errors.push('Name required!');
        }
        if (!this.review) {
          this.errors.push('Review required!');
        }
        if (!this.rating) {
          this.errors.push('Rating required!');
        }
        if (!this.recommend) {
          this.errors.push('Recommend required!');
        }
      }
    },
  },
});

Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
      <span
        class="tab"
        :class="{ activeTab: selectedTab === tab }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
      >{{ tab }}</span>

      <div v-show="selectedTab === 'Reviews'">
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
          </li>
        </ul>
      </div>

      <product-review
        v-show="selectedTab === 'Make a Review'"
      ></product-review>

    </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews',
    };
  },
});

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    emptyCart(id) {
      for (let index = this.cart.length - 1; index >= 0; index--) {
        console.log(this.cart);
        if (this.cart[index] === id) {
          this.cart.splice(index, 1);
        }
      }
    },
  },
});

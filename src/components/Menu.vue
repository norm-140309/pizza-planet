<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-light">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button class="btn btn-sm btn-outline-success" 
                      type="button"
                      @click="addToCart(item,option)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Shopping Cart -->
    <div class="col-sm-12 col-md-6">
      <div v-if="cart.length > 0">
        <table class="table table-hover" >
          <thead class="thead-light">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart">
              <td>
                <button class="btn btn-sm"
                        @click="decreaseQuantity(item)">-</button>
                <span>&nbsp; {{item.quantity}} &nbsp; </span>
                <button class="btn btn-sm"
                        @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.size}} - {{item.name}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>
          Order Total: 
          <span> 9.95 </span>
        </p>
        <button class="btn btn-success btn-block"
          @click="addNewOrder"
        >Place Order</button>
      </div>
      <div v-else>
        <p>{{ cartText }} | Number of orders: {{this.$store.state.orders}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartText: "Your cart is empty."
    };
  },
  computed: {
    getMenuItems() {
      // return this.$store.state.menuItems
      return this.$store.getters.getMenuItems
    }
  },
  methods: {
    addToCart(item,option) {
      this.cart.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;
      if(item.quantity === 0) {
        this.removeFromCart(item);
      }
    },
    removeFromCart(item) {
      this.cart.splice(this.cart.indexOf(item), 1);
    },
    addNewOrder() {
      this.$store.commit('addOrder', this.cart)
      this.cart = []
      this.cartText = 'Thank you, your order has been placed.'
    }
  }
};
</script>
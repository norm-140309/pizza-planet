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
        <button class="btn btn-success btn-block">Place Order</button>
      </div>
      <div v-else>
        <p>{{ cartText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartText: "Your cart is empty.",
      getMenuItems: {
        1: {
          name: "Margherita",
          description: "A delicious tomato based pizza topped with mozzarella",
          options: [
            {
              size: 9,
              price: 6.95
            },
            {
              size: 12,
              price: 10.95
            }
          ]
        },
        2: {
          name: "Pepperoni",
          description:
            "A delicious tomato based pizza topped with mozzarella and pepperoni",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        },
        3: {
          name: "Ham and Pineapple",
          description:
            "A delicious tomato based pizza topped with mozzarella, ham and pineapple",
          options: [
            {
              size: 9,
              price: 7.95
            },
            {
              size: 12,
              price: 12.95
            }
          ]
        }
      }
    };
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
    }
  }
};
</script>
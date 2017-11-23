<template>
  <div class="row">
    <div id="home" class="sm-12 text-center">
      <div class="background">
          <h1>Welcome to Pizza Planet!</h1>
          <h2>Feeling Hungry?</h2>
          <button class="btn btn-success"
                  @click="goToMenu"
          >Place My Order</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToMenu() {
        this.$router.push('/menu')
      }
    }
  }
</script>

<style>
  #home {
    background: url('../../src/assets/pizza.jpg');
    height: 800px;
    width: 100%;
    padding: 10%;
  }
  h1, h2 {
    margin: 6%;
  }
  .background {
    background: #EEE;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
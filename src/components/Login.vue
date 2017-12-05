<template>
  <div class="row">
    <div>
      <div>
        <p>Logged in as: <br> {{ currentUser }}</p>
      </div>
      <form>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Your Email." >
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter Your Password." >
        </div>
        <button class="btn btn-primary"
                @click.prevent="signIn"
        >Sign In</button>
        <button class="btn btn-danger"
                @click.prevent="signOut"
        >Sign Out</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import { store } from '../store/store.js'

  Firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch('setUser', user)
    } else {
      store.dispatch('setUser', null)
    }
  })

  export default {
    methods: {
      signIn() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        Firebase.auth().signInWithEmailAndPassword(email, password)
                .catch( function(error) {
                   var errorCode = error.code;
                   var errorMessage = error.message;
                   if(errorCode === 'auth/wrong-password') {
                     alert('Wrong password.');
                   } else {
                     alert(errorMessage);
                   }
                });
      },
      signOut() {
        Firebase.auth().signOut().then( function() {
          alert('Logged out');
        }).catch(function(error) {
          alert('An error has occurred.');
        })
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    }
  }
</script>
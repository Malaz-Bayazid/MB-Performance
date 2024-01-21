<template>
  <div>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <router-link to="/newUser">
  <button type="button">Add new User</button>
  </router-link>  
  <div>
    <input type="text" class="searchField" v-model="searchText" placeholder="customer or fin..."  v-on:keyup.enter="searchCustomer"/>
    <h3 v-if="customers.length > 0">Customers</h3>
    <div v-for="customer in customers" v-bind:key="customer.id">
      <router-link :to="{ name: 'userDetails', params: { id: customer.customerId } }">
        <h2>{{ customer.name }}</h2>
      </router-link>
    </div>
  </div>

    <router-view />
</div>
</template>

<script>


import axios from 'axios';
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
//import VueAxios from 'vue-axios';

export default {

  data () {
    return {
      customers : [],
      searchText: '',
    }; 
  },
  methods: {
    async searchCustomer() {
      try {
        const response = await axios.get(
          "http://localhost:8080/demo/customer/search" , {
            params : {searchText : this.searchText}
          }
        );
        // JSON responses are automatically parsed.
        this.customers = response.data;
        if(this.customers.length == 0){
          toast.warn('No results found!', {autoClose: 3000});
        }
      } catch (error) {
        console.log(error);
      }
    },

/*
    async getData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/demo/customers"
        );
        // JSON responses are automatically parsed.
        this.customers = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    */
  },
  created (){
    //this.getData();
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchField{
  position: center;
}

.error {
  background-color: tomato;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("@/assets/search.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
<div ><!--Dont delete this div -->
<div v-for="product in products" v-bind:key="product.name">
  Producto {{product.name }}
  <br>
</div>
</div>



</template>

<script>
import {getProducts} from '../db/db';

export default {
  name: 'Products',

  data(){
      return{
      products : []
      }
    },

    async created(){
      var data = await getProducts();
      this.products = data;
      console.log("???")
      console.log(data)
    }
}
</script>

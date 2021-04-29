<template>
<div ><!--Dont delete this div -->
<div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
      <br><br><br><br>
      <h4>Filtrar por:</h4>
      <br>
      <ul class="text-left list-inline">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="op1" value="vela" checked>
          <label class="form-check-label" for="exampleRadios1">
          Velas       
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="op2" value="accesorio" checked>
          <label class="form-check-label" for="exampleRadios1">
          Accesorios
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="op3" value="aceite" checked>
          <label class="form-check-label" for="exampleRadios1">
          Aceites Con Fragancia
          </label>
        </div>
      </ul>
      <br><br>
      <button type="button" class="btn btn-light">Buscar</button>
      <br>
    </div>
      <div class="col-sm-9">
          <br><br>
          <h2>Candle Collection</h2>
      <div v-for="product in products" v-bind:key="product.name">
        <ul class="list-group">
          <li class="list-inline-item"><img v-bind:src=product.image class="rounded" alt="Imagen de la vela"></li>
          <li class="list-inline-item">Producto {{product.name }}</li>
          <li class="list-inline-item"><button type="button" class="btn btn-light">Personalizar</button></li>
        </ul>
          <br>
      </div>
      </div>
   </div>
 </div>
</div>



</template>

<script>
// import {getProducts} from '../db/db';

export default {
  name: 'Products',

  data(){
      return{
      products : [
      {name: 'vela1', image: '././assets/logo.png'},
      {name: 'vela2', image: './src/assets/logo.png'},
      {name: 'vela3', image: 'src/assets/logo.png'},
      {name: 'vela4', image: './assets/logo.png'},
      {name: 'vela5', image: './assets/logo.png'},
      {name: 'vela6', image: './assets/logo.png'},
      {name: 'vela7', image: './assets/logo.png'},
      {name: 'vela8', image: './assets/logo.png'},
      {name: 'vela9', image: './assets/logo.png'}]
      }
    },

    // async created(){
    //   var data = await getProducts();
    //   this.products = data;
    //   console.log("???")
    //   console.log(data)
    // }
}
</script>

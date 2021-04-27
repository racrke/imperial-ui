<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <img alt="banner" src="../assets/private-label-candles.png">
    <h1>Sobre Nosotros</h1>
    <section> 
      <p> Fundamos Imperial Candles, con una misión: ser un(a) Tienda de velas de alta calidad que haga a nuestros consumidores parte de una experiencia superior. Nuestra pasión por la excelencia nos condujo a materializar esta misión, siendo ésta la parte fundamental que nos ha impulsado a seguir adelante. Nos enorgullecemos de ofrecer una experiencia de compra superior. Descubre más sobre nuestros productos. </p>
      <img alt="candles2" src="../assets/candles3.png">
    </section>
    <section class="box">
      <h2> Preguntas frecuentes </h2>
      <section class= "boxes">
        <section class="minibox">
          <h3> Envios? </h3>
          <p> Por el momento </p>
        </section>
        <section class="minibox">
          <h3> Devoluciones? </h3>
          <p> Fun fundamenllecemos deuestros productos. </p>
        </section>
      </section>
    </section> 
    <footer class="footer-home">
      <h1> Contactanos </h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  max-width: 100%;
  height: auto;
  width: auto;
}
img{
  margin: 15px 15px 15px 15px; 
}
p{
  margin: 30px 30px 30px 30px; 
}
h3 {
  text-align: center;
  color: #4F2310;
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
h1{
  text-align: left;
  margin-left: 30px;
}
h2{
  text-align: left;
  color: #4F2310;
  margin-left: 20px; 
}
section{
   background-color: #EFE9D8;
  border: 3px; 
  color: #4F2310;
  display: flex;
  flex-direction: row; 
  margin: 30px 30px 30px 30px; 
}
.box{
  background-color: #EFE9D8;
  border: 3px; 
  color: #4F2310;
  display: flex;
  flex-direction: column; 
  margin: 30px 30px 30px 30px; 
}
.boxes{
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
}
.minibox{
  background-color: #E3B575;
  border: 3px; 
  margin: 10px 20px 10px 20px;
  color: #4F2310;
  display: flex;
  flex-direction: column; 
}
footer{
  background-color: #4F2310;
  color: white; 
}
</style>

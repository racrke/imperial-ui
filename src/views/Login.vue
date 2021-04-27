<template>
    <div id="inicio">
        <div id=form>
            <div id="Titulo">
                <h2>Inicia Sesión</h2>
            </div>
            <div id="auxform">
                <br>
                <input type="text" id="correo" name="correo" placeholder="Inserte Correo" class="inicioSesion"><br>
                <br>
                <input type="password" id="contraseña" name="contraseña" placeholder="Inserta Contraseña" class="inicioSesion"><br>
                <br>
            </div>
            <br>
            <br>
            <div id="inicia">
                <router-link to="user/profile" id="botIS">Iniciar Sesion</router-link>
            </div> 
        </div>  

        <footer id="foot">
            <div class="contFoot" id="cont1">
                <div id="ConTi">
                    Contactanos
                </div>
                <br>
                Correo: 
                <br>
                Telefono: 

            </div>
            <div class="contFoot" id="cont2">
                (c) copyright imperial candles 2021
                <br>
                <br>
                Termino y condiciones
                <br>
                Aviso de privacidad
            </div>
            <div class="contFoot" id="cont3">
                <fa-icon :icon="['fab', 'facebook-f']" size="2x" id="fb" class="SM"/>
                <fa-icon :icon="['fab', 'instagram']" size="2x" id="ig" class="SM"/>
            </div>
        </footer>
    </div>
</template>

<style scoped>


#inicio{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    height: 100%;
    font-family: "Times New Roman", Times, serif;
}

#Titulo{
    font-size: 25px;
}

#form{
    background-color: #A36536;
    width: 25%;
    height: 50%;
    padding-top: 10px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline-style: solid;
    outline-color: black;
}

#auxform{
    width: 70%;
    text-align: left;
}

.inicioSesion{
    margin-top: 10px;
    margin-bottom: 5px;
    width: 90%;
    height: 20%;
}

#inicia{
    width: 50%;
    text-align: center;
}

#botIS{
    background-color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 40px;
    color: lightgrey;
    text-decoration: none;
}

#foot{
    background-color: #A36536;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5%;
    padding-top: 0.5%;
}

.contFoot{
    width: 33%;
    /*outline-style: solid;
    outline-color: black;*/
    padding: 1.5%
}

#ConTi{
    font-size: 20px;
}

#cont1{
    text-align: left;
}

#cont3{
    text-align: right;
}

.SM{
    margin: 2%;
}

</style>

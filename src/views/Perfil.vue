<template>
    <div id="perfil">
        <div id="Saludo">
            <h1> Hola </h1>
        </div>

        <main id="principal">
            <nav id="navCuenta">
                <ul id="menu">
                    <li><router-link to="/account" class="opMen">Mi Informacion</router-link></li>
                    <li><router-link to="/record" class="opMen">Mi historial de pedidos</router-link></li>
                    <li><router-link to="/pending" class="opMen">Mis pedidos pendientes</router-link></li>
                    <li>Cerrar Sesion</li>
                </ul>
                
            </nav>

            <div id="Info">
                <img src="../assets/user.png" alt="Perfil" id="img_usuario">
                <div id="pers_info">
                    <ul id="lista_info">
                        <li>Nombre: <br> Fulano Perez</li>
                        <li>Correo: <br> hola@gmail.com</li>
                        <li>Telefono: <br> +5281786524</li>
                        <li>Fecha de nacimiento: <br> 17/12/1990</li>
                    </ul>
                </div>
            </div>
        </main>

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


#Saludo{
    width: 100%;
    margin-bottom: 5%;
    padding-top: 2%;
    text-align: left;
    padding-left: 10%;
}

#principal{
    height: 60%;
    display: flex;
    justify-content: space-around;
}

#navCuenta{
    background-color: #E3B575;
    text-align: left;
    width: 20%;
    height: 35%;
    color: #4F2310;
}

.opMen{
    color: #4F2310;
}

#menu{
    list-style: none;
}

#info{
    background-color: #EFE9D8;
    height: 80%;
    width: 60%;
    text-align: left;
    padding-top: 2%;
    
}


#img_usuario{
    height: 70%;
    margin-left: 10%;
    float: left;
    margin-right: 10%;
}

#lista_info{
    list-style: none;
    font-size: 20px
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
    color: white;
}

.contFoot{
    width: 33%;
    /*outline-style: solid;
    outline-color: black;*/
    padding: 0.5%
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
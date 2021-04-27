<template>
    <div id="perfil">
        <div id="Saludo">
            <h1> Hola </h1>
        </div>

        <main id="principal">
            <nav id="navCuenta">
                <ul><router-link to="user/record" class="opMen">Mi historial de pedidos</router-link></ul>
                <ul><router-link to="user/pending" class="opMen">Mis pedidos pendientes</router-link></ul>
            </nav>

            <div id="Info">
                
            </div>
        </main>
    </div>
</template>

<style scoped>
#navCuenta{
    background-color: #E3B575;
    width: 15%;
    text-align: left;
}
</style>
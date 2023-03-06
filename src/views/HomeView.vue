<template>
    <v-app>
      <div class="navbar">
        <Navbar/>
      </div>
    <v-container fluid>
       <!-- Vista Navbar aplicacion de figura de la panaderia -->
       <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-black">Hola,</h1>
              <h1 class="text-green">Soy <b>Leitam</b></h1>
              <span class="text-black">Chef Pastelero </span><br />
            </div>

            <div class="router">
            <router-link to="/Contacto">
              <v-btn  class="text-red mt-8" >Contáctame</v-btn>
             </router-link>
            </div>
            </v-col>

            <!-- fas fa-sort-amount-down icono para abajo" -->
            <v-col cols="2">
              <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
                color: black;
              "
              class="mt-16">
              <v-icon><i class="fas fa-sort-amount-down"></i></v-icon>
            </div>
            </v-col>

            <!-- Imagen de Chef Pastelero" -->
            <v-col cols="5">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <v-img src="Chefcito.jpeg" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
     
      <!--Componente Categorias-->
        <div class="mt-4">
           <h2 class="linea"><span>Categorias </span></h2>
           <categoria/>
          </div>

      <!--Componente Productos-->
      <div class="mt-4">
        <h2 class="linea"><span>Productos Populares</span></h2>
        <Productos/>
      </div>
   

      <!--Componente Ofertas Populares-->
      <v-card flat color="#E2F2E5" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title class="text-h6 mt-5"
                >Ofertas Locas</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>
            <Pack/>
          </v-card>

          <!--Componente Cliente-->
          <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              ">
              <h3>Lo que dicen nuestros clientes</h3>
            </div>
            <Cliente/>
            </v-card>
    </v-container>
    <!--Componente Pie de Pagina-->
    
    <Piepagina/>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Categoria from '../components/Categoria.vue';
import Productos from '../components/Productos.vue';
import Pack from '../components/Pack.vue'
import Cliente from '../components/Cliente.vue';
import Piepagina from '../components/Piepagina.vue';


// Components

export default defineComponent({
  name: 'HomeView',
  data: ()=>({
    toggle_exclusive: 1,
  }),

  components: {
    Navbar,
    Categoria,
    Productos,
    Pack,
    Cliente,
    Piepagina,
   
  },
});
</script>

<style>
.v-container {
  padding: 16px 0 16px 0;
}
.head {
  position: sticky;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: rgb(228, 222, 221);
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: rgb(228, 222, 221);
  transform: skew(0deg, -6deg);
}
h2 {
  font: 33px Fira Sans;
  margin-top: 50px;
  text-align: center;
  text-shadow: 7px 4px 5px rgb(216, 140, 10);

}
h2.linea {
  position: relative;
  z-index: 1;
}
h2.linea:before {
  border-top: 3px solid #c8f0c5;;
  content: "";
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 95%;
  z-index: -1;
}
h2.linea span {
  background: rgb(255, 255, 255);
  padding: 0 15px;
}
.marginLeft {
  margin-left: -90px;
}
.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}
.v-card.borderme {
  border: 2px solid green !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}

.router a {
  text-decoration: none;
}


</style>

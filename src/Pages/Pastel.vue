<template>
  <v-app id="inspire" :theme="useCartStore().getTheme">
    <title>Pasteles</title>
  <div class="pasteles">
    <v-row class="my-5">
      <v-col cols="12">
        <v-btn @click="grid = !grid" :class="{ 'bg-primary': grid }">
          <v-icon>  fa-solid fa-table-cells-large </v-icon>
        </v-btn>
        <v-btn
          @click="grid = !grid"
          :class="{ 'bg-primary': !grid }"
          class="ml-3"
        >
          <v-icon> fa-solid fa-list</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row v-show="grid">
          <v-col
            v-for="(product, i) in products"
            :key="i"
            cols="12"
            lg="4"
            sm="6"
          >
            <v-card class="mx-auto pb-2">
              <v-img :src="product.image" height="200px" cover>
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                  >
                    <v-progress-circular
                      color="grey lighten-5"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-title class="text-capitalize">
                {{ product.name }}
              </v-card-title>

              <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="bg-primary" @click="cartStore.add(product.id)">
                  Añadir al Carro
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
       
       
        <v-row v-show="!grid" v-for="(product, i) in products" :key="i">
          <v-col cols="4">
            <v-img :src="product.image" height="200px" cover>
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="grey lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>

          
          <v-col cols="12" md="8">
            <v-card-title class="text-capitalize">
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
            <v-card-actions>
              {{ product.description }}
            </v-card-actions>
            <v-spacer></v-spacer>
              <v-btn class="ml-2 bg-primary" @click="cartStore.add(product.id)">
                Añadir al Carro
              </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Header/>
  </div>
</v-app>
</template>

<script setup>

//Importacion de Ref y la data
import data from '@/data'
import { ref } from 'vue';

//Importamos el javascript
import { useCartStore } from '../store/cart';
const cartStore = useCartStore();

//Traemos la data Productos
const products = ref(data);
const grid = ref(false)
</script>


//LLamada del componente Header 
<script>
import Header from '../components/Header.vue';

export default
{
  name:'ine-iten',
  components: { 
    Header
   }
  }

</script>


<style>
.pasteles{
  margin: 50px;
}

</style>
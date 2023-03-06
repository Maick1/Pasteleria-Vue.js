<template>
  <!-- Inicio del componente -->
  <v-item-group mandatory class="mt-n1">
    <!-- Grupo de items que contiene las tarjetas -->
    <v-container>
      <!-- Contenedor de las filas y columnas -->
      <v-row justify="center" class="space">
        <!-- Fila con columnas para cada categoría -->
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="2"
          v-for="(cetegory, i) in categories"
          :key="i"
        >
          <!-- Elemento v-item para cada tarjeta -->
          <v-item v-slot="{ active, toggle }">
            <!-- Tarjeta con imagen, título y subtitulo -->
            <v-card
              :color="active ? '#D5F0DB' : '#c8f0c5'" 
              :class="active ? 'borderme' : 'borderout'" 
              class="d-flex align-center rounded-lg mx-2" 
              dark 
              height="180" 
              @click="toggle" 
              flat 
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <!-- Imagen de la categoría -->
                        <v-img
                          :src="cetegory.img"
                          max-height="100"
                          max-width="100"
                          contain
                        ></v-img>
                      </div>
                      <!-- Título de la categoría -->
                      <v-list-item-subtitle
                        :class="active ? 'green': 'black'"
                        class="caption mt-4"
                      >
                        {{ cetegory.title }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

  
  <script>
  export default {
    name:"caategoria-iten",
    data: () => ({
      categories: [
        { img: "p1.jpg", title: "Pasteles" },
        { img: "p3.png", title: "Bocaditos" },
        { img: "p2.jpg", title: "Postres" },
      ],
    }),
  };
  </script>
  
  <style>
  </style>
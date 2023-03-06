<template>
  <!-- Inicio del componente -->
  <v-row class="mt-10 mb-5">
    <!-- Fila para los clientes -->
    <!-- Bucle para iterar sobre cada cliente -->
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(client, i) in clients" 
      :key="i"
    >
      <!-- Tarjeta con la información del cliente -->
      <v-card class="elevation-16 mx-auto" width="300">
        <!-- Lista con la foto, nombre y cargo del cliente -->
        <v-list subheader two-line>
          <v-list-item>
            <v-list-item-avatar>
              <!-- Imagen del cliente -->
              <v-img :src="client.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <!-- Nombre del cliente -->
              <v-list-item-title>{{ client.title }}</v-list-item-title>

              <!-- Cargo del cliente -->
              <v-list-item-subtitle>{{ client.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-card-text>
          <div class="mt-n7">
            <!-- Componente de calificación para el cliente -->
            <!-- Propiedad para guardar la calificación del cliente -->
            <v-rating
              v-model="rating" 
              color="white"
              active-color="yellow-accent-4"
              half-increments
              hover
              small
            ></v-rating>
          </div>
          <!-- Biografía del cliente -->
          {{ client.bio }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

  
  <script>
  export default {
    name:"cliente-iten",
    data: () => ({
      rating: 3.5,

      clients: [
        {
          img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Flavio Caicedo",
          subtitle: "",
          bio: "Muchas Gracias Pasteleria y Reposteria Deli's, excelente atencion y sobre toda muy Ricas sus tortas en especial la Red Velvet.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Jose Hernandez",
          subtitle: "",
          bio: "Exclente Bocaditos, recomendado Pasteleria y Reposteria Deli's, sigan asi no cambien con su excelente sabor en sus Bocaditos.",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Johana Guitierrez",
          subtitle: "",
          bio: "Muy Ricos los Cakes de Pasteleria y Reposteria Deli's, puedo decir que son los mejores que e comido en toda mi vida 100/10.",
        },
      ],
    }),
  };
  </script>
  
  <style>
  </style>
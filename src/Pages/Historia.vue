<template>
  <v-container>
    <v-card class="custom-card">
      <v-card-title class="custom-title">Nuestra Historia</v-card-title>
      <v-card-text class="custom-card-text">
        <p>La Pastelería y Reposteria fue fundada en 1980 por Leitam Pelambre Angulo, un apasionado de la repostería que quería compartir sus deliciosos postres con la comunidad.</p>
        <p>Desde entonces, la pastelería ha crecido y evolucionado para convertirse en una de las más destacadas de la región. Con una amplia variedad de productos y un compromiso con la calidad, la pastelería y Reposteria Deli's se ha ganado la confianza y el cariño de sus clientes.</p>
        <ul class="custom-list">
          <li>Más de 40 años de experiencia en la elaboración de postres</li>
          <li>Productos frescos y de alta calidad</li>
          <li>Servicio al cliente excepcional</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary">Ubicación</v-btn>
      </v-card-actions>
    </v-card>
    <NavbarVue class="custom-navbar"/>
  </v-container>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'

export default
{
  components: { NavbarVue },
name:"Histo-iten",   
}
</script> 


<style scoped>
/* Estilos personalizados para la tarjeta */
.custom-card {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Estilos personalizados para el título */
.custom-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Estilos personalizados para el texto de la tarjeta */
.custom-card-text {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* Estilos personalizados para la lista */
.custom-list {
  list-style: square;
  margin-left: 20px;
  margin-bottom: 20px;
}

/* Estilos personalizados para los elementos de lista */
.custom-list li {
  font-size: 14px;
  color: #999;
  line-height: 1.2;
}

/* Estilos personalizados para la barra de navegación */
.custom-navbar {
  background-color: #f8f8f8;
  padding: 10px;
  border-top: 1px solid #ccc;
  margin-top: 50px;
}

.custom-background {
    background-color: #ccc;
    background-size: cover;
    background-position: center center;
  }
</style>
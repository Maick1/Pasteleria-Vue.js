<template>
    <v-container>
        
      <v-card>
        <v-card-title class="text-h5">Nuestra Historia</v-card-title>
        <v-card-text>
            <p>La pastelería X fue fundada en 1980 por Juan Pérez, un apasionado de la repostería que quería compartir sus deliciosos postres con la comunidad.</p>
            <p>Desde entonces, la pastelería ha crecido y evolucionado para convertirse en una de las más destacadas de la región. Con una amplia variedad de productos y un compromiso con la calidad, la pastelería X se ha ganado la confianza y el cariño de sus clientes.</p>
            <ul>
                <li>Más de 40 años de experiencia en la elaboración de postres</li>
                <li>Productos frescos y de alta calidad</li>
                <li>Servicio al cliente excepcional</li>
            </ul>
        </v-card-text>
      </v-card>
      <NavbarVue/>
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
  
<template>
  <nav>
    <title>Pasteleria Deli's</title>
      <div class="navbar">
          <div class="logo">
              <v-app-bar app color="#C8E6C9">
                  <v-app-bar-nav-icon color="#33691E" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                  <v-spacer></v-spacer>
                  <!-- usamo un iconos de fontawesome https://fontawesome.com/v5/icons/signature?s=solid&f=classic -->
                  <v-btn><v-icon color="#33691E" right class="mr-3">fa fa-birthday-cake</v-icon>Pasteleria y Reposteria Deli´s</v-btn>
              </v-app-bar>
              <v-spacer></v-spacer>
              <!-- opicones del Navbar -->
              <div class="menu">
              <v-navigation-drawer v-model="drawer" app permanent>
                  <ol>
                      <li><router-link to="/Pastel">Pasteles</router-link></li>
                      <li><router-link to="/Bocaditos">Bocaditos</router-link></li>
                      <li><router-link to="/">Postres</router-link></li>
                      <li><router-link to="/">Historia</router-link></li>
                  </ol>
              </v-navigation-drawer>
              </div>
              
          </div>
      </div> 
  </nav> 
</template>

<script>

export default {
  name:"nav-item",
  
data() {
  return {
    drawer: false,
  }
}
}
</script>

<style>

.menu {
display: flex;
}

.menu ul {
list-style: lower-greek;
margin: 0;
padding: 0;
display: flex;
}

.menu a {
padding: 10px 20px;
display: block;
text-decoration: dotted;
color: rgb(0, 0, 0);
font-family: Arial, sans-serif;
font-size: 16px;
color: #333;
font-weight: bold;
letter-spacing: 2px;
text-decoration: underline;
text-transform: uppercase;

}
a:hover {
color: rgb(55, 217, 37);
}

@media (max-width: 768px) {
.menu {
  display: flex;
}

}
</style>

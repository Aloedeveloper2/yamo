<template>
    <v-container>
      <v-row>
        <v-col cols="6" sm="6">
          <v-row>
            <v-col cols="9" sm="9">
              <v-img alt="banner-img" src="../assets/yamo-logo.png"></v-img><h1 class="display-2"> Reprenez la main.</h1>
            </v-col>
          </v-row>
          
          <span>Gérez votre argent grâce aux solutions de paiement simples et abordables de Yamo.</span><br>
          <v-btn color="amber lighten-2">Commencer</v-btn>
        </v-col>
        <v-col cols="6" sm="6">
          <v-img alt="banner-img" src="../assets/undraw_shopping_app_flsj.svg"></v-img>
        </v-col>
      </v-row>
      <Services />
    </v-container>
</template>

<script>
  import Services from '@/components/Services.vue';
  export default {
    name: 'Home',
    components: {
      Services
    },
  }
</script>

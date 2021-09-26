<template>
  <div>
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
      <Presentation />
      <Reader />
      <OtherTools />
      <NewProduct />
      <Guide />
      <Enterprises />
      <ChooseYamo />
    </v-container>
      <ContactUs />
      <Question />
      <Footer />
  </div>
</template>

<script>
  import Services from '@/components/Services.vue';
  import Presentation from '@/components/Presentation.vue';
  import Reader from '@/components/Reader.vue';
  import OtherTools from '@/components/Other-tools.vue';
  import NewProduct from '@/components/New-product.vue';
  import Guide from '@/components/Guide.vue';
  import Enterprises from '@/components/Enterprises.vue';
  import ChooseYamo from '@/components/Choose-yamo.vue';
  import ContactUs from '@/components/Contact-us.vue';
  import Question from '@/components/Question.vue';
  import Footer from '@/components/Footer.vue';
  export default {
    name: 'Home',
    components: {
      Services, Presentation, Reader, OtherTools, NewProduct, Guide, Enterprises, ChooseYamo, ContactUs, Question, Footer
    },
  }
</script>

<style>
  #block{
        margin-top: 10%;
    }
</style>

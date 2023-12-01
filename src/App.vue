<script setup>
import Header from './components/header/Header.vue'
import Footer from './components/footer/footer.vue'

</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
@import '../public/css/style.css';
@import '../public/css/ekko-lightbox.css';
@import '../public/css/tether.css';
@import '../public/css/owl.carousel.css';
@import '../public/css/font-awesome.css';
@import 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,100';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

#app {
  background-color: #E3F2FD;
}
</style>

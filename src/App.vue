<template>
    <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components:{
    Header
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system,
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  sans-serif,
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol';
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1{
  color: #FFE81F;
}

body {
  background: url(./assets/images/stars.jpg);
}

</style>

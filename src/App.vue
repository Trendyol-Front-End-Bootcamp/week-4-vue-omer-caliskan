<template>
  <Header />
  <List :starships="starships" />
</template>

<script>
import Header from './components/Header.vue' 
import List from './components/List.vue'

import axios from 'axios';


export default {
  name: 'App',
  data(){
    return{
      starships : null
    };
  },
  created(){
    this.getStarships();
  },
  components: {
    Header,
    List
  },
  methods: {
    getStarships(){
          axios
                .get("https://swapi.dev/api/starships/")
                .then((response) => (this.starships = response.data.results));
  }
  }
  
};

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

body {
  background-color: #000;
  color: #FFE81F;
}

</style>

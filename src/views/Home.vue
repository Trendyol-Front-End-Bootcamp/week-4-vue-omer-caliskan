<template>
<SearchBar />
  
</template>

<script>
import Header from '../components/Header.vue' 
import List from '../components/List.vue'
import SearchBar from '../components/SearchBar.vue'
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
    List,
    SearchBar
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
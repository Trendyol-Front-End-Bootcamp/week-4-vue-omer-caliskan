<template>
    <div class="search">
        <span>Search by Name or Model: </span>
        <input type="text" placeholder="Search" v-model="searchText" v-on:keyup.enter="Search()">
        <button v-if="searchText!='' " @click="ClearText">Clear</button>
    </div>
    <Loading v-if="loading" />
    <List v-if="!loading && starships.length>0" :starships="starships" />
    <NotFound v-if="!loading && searchText!='' && starships.length==0 "  />

</template>

<script>
import axios from 'axios'
import List from './List.vue'
import NotFound from './NotFound.vue'
import Loading from './Loading.vue'
export default {
    name: "SearchBar",
    data(){
        return {
            searchText: "",
            starships: [],
            loading: true
        }
    },
    components:{
        List,
        NotFound,
        Loading
    },
    methods:{
    async Search(){
            axios
                .get(`https://swapi.dev/api/starships/?search=${this.searchText}`)
                .then((response) => (this.starships = response.data.results));
                this.loading = false;
            return response;
        },
    ClearText(){
        this.searchText = "";
        this.Search();
    }
    },
    created(){
        this.Search();
    }
}
</script>

<style scoped>

.search{
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: white;
}

.search input{
    padding: 5px;
    width: 400px;
}

.search span{
    color: white;
}

.search button{
	width: 100px;
	padding: 5px;
	background-color: red;
	overflow: hidden;
	border: none;
	color: white;
	border-radius: 15px;
	cursor: pointer;
}

.search button:hover{
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
}

</style>
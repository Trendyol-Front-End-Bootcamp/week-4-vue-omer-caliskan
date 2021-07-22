<template>
    <div class="search">
        <span>Search by Name or Model: </span>
        <input type="text" placeholder="Press Enter for Search" v-model="searchText" v-on:keyup.enter="Search()">
        <button v-if="searchText!='' " @click="ClearText()">Clear</button>
    </div>
    
    <Pagination @newPage="NewPage($event)" :page="page" :pageNext="pageNext" />
        <Loading v-if="loading" />

    <List v-if="!loading && starships.length>0" :starships="starships" />

    <NotFound v-if="!loading && searchText!='' && starships.length==0 "  />

</template>

<script>
import axios from 'axios'
import List from './List.vue'
import Pagination from './Pagination.vue'
import NotFound from './NotFound.vue'
import Loading from './Loading.vue'

export default {
    name: "SearchBar",
    data(){
        return {
            searchText: "",
            starships: [],
            loading: true,
            page: 1,
            pageNext: true
        }
    },
    components:{
        List,
        NotFound,
        Loading,
        Pagination
    },
    methods:{
    async Search(){
        await new Promise(r => setTimeout(r, 200));
            axios
                .get(`https://swapi.dev/api/starships/?page=${this.page}&search=${this.searchText}`)
                .then((response) => {this.starships = response.data.results;
                this.pageNext = response.data.next});
                this.loading = false;
        },
    ClearText(){
        this.searchText = "";
        this.Search();
    },
    NewPage(event){
        this.page = event;
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

</style>
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
import List from './List.vue'
import Pagination from './Pagination.vue'
import NotFound from './NotFound.vue'
import Loading from './Loading.vue'
import { getStarshipsByPageandSearchText } from '../service/service.js' ;

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
    async Search(...event){
        this.loading = true
        const data = await getStarshipsByPageandSearchText(event || this.page, this.searchText)
        this.starships = data.starships
        this.pageNext = data.pageInfo
        this.loading = false;
        },
    ClearText(){
        this.searchText = "";
        this.Search();
    },
    NewPage(event){
        this.page = event;
        this.Search(event);
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
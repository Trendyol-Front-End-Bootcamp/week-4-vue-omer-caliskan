<template>
    <div class="search">
        <span>Search by Name or Model: </span>
        <input type="text" v-model="searchText" placeholder="Search" :change="Trigger()">
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
    async Search(searchText){
        await new Promise(r => setTimeout(r, 200));
            axios
                .get(`https://swapi.dev/api/starships/?search=${searchText}`)
                .then((response) => (this.starships = response.data.results));
                this.loading = false;
        },
        async Trigger(){
           await this.Search(this.searchText);
    },
    created(){
        this.starships = this.Search(this.searchText);
    }
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

</style>
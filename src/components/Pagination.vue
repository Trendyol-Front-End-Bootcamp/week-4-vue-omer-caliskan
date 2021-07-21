<template>
    <div class="pagination">
        <button v-if="page!=1" @click="PrevPage(page)">Prev</button>
        <button v-if="pageNext" @click="NextPage(page)">Next</button>
            
        </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        page: Number,
        pageNext: Boolean
    },
    methods: {
        NextPage(page){
        page = page + 1;
        this.$emit("newPage", page);
    },
    PrevPage(page){
        page = page - 1;
        this.$emit("newPage", page);
    }
    }
}
</script>

<style scoped>

.pagination{
    padding: 5px 5%;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
}

.pagination button{
    padding: 5px;
    width: 150px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
}

</style>
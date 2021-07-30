<template>
    <router-link to="/" >
    <div class="header">
    <h1>Star Wars StarShips</h1>
    </div>
    </router-link>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

.header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-bottom: 1px solid #FFE81F;
    background-color: rgba(0,0,0,0.8);
}

</style>
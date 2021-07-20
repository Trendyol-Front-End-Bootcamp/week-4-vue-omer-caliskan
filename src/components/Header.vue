<template>
    <div class="header">
        <router-link to="/">
    <h1>Star Wars StarShips</h1>
        </router-link>
    </div>
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
}

</style>
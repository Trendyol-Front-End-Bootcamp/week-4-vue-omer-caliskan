<template>
    <div class="notfound"> 
    <img src="../assets/images/not-found.jpg" alt="Not Found"/>
    <span> The page you trying to search has not found. </span>
    </div>
</template>

<style scoped>

.notfound{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 300px;
    background: #151515;
    gap: 30px;
    flex-direction: column
}

.notfound span{
    color: #ffe81f;
    text-align: center;
    font-size: 35px;
    padding: 20px;
    background: rgba(255,255,255,0.3)
}

.notfound img{
    width: 600px;
    height: 400px;
    padding: 30px;
}

</style>
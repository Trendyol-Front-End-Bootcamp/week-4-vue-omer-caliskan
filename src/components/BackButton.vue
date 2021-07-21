<template>
<router-link to="/" >
    <div class="backbutton">
        <span>{{ "<" }}</span>
    </div>
    </router-link>
</template>

<script>
export default {
    name: "BackButton"
}
</script>

<style scoped>

.backbutton{
    font-size: 60px;    
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    margin-left: 50px;
    margin-top: 50px;
    background: #FFE81F;
    position:absolute;
    box-shadow: 0 0 10px rgba(255,255,255);
    cursor: pointer;
    transition: 0.5s ease;
}

.backbutton span{
    transform: translate(-2px, -5px);
    color: white;
}

.backbutton:hover{
    transform: scale(1.2);
    transition: 1s ease;
    box-shadow: 0 0 20px rgba(255,255,255);
}

</style>
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
    font-size: 40px;    
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    margin-left: 50px;
    margin-top: 50px;
    background: #FFE81F;
    position:absolute;
    box-shadow: 0 0 10px whitesmoke;
    cursor: pointer;
    transition: 0.5s ease;
}

.backbutton span{
    transform: translate(-2px, -0px);
    color: whitesmoke;
}

.backbutton:hover{
    transform: scale(1.1);
    transition: 1s ease;
    box-shadow: 0 0 15px whitesmoke;
}

</style>
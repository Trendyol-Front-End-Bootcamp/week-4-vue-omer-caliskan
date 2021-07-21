<template>
    <div class="list">
        <div class="item" v-for="item in starships" :key="item.id">
            <router-link :to="{ name: 'Details', params : { id : item.url.split('/')[5]}}">
            <h2>{{ item.name }} </h2> 
            <div class="item-text-image"> 
                <div class="item-image"> 
                    <img src="../assets/images/x-wing.svg" alt="starship" />
                </div>
                
                <div class="item-text">
                    <h3>Model
                        <h4>{{ item.model }}</h4> 
                    </h3>

                    <h3>Hyperdrive Rating
                        <h4>{{ item.hyperdrive_rating }}</h4>
                    </h3>
                </div>
            </div>
            </router-link>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'List',
    props: {
        starships: Array
    }
}
</script>

<style scoped>

.list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin: 20px 5%;
}

a {
    width: 100%;
    height: 100%;
    color: #ffe81f;
}

.item-text-image{
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    height: calc(100% - 52px);
}

.item{
    border: 1px solid whitesmoke;
    box-shadow: 0 5px 10px rgba(245, 245, 245, 0.5);
    background: url(../assets/images/space.jpg);
    background-size: 170%;
    background-position-x: 20%;
    background-position-y: 40%;
    transition: 1s ease;
}

.item:hover{
    transition: 2s ease;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: 300%;
    transform: scale(1.07);
}

.item-text-image img{
    width: 100%;
    height: 100%;
    padding: 20px;
}

.item-text h3{
    padding: 30px;
} 

.item-text h4{
    padding-top: 10px ;
    margin-top: 5px;
    border-top: 1px solid #ffe81f;
    color: white;
    padding-left: 10px;
}

.item h2{
    background:rgb(59, 58, 48, 0.9);
    color: white;
    padding: 10px;
    text-align: center;
}

.item-text{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
}


</style>
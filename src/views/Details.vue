<template>
  <Loading v-if="loading" /> 
  <BackButton v-if="!loading" />
  <div v-if="!loading" class="details">
    <div class="detail-item">
      <h1> {{ starship.name }} </h1>
      <div class="item-image-text">
      <div>
      <img src="../assets/images/x-wing.svg" alt="starship" />
      </div>
      <div class="detail-text">
      <span> <strong> Model: </strong> {{ starship.model }} </span>
      <span> <strong> Hyperdrive Rate: </strong> {{ starship.hyperdrive_rating }} </span>
      <span> <strong> Passenger: </strong> {{ starship.passengers }} </span>
      <span> <strong>Max Atmosphering Speed:</strong> {{ starship.max_atmosphering_speed }} </span>
      <span> <strong>Manufacturer:</strong> {{ starship.manufacturer }} </span>
      <span> <strong>Crew:</strong> {{ starship.crew }} </span>
      <span> <strong>Cargo Capacity:</strong> {{ starship.cargo_capacity }} </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BackButton from '../components/BackButton.vue';
import Loading from '../components/Loading.vue'
export default {
  name: "Details",
  components:{
    BackButton,
    Loading
  },
  data(){
    return{
      starship : null,
      loading : true
    };
  },
  created(){
    this.starship = this.getStarship(this.$route.params.id);
  },
  methods: {
    async getStarship(id){
      await new Promise(r => setTimeout(r, 200));
          axios
                .get(`https://swapi.dev/api/starships/${id}/`)
                .then((response) => (this.starship = response.data));
                this.loading = false;
  }
  }
}
</script>

<style scoped>

.details{
  text-align: center;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/images/stars.jpg);
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
}

.detail-item{
  width: 70%;
  height: 50%;
  border: 1px solid whitesmoke;
  padding: 15px;
  background: rgba(0,0,0,0.8);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.detail-item h1{
  background: rgba(245, 245, 245, 0.4);
  padding: 10px;
  color: #FFE81F;
}

.item-image-text{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.detail-item img{
    width: 80%;
    height: 100%;
    padding: 20px;
}

.detail-text span{
  color: white;
  width: 100%;
  display: block;
  font-size: 20px;
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid;
}

.detail-text strong{
  color: #FFE81F;
}

.detail-text span:last-child{
  border: none
}

.detail-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>

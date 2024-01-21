<template>
    <div v-for="vehicle in vehicles" v-bind:key="vehicle.id">
        <h2>{{ vehicle.model }}</h2>
        <h2>{{ vehicle.fin }}</h2>
        <h2>{{ vehicle.motorCode }}</h2>
        <h2>{{ vehicle.motorYear }}</h2>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const vehicles = ref({});

onMounted(
    () => {
        try {
        axios.get(
          `http://localhost:8080/demo/customer/${route.params.id}/vehicles`)
          .then( ({data}) => {
            vehicles.value = data
          })
        console.log(vehicles);
      } catch (error) {
        console.log(error);
      }
    }
)


</script>
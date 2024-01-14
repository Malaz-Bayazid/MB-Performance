<template>
        <h1>Registration</h1>
    <div>
        <form @submit.prevent = "createNewUser">
            <div>
                <label for="username">Username: </label>
                <input name="username" v-model="name" placeholder="Username">
            </div>
            <div>
                <label for="email">Email: </label>
                <input name="email" v-model="email" placeholder="Email">
            </div>

            <div>
                <label for="fin">FIN: </label>
                <input name="fin" v-model="fin" placeholder="FIN">
            </div>

            <div>
                <label for="model">Model: </label>
                <input name="model" v-model="model" placeholder="Model">
            </div>

            <div>
                <label for="modelYear">Model year: </label>
                <input name="modelYear" v-model="modelYear" placeholder="Model year">
            </div>

            <div>
                <label for="MotorCode">Motor code: </label>
                <input name="MotorCode" v-model="motorCode" placeholder="Motor code">
            </div>
            <input type="submit" value="Create new User">
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {toast} from 'vue3-toastify'

export default {
    data(){
        return{
            name: "",
            email: "",
            fin: "",
            model: "",
            motorCode: "",
            modelYear: ""
        }
    },
    methods: {
        async createNewUser() {
        //const test = JSON.stringify({name, email, });
        const newUserBody = {name: this.name, email: this.email, fin: this.fin, model: this.model, motorCode:this.motorCode, motorYear: this.modelYear}; 
        await axios.post("http://localhost:8080/demo/add", newUserBody)
        .then(response => {
            if(response.status == 200){
                toast.success("New User created");
            }
        })
        .catch(error => {
            console.error("Error occurred " + error.message);
        })
    }
}
}

</script>
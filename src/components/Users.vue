<template>
    <div>
        <button @click="getUsers">Get Users List</button>
        <hr />
        <div v-if="loading">Data Loading......</div>
        <ul v-else>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
    export default {
        name: 'Users',
        data(){
            return{
                users: [],
                loading:false,
                err: ''
            }
        },
        methods: {
            getUsers(){
                Axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
                    this.users = response.data;
                    this.loading = false;
                }).catch(err => {
                    this.loading=false;
                    this.err = 'Something went wrong .plz try later....'
                    console.log('Error',err);
                });
            }
        }
        
    }
</script>

<style scoped>

</style>
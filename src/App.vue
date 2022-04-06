<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="{ name: 'About'}">About</router-link></li>
      <li><router-link :to="{ name: 'Users'}">Users</router-link></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      name: 'Shubham'
    }
  },
  components: {
  },
  provide(){
    return{
      userName: this.name
    }
  }
}
</script>
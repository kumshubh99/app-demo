<template>
    <div class="card" @click="$emit('send', name)">
        <h5>{{ name }}</h5>
        <hr />
        <h6>Email: {{ emailId }}</h6>
        <h6>Mobile: {{ mobile }}</h6>
    </div>

</template>
<script> 
    export default {
        name: 'Contact',
        props: ['name', 'emailId', 'mobile'],
        emits: ['send']
    }

</script>
<style scoped>
    .card{
        color: blue;
        background-color: lightcyan;
        border: 1px solid blue;
        padding: 10px;
        margin: 10px;
        border-radius: 20px;
        display: inline-block;
        width: 300px;
        cursor: pointer;
    }
</style>
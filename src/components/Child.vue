<template>
    <div>
        <h4>Child Component: {{userName}}</h4>

    </div>
</template>

<script>
    export default {
        name: 'Child',
        inject: ['userName']
    }
</script>

<style scoped>

</style>
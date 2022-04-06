  <template>
        <div>
            <h3>Parent Component {{userName}}</h3>
        </div>
    </template>
    
    <script>
        export default {
             name: 'Child',
        inject: ['userName']
    }
            
    </script>
    
    <style lang="less" scoped>
    
    </style>


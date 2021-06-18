<template>
    <div id="services">
        <service-card :key="i" v-for="i in 5 "></service-card>
    </div>
</template>

<script>
import ServiceCard from '../reusable/ServiceCard.vue'

    export default {
  components: { ServiceCard },
        component:{
            ServiceCard
        }
        
    }
</script>

<style scoped>
#services{
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
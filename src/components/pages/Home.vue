<template>
<div class="">
  <home-carousel></home-carousel>
  <home-services ></home-services>
  <inspiration-page></inspiration-page>
</div>

</template>

<script>
import InspirationPage from './InsipirationPage.vue'
import HomeCarousel from './HomeCarousel.vue'
import HomeServices from './HomeServices.vue'

export default {
  name: 'App',
  components: {
    HomeCarousel,
    HomeServices,
    InspirationPage
  }
}
</script>

<style>

</style>

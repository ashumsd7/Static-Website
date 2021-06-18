<template>
    <div class="container">
        <div class="serives">
            
            <div class="service-icon">
                <img width="100" height="100" src="https://image.flaticon.com/icons/png/512/236/236998.png" alt="" srcset="">
            </div>
            <div class="service-title">
   <h3>Title of Service </h3>
            </div>
         
            <div class="service-about">
                Labore dolore ea diam ea vero magna vero takimata duo dolor. Aliquyam gubergren voluptua et labore. Voluptua nonumy et voluptua.
            </div>
            <div class="service-link">
                <router-link disabled to="about"> read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    width: 350px;
    height: auto;
    background: rgb(253, 253, 253);
    margin:1rem;
    padding: .5rem;
    cursor: pointer;
    transition: .2s ease-in;
    
}
.container:hover{
    width: 360px;
    height: auto;
    background: rgb(243, 234, 234);
    box-shadow: 4px 6px rgb(228, 228, 228);
    border-radius: 10px;
   
    
}
.service-link a{
    color: red;
    font-weight: 400;
    margin-top: .5rem;
    font-size: .8rem;
}
.service-title h3{
    padding: 1rem;

}


</style>
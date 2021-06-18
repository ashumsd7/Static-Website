<template>

    <div class="flex-container">
  <div class="flex-item-left"> 
      <h5> Our Inspiration</h5>
      <p>Justo sea sea dolores diam vero nonumy ipsum Elitr ipsum et accusam sanctus ut sit sit est rebum. Accusam dolor ipsum sit et sit eos lorem. Lorem sea.no eosAliquyam eirmod et justo accusam erat dolor dolor, sea sanctus amet et accusam diam ipsum. Dolor amet dolor nonumy ipsum... Sanctus magna diam vero voluptua sed est elitr, sanctus ea consetetur magna et aliquyam ut sit rebum magna, ut diam stet at ipsum ipsum vero nonumy sea. Diam gubergren amet amet amet, lorem amet dolores lorem dolores justo dolore ipsum.</p>
  </div>
  <div class="flex-item-right">  <img src="../../assets/carousels/ganeshji.jpg" alt=""></div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
   
}
#about{
background: red;
width: 65%;



}
#img{
background: black;
width:35%;


}
#img img{
    width: 300px;
    height: auto;

}
.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
}

.flex-item-left {
  background-color: #f1f1f1;
  padding: 10px;
  flex: 60%;
  padding: 100px;
background-color: rgb(252, 109, 98);
}
.flex-item-left h5{
    text-align: left;
    color: white;
    text-decoration: underline;
}

.flex-item-left p{
    text-align: left;
    margin-top: 3rem;
    font-size: 1rem;
    vertical-align: middle;
    align-content: center;
    color: white;
    font-weight: 500;
}

.flex-item-right {
  background-color: rgb(252, 168, 162);
  padding: 10px;
  flex: 40%;
}
.flex-item-right img{
    width: 300px;
    box-shadow: 4px 8px gray;
    border-radius: 10px;
    height: auto;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
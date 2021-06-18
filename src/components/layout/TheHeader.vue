<template>
  <header>
    <nav id="nav">
      <ul>
        <h3 @click="redirectTohome">AWADH</h3>
        <li :key="item" v-for="item in items">
          <router-link :to="item.to"> {{ item.link }}</router-link>
       
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          to: "/home",
          link: "HOME",
        },
        {
          to: "/about",
          link: "ABOUT",
        },
        {
          to: "/contact",
          link: "CONTACT",
        },
      ],
    };
  },
  methods: {
    redirectTohome(){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background: linear-gradient(200deg, #5298f5, #fafafa);
  color: rgb(0, 0, 0);
  height: auto;
  position: sticky;
  top: 0;
}
#nav ul {
  display: flex;
  flex-direction: start;
}
#nav h3 {
  margin: 18px 0 0 10px;
  color: red;
  font-weight: bolder;
  font-size: 1.3rem;
  cursor: pointer;
  transition: .5s;
}
#nav h3:hover {
  margin: 18px 0 0 10px;
  color: rgb(236, 86, 16);
 text-shadow:2px 4px rgb(245, 115, 115) .3;
  font-size: 1.4rem;
  text-decoration: underline;
 
  
}
#nav ul li {
  padding: 10px;
  list-style: none;
  padding: 20px;
  margin-left: 30px;
}
#nav ul li a {
  text-decoration: none;
}
@media (max-width: 400px) {
  #nav h3 {
    margin: 10px 0 0 10px;
    color: red;
    font-weight: bolder;
    font-size: 1rem;
  }
  #nav ul li {
    list-style: none;
    padding: 8px;
    margin-left: 15px;
  }
  #nav ul li a {
    font-size: 0.8rem;
  }
}
</style>

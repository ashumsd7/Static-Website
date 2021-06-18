<template>
  <div class="hello">
    <header>
     
      <nav id="nav">
        <ul>
   
          <li v-for="item in items" :key="item">
            <a :href="item.url" v-if="!item.children">
              {{ item.name }}
            </a>
            <span
              v-else
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
            >
              {{ item.name }}

              <ul class=" dropdown" :class="{ isOpen }">
                <li v-for="child in item.children" :key="child">
                  <a :href="child.url">
                    {{ child.name }}
                  </a>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isOpen: false,
      items: [
         {
          url: "#home",
          name: "V-TEHNICAL",
        },
        {
          url: "#home",
          name: "Home",
        },
        {
          url: "#about",
          name: "About",
        },
        {
          url: "#service",
          name: "Service",
          children: [
            {
              url: "#service1",
              name: "Service1",
            },
            {
              url: "#service2",
              name: "Service2",
            },
            {
              url: "#service3",
              name: "Service3",
            },
          ],
        },
        {
          url: "#contact",
          name: "Contact",
        },
      ],
    };
  },
  methods: {
    mouseover: function() {
      this.isOpen = true;
    },
    mouseleave: function() {
      this.isOpen = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  background-color: #007db9;
}


#nav {

  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

#nav > ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#nav > ul > li > a {
  display: block;
  height: auto;
  
  color: #fff;

  text-decoration: none;
}

#nav > ul > li > span {
  position: relative;
  display: block;
  height: auto;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

#nav > ul > li > span:after {
  content: "▼";
  display: inline-block;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 0;
  list-style-type: none;
  background-color: #007db9;
}

.dropdown li {
  width: 250px;
  border-bottom: 1px solid #fff;
}

.dropdown li a {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

.isOpen {
  display: block;
}
</style>

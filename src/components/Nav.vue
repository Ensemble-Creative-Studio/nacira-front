<template>
  <div :style="{ backgroundColor: bgColor }" id="nav">
    <router-link to="/"><h1>Axel de Beaufort Studio</h1></router-link>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/press">Press</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      bgColor: "var(--primary)",
    };
  },
  watch: {
    $route() {
      this.bgColor =
        this.$route.path === "/press" ? "var(--secondary)" : "var(--primary)";
    },
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  /* background: var(--primary); */
  height: var(--nav-size);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 999;
}

#nav a,
#nav h2 {
  color: black;
  text-decoration: none;
  font-family: "Wremena", serif;
  font-weight: 300;
}

h2 {
  font-size: 30px;
}

.menu > a {
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.menu > a:last-child {
  margin-right: 0;
}

@media screen and (max-width: 500px) {
  #nav {
    padding: 16px;
  }

  h2 {
    font-size: 16px;
  }
  .menu > a {
    font-size: 16px;
    margin-left: 7.5px;
    margin-right: 7.5px;
  }
}
</style>

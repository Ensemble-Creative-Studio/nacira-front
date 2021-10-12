<template>
  <Nav />
  <router-view />
</template>

<script>
//Components
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

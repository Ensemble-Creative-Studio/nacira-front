<template>
  <div class="about-text-container">
    <p v-if="description" class="description" v-html="markdownToHtml"></p>
    <div class="contact-wrapper">
      <p>{{ mail }}</p>
      <p>{{ phone }}</p>
      <p>{{ address }}</p>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "AboutText",
  props: {
    description: String,
    mail: String,
    phone: String,
    address: String,
  },
  computed: {
    markdownToHtml() {
      return marked(this.description);
    },
  },
};
</script>

<style>
.about-text-container {
  width: 41%;
  margin-top: calc(147px - var(--nav-size));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.description p {
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: normal, sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
}

.contact-wrapper {
  max-width: 40%;
}

.contact-wrapper p {
  font-size: 19px;
  font-family: "Wremena", serif;
  font-weight: 300;
}
.contact-wrapper p:last-child {
  margin-top: 30px;
}

@media screen and (max-width: 500px) {
  .about-text-container {
    width: 100%;
    margin-top: 40px;
  }

  .contact-wrapper {
    max-width: 60%;
  }
}
</style>

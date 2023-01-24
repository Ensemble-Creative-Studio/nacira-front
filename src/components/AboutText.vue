<template>
  <div class="about-text-container">
    <div
      v-if="description"
      class="description"
      v-html="markdownToHtml"
      v-scrollanimation
    ></div>
    <div v-if="description" class="contact-wrapper" v-scrollanimation>
      <p>
        <a target="_blank" href="https://www.instagram.com/axeldebeaufort/"
          >instagram @axeldebeaufort</a
        >
      </p>
      <p>Olivier de La Ferrière</p>
      <p>{{ mail }}</p>
      <p>{{ phone }}</p>
      <p class="address">{{ address }}</p>
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

.description {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.description h1 {
    font-size: 28px;
    font-family: "Wremena", serif;
    font-weight: 300;
}

.description p {
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: normal, sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
}

.contact-wrapper {
  /* max-width: 200px; */
  /* margin-top: 40px; */
  transition: transform 0.5s ease, opacity 0.5s ease;
  line-height: 26px;
}

/* .address {
  max-width: 150px;
} */

.contact-wrapper p,
.contact-wrapper a {
  font-size: 19px;
  font-family: "Wremena", serif;
  font-weight: 300;
  color: black;
  text-decoration: none;
}

.contact-wrapper p:first-of-type {
  margin-bottom: 30px;
}

.description.before-enter,
.contact-wrapper.before-enter {
  transform: translateY(25px);
  opacity: 0.5;
}

.description.enter,
.contact-wrapper.enter {
  transform: translateY(0px);
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .about-text-container {
    width: 100%;
    margin-top: 40px;
  }

  .contact-wrapper {
    max-width: 200px;
    margin-top: 40px;
  }
}
@media screen and (max-width: 500px) {
  .contact-wrapper {
    max-width: 60%;
  }
}
</style>

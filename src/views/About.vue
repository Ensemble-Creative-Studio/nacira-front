<template>
  <div class="container">
    <AboutText
      :description="aboutDataDescription"
      :mail="contactDataMail"
      :phone="contactDataPhone"
      :address="contactDataAddress"
    />
    <AboutImg :photo="aboutDataUrl" />
  </div>
</template>

<script>
import { fetchAbout, fetchContact } from "../services";

//Components
import AboutText from "../components/AboutText";
import AboutImg from "../components/AboutImg";

export default {
  name: "About",
  components: {
    AboutText,
    AboutImg,
  },
  data() {
    return {
      aboutDataDescription: "",
      aboutDataUrl: "",
      contactDataMail: "",
      contactDataPhone: "",
      contactDataAddress: "",
    };
  },
  async mounted() {
    //API
    const { aboutData, aboutError } = await this.fetchAbout();
    if (aboutData.statusCode) console.error(aboutData);
    if (aboutError) console.error(aboutError);
    if (aboutData) {
      this.aboutDataDescription = aboutData.description;
      this.aboutDataUrl = aboutData.photo.url;
    }

    const { contactData, contactError } = await this.fetchContact();
    if (contactData.statusCode) console.error(contactData);
    if (contactError) console.error(contactError);
    if (contactData) {
      this.contactDataMail = contactData.email;
      this.contactDataPhone = contactData.phone;
      this.contactDataAddress = contactData.address;
    }
  },
  methods: {
    fetchAbout,
    fetchContact,
  },
};
</script>

<style scoped>
.container {
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    min-height: unset;
    height: unset;
  }
}
/* @media screen and (max-width: 500px) {
  .container {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
    min-height: unset;
    height: unset;
  }
} */
</style>

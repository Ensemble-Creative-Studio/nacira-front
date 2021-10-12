import { SERVER_URL } from "./global";

export const fetchSliderImages = async () => {
  let sliderError, sliderData;
  try {
    const res = await fetch(`${SERVER_URL}/slider`);
    sliderData = await res.json();
  } catch (newError) {
    sliderError = newError;
  }
  return { sliderData, sliderError };
};

export const fetchAbout = async () => {
  let aboutData, aboutError;
  try {
    const res = await fetch(`${SERVER_URL}/about`);
    aboutData = await res.json();
  } catch (newError) {
    aboutError = newError;
  }
  return { aboutData, aboutError };
};

export const fetchContact = async () => {
  let contactError, contactData;
  try {
    const res = await fetch(`${SERVER_URL}/contact`);
    contactData = await res.json();
  } catch (newError) {
    contactError = newError;
  }
  return { contactData, contactError };
};

export const fetchAllPress = async () => {
  let pressError, pressData;
  try {
    const res = await fetch(`${SERVER_URL}/presses`);
    pressData = await res.json();
  } catch (newError) {
    pressError = newError;
  }
  return { pressData, pressError };
};

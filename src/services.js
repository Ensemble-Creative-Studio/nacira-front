import { SERVER_URL } from "./global";

// Classic version
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

//Component version
// export const fetchSliderImages = async () => {
//   let sliderError, sliderData;
//   try {
//     const res = await fetch(`${SERVER_URL}/home-slider`);
//     sliderData = await res.json();
//   } catch (newError) {
//     sliderError = newError;
//   }
//   return { sliderData, sliderError };
// };

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

//Classic version
export const fetchAllPress = async () => {
  let pressError,
    pressData,
    pressLoaded = false;
  try {
    const res = await fetch(`${SERVER_URL}/presses`);
    pressData = await res.json();
    pressLoaded = true;
  } catch (newError) {
    pressError = newError;
    pressLoaded = false;
  }
  return { pressData, pressError, pressLoaded };
};
//Component version
// export const fetchAllPress = async () => {
//   let pressError,
//     pressData,
//     pressLoaded = false;
//   try {
//     const res = await fetch(`${SERVER_URL}/press-articles`);
//     pressData = await res.json();
//     pressLoaded = true;
//   } catch (newError) {
//     pressError = newError;
//     pressLoaded = false;
//   }
  return { pressData, pressError, pressLoaded };
};

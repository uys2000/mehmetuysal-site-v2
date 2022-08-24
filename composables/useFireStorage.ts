import { getDownloadURL, getStorage, ref } from "firebase/storage";

// Create a root reference

export const getImageUrl = async function name(img: string) {
  const storage = getStorage();
  const imgRef = ref(storage, img);
  return getDownloadURL(imgRef);
};

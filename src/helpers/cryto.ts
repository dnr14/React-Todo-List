import CryptoJS from "crypto-js";

export const encrypt = (data: Item[], key: string) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

export const decrypt = (text: string, key: string): Item[] => {
  try {
    const bytes = CryptoJS.AES.decrypt(text, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error(error);
    return [];
  }
};

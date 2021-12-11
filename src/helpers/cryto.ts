import CryptoJS from "crypto-js";
import { ItemObject } from "../types/types";

export const encrypt = (data: ItemObject[], key: string) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

export const decrypt = (text: string, key: string): ItemObject[] => {
  try {
    const bytes = CryptoJS.AES.decrypt(text, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error(error);
    return [];
  }
};

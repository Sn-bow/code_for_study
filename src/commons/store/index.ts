import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "isAccessToken",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

import { atom } from "jotai";
import { User } from "../utils/interfaces";
// import { QRcode } from "../utils/interfaces";

export const qrcodeAtom = atom<string>("");
export const userAtom = atom<User | null>(null);
export const tokenAtom = atom<string | null>(null);
export const usersAtom = atom<User[] | null>([]);

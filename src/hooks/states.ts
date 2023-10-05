import jotai from "jotai";
import { User } from "../utils/interfaces";
// import { QRcode } from "../utils/interfaces";

export const qrcodeAtom = jotai.atom<string>("");
export const userAtom = jotai.atom<User | null>(null);

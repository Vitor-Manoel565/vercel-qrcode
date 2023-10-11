interface IColors<T> {
  light: T;
  dark: T;
  alert: T;
  success: T;
  primary: T;
  gray: T;
  warning: T;
  grayDot: T;
}

export const COLORS: IColors<string> = {
  light: "#fff",
  dark: "#000",
  alert: "",
  success: "#00BF7A",
  primary: "#DAA95A",
  gray: "#F5F5F5",
  warning: "#FEC514",
  grayDot: "#B6B6B6",
};





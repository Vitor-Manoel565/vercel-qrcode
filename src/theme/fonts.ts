interface ISize<T> {
  sm: T;
  md: T;
  lg: T;
  xl: T;
  xxl: T;
}

export const FONTSIZE: ISize<string> = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
};

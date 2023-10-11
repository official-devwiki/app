export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "caption";
export type FontWeightType = "thin" | "light" | "regular" | "medium" | "bold";
export type FontColorType =
  | "textDefault"
  | "textWhite"
  | "textPrimary"
  | "textBlack000"
  | "textBlack100"
  | "textBlack200"
  | "textGray000"
  | "textGray100"
  | "textGray200"
  | "textRed000"
  | "textGrayAndWhite";

export const FontColor = {
  textDefault: "var(--textDefault)",
  textWhite: "var(--textWhite)",
  textPrimary: "var(--textPrimary)",
  textBlack000: "var(--textBlack000)",
  textBlack100: "var(--textBlack100)",
  textBlack200: "var(--textBlack200)",
  textGray000: "var(--textGray000)",
  textGray100: "var(--textGray100)",
  textGray200: "var(--textGray200)",
  textRed000: "var(--textRed000)",
  textGrayAndWhite: "var(--textGrayAndWhite)",
};

export function FontSize(variant: string) {
  switch (variant) {
    case "h1":
      return 20;
    case "h2":
      return 18;
    case "h3":
      return 16;
    case "h4":
      return 16;
    case "h5":
      return 16;
    case "body1":
      return 16;
    case "body2":
      return 14;
    case "caption":
      return 12;
    default:
      return 16;
  }
}

export function FontWeight(weight: string) {
  switch (weight) {
    case "thin":
      return 100;
    case "light":
      return 300;
    case "regular":
      return 400;
    case "medium":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
}

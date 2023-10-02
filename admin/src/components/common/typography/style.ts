export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'caption';
export type FontWeightType = 'thin' | 'light' | 'regular' | 'medium' | 'bold';
export type FontColorType =
  | 'black'
  | 'white';

export const FontColor = {
  black: '#222',
  white: '#fff',
}

export function FontSize(variant: string) {
  switch (variant) {
    case 'h1': return 20;
    case 'h2': return 18;
    case 'h3': return 16;
    case 'h4': return 16;
    case 'h5': return 16;
    case 'body1': return 16;
    case 'body2': return 14;
    case 'caption': return 12;
    default: return 16;
  }
}

export function FontWeight(weight: string) {
  switch (weight) {
    case 'thin': return 200;
    case 'light': return 300;
    case 'regular': return 400;
    case 'medium': return 500;
    case 'bold': return 700;
    default: return 400;
  }
}

type HexColor = `#${string}`; // Not strict, but conveys intent
type RGBColor = `${number}, ${number}, ${number}`; // Not strict, but conveys intent
export interface Color {
  name: string;
  hex: HexColor;
  rgb: RGBColor;
}

// The color palette used throughout the website
export const colors: Color[] = [
  {
    name: `pink`,
    hex: `#ff90e8`,
    rgb: `255, 144, 232`,
  },
  {
    name: `yellow`,
    hex: `#ffc900`,
    rgb: `255, 201, 0`,
  },
  {
    name: `orange`,
    hex: `#ff7051`,
    rgb: `255, 112, 81`,
  },
  {
    name: `green`,
    hex: `#3ecfc1`,
    rgb: `62, 207, 193`,
  },
  {
    name: `purple`,
    hex: `#90a8ed`,
    rgb: `144, 168, 237`,
  },
] as const satisfies Color[];

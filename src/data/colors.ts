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
    name: `electric-pink`,
    hex: `#FF8AD8`,
    rgb: `255, 138, 216`,
  },
  {
    name: `signal-yellow`,
    hex: `#FFD23F`,
    rgb: `255, 210, 63`,
  },
  {
    name: `coral-orange`,
    hex: `#FF7A5C`,
    rgb: `255, 122, 92`,
  },
  {
    name: `mint-teal`,
    hex: `#3ED6C2`,
    rgb: `62, 214, 194`,
  },
  {
    name: `soft-indigo`,
    hex: `#8FA4FF`,
    rgb: `143, 164, 255`,
  },
] as const satisfies Color[];
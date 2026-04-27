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
    name: `sage-matcha`,
    hex: `#A4B07E`,
    rgb: `164, 176, 126`,
  },
  {
    name: `olive-matcha`,
    hex: `#707C4F`,
    rgb: `112, 124, 79`,
  },
  {
    name: `cocoa-bark`,
    hex: `#6D4930`,
    rgb: `109, 73, 48`,
  },
] as const satisfies Color[];

const colors: { [name: string]: string } = require('../data/nameToHex.json');

export const colorToHex = (color: string): string | undefined => {
  return colors[color.toLowerCase()];
};

if (require.main === module) {
  const color = process.argv[2];
  console.log(colorToHex(color));
}

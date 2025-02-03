import * as fs from 'fs';

const colors: { [name: string]: string } = require('../data/nameToHex.json');

export const colorToHex = (color: string): string | undefined => {
  return colors[color.toLowerCase()];
};

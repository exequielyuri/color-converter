import { colorToHex } from '../core/colorConverter';

describe('Color Converter', () => {
  it('should return undefined for unknown colors', () => {
    expect(colorToHex('unknown')).toBeUndefined();
    expect(colorToHex('123')).toBeUndefined();
  });

  it('should return undefined for empty input', () => {
    expect(colorToHex('')).toBeUndefined();
    expect(colorToHex(' ')).toBeUndefined();
  });

  it('should return undefined for special characters', () => {
    expect(colorToHex('@')).toBeUndefined();
    expect(colorToHex('#')).toBeUndefined();
    expect(colorToHex('%')).toBeUndefined();
    expect(colorToHex('!')).toBeUndefined();
    expect(colorToHex('^')).toBeUndefined();
    expect(colorToHex('\\')).toBeUndefined();
    expect(colorToHex('/')).toBeUndefined();
  });

  it('should convert primary colors', () => {
    expect(colorToHex('red')).toBe('#FF0000');
    expect(colorToHex('green')).toBe('#00FF00');
    expect(colorToHex('blue')).toBe('#0000FF');
  });

  it('should convert secondary colors', () => {
    expect(colorToHex('aqua')).toBe('#00FFFF');
    expect(colorToHex('magenta')).toBe('#FF00FF');
    expect(colorToHex('yellow')).toBe('#FFFF00');
  });

  it('should be case-insensitive', () => {
    expect(colorToHex('Red')).toBe('#FF0000');
    expect(colorToHex('rEd')).toBe('#FF0000');
    expect(colorToHex('reD')).toBe('#FF0000');
  });

  it('should automatically trim whitespace characters', () => {
    expect(colorToHex(' white')).toBe('#FFFFFF');
    expect(colorToHex('white ')).toBe('#FFFFFF');
    expect(colorToHex('\nwhite')).toBe('#FFFFFF');
    expect(colorToHex('white\n')).toBe('#FFFFFF');
    expect(colorToHex('\twhite')).toBe('#FFFFFF');
    expect(colorToHex('white\t')).toBe('#FFFFFF');
    expect(colorToHex('\vwhite')).toBe('#FFFFFF');
    expect(colorToHex('white\v')).toBe('#FFFFFF');
    expect(colorToHex('\fwhite')).toBe('#FFFFFF');
    expect(colorToHex('white\f')).toBe('#FFFFFF');
  });

  it('should convert grayscale colors', () => {
    expect(colorToHex('black')).toBe('#000000');
    expect(colorToHex('white')).toBe('#FFFFFF');
    expect(colorToHex('grey')).toBe('#808080');
    expect(colorToHex('silver')).toBe('#C0C0C0');
  });

  it('should convert other common colors', () => {
    expect(colorToHex('orange')).toBe('#FFA500');
    expect(colorToHex('indigo')).toBe('#4B0082');
    expect(colorToHex('violet')).toBe('#9A0EEA');
    expect(colorToHex('purple')).toBe('#800080');
    expect(colorToHex('navy')).toBe('#01153E');
    expect(colorToHex('olive')).toBe('#808010');
    expect(colorToHex('teal')).toBe('#008080');
    expect(colorToHex('maroon')).toBe('#800000');
  });
});


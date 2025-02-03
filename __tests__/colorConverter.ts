import { colorToHex } from '../core/colorConverter';

describe('Color Converter', () => {
  it('should return undefined for unknown colors', () => {
    expect(colorToHex('unknown')).toBeUndefined();
  });

  it('should convert primary colors', () => {
    expect(colorToHex('red')).toBe('#FF0000');
    expect(colorToHex('green')).toBe('#00FF00');
    expect(colorToHex('blue')).toBe('#0000FF');

    expect(colorToHex('aqua')).toBe('#00FFFF');
    expect(colorToHex('magenta')).toBe('#FF00FF');
    expect(colorToHex('yellow')).toBe('#FFFF00');
  });

  it('should be case-insensitive', () => {
    expect(colorToHex('Red')).toBe('#FF0000');
    expect(colorToHex('rEd')).toBe('#FF0000');
    expect(colorToHex('reD')).toBe('#FF0000');
  });
});


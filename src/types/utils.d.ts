import type * as colorConvert from 'color-convert'

export type ColorMode = Pick<typeof colorConvert, 'rgb' | 'hsl' | 'cmyk' | 'hsv' | 'hwb'>

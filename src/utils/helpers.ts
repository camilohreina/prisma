import type { ColorMode } from '../types/utils'
import Color from 'color'
import type { CSSProperties } from 'react'

export const regexColorHexadecimal = new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/)

export const regexStartWithZero = new RegExp(/^0.*/)

export const regexNumberText = new RegExp(/^[0-9]+$/)

export const colorModes: Record<
    keyof ColorMode,
    {
        channels: { label: string; min: number; max: number }[]
        converter: (color: string) => number[]
    }
> = {
    rgb: {
        channels: [
            { label: 'Red', min: 0, max: 255 },
            { label: 'Green', min: 0, max: 255 },
            { label: 'Blue', min: 0, max: 255 },
        ],
        converter: (color) => Color(color).rgb().array(),
    },
    hsl: {
        channels: [
            { label: 'Hue', min: 0, max: 360 },
            { label: 'Saturation', min: 0, max: 100 },
            { label: 'Lightness', min: 0, max: 100 },
        ],
        converter: (color) => Color(color).hsl().array(),
    },
    cmyk: {
        channels: [
            { label: 'Cyan', min: 0, max: 100 },
            { label: 'Magenta', min: 0, max: 100 },
            { label: 'Yellow', min: 0, max: 100 },
            { label: 'Black', min: 0, max: 100 },
        ],
        converter: (color) => Color(color).cmyk().array(),
    },
    hsv: {
        channels: [
            { label: 'Hue', min: 0, max: 360 },
            { label: 'Saturation', min: 0, max: 100 },
            { label: 'Value', min: 0, max: 100 },
        ],
        converter: (color) => Color(color).hsv().array(),
    },
    hwb: {
        channels: [
            { label: 'Hue', min: 0, max: 360 },
            { label: 'Whiteness', min: 0, max: 100 },
            { label: 'Blackness', min: 0, max: 100 },
        ],
        converter: (color) => Color(color).hwb().array(),
    },
}

export const bgVar = '--bg'

export const fgVar = '--fg'

const alphaVar = '--alpha'

export const cssBgVar = `rgb(var(${bgVar}) / var(${alphaVar}, 1))`

export const cssFgVar = `rgb(var(${fgVar}) / var(${alphaVar}, 1))`

interface StyleFnOpts {
    fromVar?: string
    alpha?: string
}

export function applyStyle(property: 'bg' | 'color', options?: StyleFnOpts) {
    const resolvedVar = property === 'bg' ? cssBgVar : cssFgVar
    const targetOpts = { fromVar: resolvedVar, alpha: '1' } satisfies StyleFnOpts

    Object.assign(targetOpts, options)

    const cssProp = property === 'bg' ? 'backgroundColor' : 'color'

    return {
        [cssProp]: targetOpts.fromVar,
        [alphaVar as string]: targetOpts.alpha,
    } satisfies CSSProperties
}

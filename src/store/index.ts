import { atom } from 'jotai'

export const background = atom<string>('#eee')
export const foreground = atom<string>('#0a0908')

const colors = atom((get) => {
    const bg = get(background)
    const fg = get(foreground)

    return { bg, fg }
})

export const swapColors = atom(null, (get, set) => {
    const { bg, fg } = get(colors)

    set(background, fg)
    set(foreground, bg)
})

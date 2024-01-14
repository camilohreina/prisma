import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useAtomValue } from 'jotai'
import Color from 'color'
import { background, foreground } from '../store'
import { fgVar, bgVar } from '../utils/helpers'
import { SecurityCard } from '../preview/SecurityCard'
import { Profile } from '../preview/Profile'
import { Price } from '../preview/Price'
import { AccountCompromised } from '../preview/AccountCompromised'

export const SampleGrid = () => {
    const bg = useAtomValue(background)
    const fg = useAtomValue(foreground)
    const bgRgb = Color(bg).rgb().round().array()
    const fgRgb = Color(fg).rgb().round().array()

    return (
        <ResponsiveMasonry
            className="bg-white my-4 py-8 px-12 rounded-lg shadow-md border border-gray-200"
            style={{ [fgVar as string]: fgRgb.join(' '), [bgVar as string]: bgRgb.join(' ') }}
            columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}
        >
            <Masonry gutter="20px">
                <SecurityCard />
                <Profile />
                <Price />
                <AccountCompromised />
            </Masonry>
        </ResponsiveMasonry>
    )
}

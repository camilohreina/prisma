import { useAtomValue } from 'jotai'
import Color from 'color'
import { background, foreground } from '../store'
import { fgVar, bgVar } from '../utils/helpers'
import { SecurityCard } from '../preview/SecurityCard'
import { Profile } from '../preview/Profile'
import { Price } from '../preview/Price'
import { AccountCompromised } from '../preview/AccountCompromised'
import { Incoming } from '../preview/Incoming'
import { Progress } from '../preview/Progress'

export const SampleGrid = () => {
    const bg = useAtomValue(background)
    const fg = useAtomValue(foreground)
    const bgRgb = Color(bg).rgb().round().array()
    const fgRgb = Color(fg).rgb().round().array()

    return (
        <article
            style={{ [fgVar as string]: fgRgb.join(' '), [bgVar as string]: bgRgb.join(' ') }}
            className="bg-white my-4 py-8 px-12 rounded-lg shadow-md border border-gray-200"
        >
            <div className="grid grid-cols-3 gap-6">
                <div className="grid gap-4">
                    <SecurityCard />
                    <AccountCompromised />
                </div>
                <div className="grid gap-4">
                    <Profile />
                    <Incoming />
                </div>
                <div className="grid gap-4">
                    <Price />
                    <Progress />
                </div>
            </div>
        </article>
    )
}

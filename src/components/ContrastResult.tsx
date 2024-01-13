import { useAtomValue } from 'jotai'

import { wcagLevelsResult } from '../store'

import { ContrastScore } from './ContrastScore'
import { ContrastLevel } from './ContrastLevel'

export const ContrastResult = () => {
    const { passAAALargeText, passAAANormalText, passAALargeText, passAANormalText } = useAtomValue(wcagLevelsResult)

    return (
        <section className="flex flex-col gap-8  bg-white py-8 px-12 border border-gray-200 shadow-md rounded-lg">
            <ContrastScore />
            <ul className="grid grid-cols-2 gap-x-12 gap-y-5 ">
                <ContrastLevel contrast="AA - 4.5:1" pass={passAANormalText} textType="normal" />
                <ContrastLevel contrast="AA - 3:1" pass={passAALargeText} textType="large" />
                <ContrastLevel contrast="AAA - 7:1" pass={passAAANormalText} textType="normal" />
                <ContrastLevel contrast="AAA - 4.5:1" pass={passAAALargeText} textType="large" />
            </ul>
        </section>
    )
}

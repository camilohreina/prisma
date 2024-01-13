import { useAtomValue, type ExtractAtomValue } from 'jotai'
import type { ComponentType, SVGProps } from 'react'
import { contrastRelation } from '../store'
import { Sad } from '../icons/Sad'
import { Happy } from '../icons/Happy'
import { VeryHappy } from '../icons/VeryHappy'

type Feedback = ExtractAtomValue<typeof contrastRelation>['feedback']
type EmojiComponent = ComponentType<SVGProps<SVGSVGElement>>

const EmojiStatus: Record<Feedback, EmojiComponent> = {
    poor: Sad,
    good: Happy,
    'very-good': VeryHappy,
}

export const ContrastScore = () => {
    const { contrast, feedback } = useAtomValue(contrastRelation)

    function getSemanticColor() {
        const levelScore = {
            poor: 'red',
            good: 'yellow',
            'very-good': '#008000',
        }

        return levelScore[feedback]
    }

    const Emoji = EmojiStatus[feedback]

    return (
        <div className="flex flex-col justify-between w-full ">
            <span className=" text-gray-400 text-sm">CONTRAST RELATION</span>
            <div className="flex justify-between items-end" style={{ color: getSemanticColor() }}>
                <div>
                    <span className="text-xl font-bold block capitalize">{feedback.replace('-', ' ')}</span>
                    <span className="text-2xl font-bold block">{contrast.toFixed(2)}</span>
                </div>
                <Emoji />
            </div>
        </div>
    )
}

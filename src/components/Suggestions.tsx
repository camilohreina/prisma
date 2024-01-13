import { useAtom, useAtomValue } from 'jotai'
import { createContrastSuggestions } from '../lib/contrastSuggestions'
import { background, foreground, pickingColor, contrastRelation } from '../store'
import { useRef } from 'react'

interface SuggestionProps extends Pick<SuggestionItemProps, 'onApply'> {
    className?: string
}

type Suggestions = ReturnType<typeof createContrastSuggestions>

export const Suggestions = ({ onApply, className }: SuggestionProps) => {
    const [fg, setFg] = useAtom(foreground)
    const [bg, setBg] = useAtom(background)
    const isPickingColor = useAtomValue(pickingColor)
    const score = useAtomValue(contrastRelation)
    const prevSuggestions = useRef<Suggestions>([])
    const suggestions = !isPickingColor
        ? createContrastSuggestions(bg, fg).filter((result) => parseFloat(result.contrast) > score.contrast)
        : prevSuggestions.current
    const isEmpty = suggestions.length === 0

    if (!isPickingColor) prevSuggestions.current = suggestions

    function handleOnApply(bg: string, fg: string) {
        setFg(fg)
        setBg(bg)
        onApply?.(bg, fg)
    }

    return (
        <div className={`grid grid-cols-2 gap-5 ${className ?? ''}`}>
            {isEmpty ? (
                <p>There is nothing more to suggest</p>
            ) : (
                <>
                    {suggestions.map((item) => (
                        <SuggestionItem key={item.id} {...item} onApply={handleOnApply} />
                    ))}
                </>
            )}
        </div>
    )
}
interface SuggestionItemProps {
    contrast: string
    bg: string
    fg: string
    onApply?: (bg: string, fg: string) => void
}

const SuggestionItem = ({ contrast, bg, fg, onApply }: SuggestionItemProps) => {
    const handleOnClickApply = () => onApply?.(bg, fg)

    return (
        <article className="border border-gray-100 rounded-lg overflow-hidden">
            <section className="flex">
                <div
                    className="aspect-[3/2] flex-1 flex items-center justify-center first:border-gray-100 first:border"
                    style={{ background: bg }}
                >
                    <span className="text-lg" style={{ color: fg }}>
                        B
                    </span>
                </div>
                <div
                    className="aspect-[3/2] flex-1 flex items-center justify-center first:border-gray-100 first:border"
                    style={{ background: fg }}
                >
                    <span className="text-lg" style={{ color: bg }}>
                        T
                    </span>
                </div>
            </section>
            <section className="flex justify-between items-center border-t-[1px] border-gray-100 px-4 py-3">
                <button className="font-bold text-base cursor-pointer" type="button" onClick={handleOnClickApply}>
                    Apply
                </button>
                <span className="text-base text-gray-900">{contrast}</span>
            </section>
        </article>
    )
}

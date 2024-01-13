import { ColorControl } from './ColorControl'
import { ColorSetting } from './ColorSetting'
import { foreground } from '../store'
import { useAtom } from 'jotai'

export const Foreground = () => {
    const [fg, setFg] = useAtom(foreground)

    return (
        <article className="flex flex-column gap-x-8 items-center">
            <figure
                className="w-[70px] h-[70px] border shadow-md border-gray-300 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: fg }}
            />
            <div className="gap-y-4">
                <p className="font-bold">Text Color</p>
                <ColorControl
                    color={fg}
                    onChange={setFg}
                    popover={<ColorSetting sourceColor={fg} onChange={setFg} />}
                />
            </div>
        </article>
    )
}

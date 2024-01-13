import { ColorControl } from './ColorControl'
import { ColorSetting } from './ColorSetting'
import { background } from '../store'
import { useAtom } from 'jotai'

export const Background = () => {
    const [bg, setBg] = useAtom(background)

    return (
        <article className="flex flex-column gap-x-8 items-center">
            <figure
                className="w-[70px] h-[70px] border shadow-md border-gray-300 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: bg }}
            />
            <div className="gap-y-4">
                <p className="font-bold">Background Color</p>
                <ColorControl
                    color={bg}
                    onChange={setBg}
                    popover={<ColorSetting sourceColor={bg} onChange={setBg} />}
                />
            </div>
        </article>
    )
}

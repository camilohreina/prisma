import { ColorControl } from './ColorControl'
import { ColorSetting } from './ColorSetting'

export const ColorInfo = ({ color, title }: { color: string; title: string }) => {
    return (
        <article className="flex flex-column gap-x-4 items-center">
            <figure
                className="w-[70px] h-[70px] border shadow-md border-gray-300 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: color }}
            />
            <div className="gap-y-4">
                <p className="font-bold">{title}</p>
                <ColorControl color={color} popover={<ColorSetting />} />
            </div>
        </article>
    )
}

import { ColorPickerIcon } from '../icons/ColorPicker'
import * as Popover from '@radix-ui/react-popover'

export const ColorInput = ({ color }: { color: string }) => {
    return (
        <div className="relative w-full">
            <input
                type="picker"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300"
                placeholder="Color Picker"
                value={color}
            />
            <Popover.Trigger asChild>
                <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-black rounded-e-lg  focus:ring-4 focus:outline-none "
                >
                    <ColorPickerIcon />
                </button>
            </Popover.Trigger>
        </div>
    )
}

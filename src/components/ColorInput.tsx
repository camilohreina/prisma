import { useControllable } from '../hooks/useControllable'
import { ColorPickerIcon } from '../icons/ColorPicker'
import * as Popover from '@radix-ui/react-popover'
import { regexColorHexadecimal } from '../utils/helpers'
import type { ChangeEvent } from 'react'

const fallback = '#000000'

export const ColorInput = ({ color, onChange }: { color: string; onChange?: (color: string) => void }) => {
    const [value, setValue] = useControllable(fallback, color, onChange)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const nextValue = e.target.value

        const omitOnChange = !regexColorHexadecimal.test(nextValue)

        setValue(nextValue, omitOnChange)
    }

    function handleBlur() {
        if (!value || !regexColorHexadecimal.test(value)) setValue(fallback)
    }

    return (
        <div className="relative w-full">
            <input
                type="text"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300"
                placeholder="Color Picker"
                value={color}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <Popover.Trigger asChild>
                <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-black rounded-e-lg "
                >
                    <ColorPickerIcon />
                </button>
            </Popover.Trigger>
        </div>
    )
}

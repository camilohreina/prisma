import { ColorPickerIcon } from '../icons/ColorPicker'

export const ColorInfo = ({ color, title }: { color: string; title: string }) => {
    return (
        <article class="">
            <figure
                class="w-[60px] h-[60px] border shadow-md border-gray-300 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: color }}
            />
            <p class="font-bold">{title}</p>

            <div class="relative w-full">
                <input
                    type="picker"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300"
                    placeholder="Color Picker"
                    value={color}
                />
                <button
                    type="submit"
                    class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-black rounded-e-lg  focus:ring-4 focus:outline-none "
                >
                    <ColorPickerIcon />
                </button>
            </div>
        </article>
    )
}

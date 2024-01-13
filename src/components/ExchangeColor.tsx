import { Exchange } from '../icons/Exchange'
import { useSetAtom } from 'jotai'
import { swapColors } from '../store'

export const ExchangeColor = () => {
    const swap = useSetAtom(swapColors)

    return (
        <div className="rotate-90">
            <button
                className="border border-gray-300 shadow transition hover:bg-gray-100  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center "
                onClick={swap}
            >
                <Exchange />
            </button>
        </div>
    )
}

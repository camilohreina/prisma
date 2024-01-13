import { useAtom } from 'jotai'
import { background } from '../store'
import { foreground } from '../store'

export const SecurityCard = () => {
    const [bg] = useAtom(background)
    const [fg] = useAtom(foreground)
    return (
        <a
            href="#"
            style={{ backgroundColor: bg }}
            className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="image-4.jpg"
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5
                    style={{ color: fg }}
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Noteworthy technology acquisitions 2021
                </h5>
                <p style={{ color: fg }} className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                </p>
            </div>
        </a>
    )
}

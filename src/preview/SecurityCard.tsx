import { applyStyle } from '../utils/helpers'

export const SecurityCard = () => {
    return (
        <article
            style={applyStyle('bg')}
            className="h-auto flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                src="image-4.jpg"
                alt="Setup"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5
                    style={applyStyle('color')}
                    className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Different technology
                </h5>
                <p style={applyStyle('color')} className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                </p>
            </div>
        </article>
    )
}

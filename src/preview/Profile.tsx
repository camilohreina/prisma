import { cssBgVar, cssFgVar, applyStyle } from '../utils/helpers'

export const Profile = () => {
    return (
        <article style={applyStyle('bg')} className="w-full bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex flex-col items-center pb-10 px-4 pt-4">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="1.png" alt="Bonnie image" />
                <h5 style={applyStyle('color')} className="mb-1 text-xl font-bold  dark:text-white">
                    xDiffernt
                </h5>
                <span style={applyStyle('color')} className="text-sm text-gray-500 dark:text-gray-400">
                    Software Developer
                </span>
                <div className="flex mt-4 md:mt-6">
                    <button
                        style={{
                            ...applyStyle('bg', { fromVar: cssFgVar }),
                            ...applyStyle('color', { fromVar: cssBgVar }),
                        }}
                        className="inline-flex font-bold items-center rounded-lg px-4 py-2 text-sm text-center text-white"
                    >
                        Add friend
                    </button>
                    <button
                        style={{
                            ...applyStyle('bg', { fromVar: cssFgVar }),
                            ...applyStyle('color', { fromVar: cssBgVar }),
                        }}
                        className="inline-flex items-center px-4 py-2 text-sm font-bold text-centerborder border-gray-300 rounded-lg ms-3"
                    >
                        Message
                    </button>
                </div>
            </div>
        </article>
    )
}

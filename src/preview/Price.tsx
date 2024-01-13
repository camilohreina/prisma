import { cssBgVar, cssFgVar, applyStyle } from '../utils/helpers'

export const Price = () => {
    return (
        <div style={applyStyle('bg')} className="w-full p-4  border border-gray-200 rounded-lg shadow sm:p-8">
            <h5 style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })} className="mb-4 text-xl font-medium ">
                Standard plan
            </h5>
            <div style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })} className="flex items-baseline">
                <span
                    style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                    className="text-3xl font-semibold"
                >
                    $
                </span>
                <span style={applyStyle('color')} className="text-5xl font-extrabold tracking-tight">
                    49
                </span>
                <span
                    style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                    className="ms-1 text-xl font-normal "
                >
                    /month
                </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                    <svg
                        style={applyStyle('color')}
                        className="flex-shrink-0 w-4 h-4 text-blue-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight  ms-3"
                    >
                        2 team members
                    </span>
                </li>
                <li className="flex">
                    <svg
                        style={applyStyle('color')}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight  ms-3"
                    >
                        20GB Cloud storage
                    </span>
                </li>
                <li className="flex">
                    <svg
                        style={applyStyle('color')}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight  ms-3"
                    >
                        Integration help
                    </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.30' })}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight text-gray-500 ms-3"
                    >
                        Sketch Files
                    </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.30' })}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight text-gray-500 ms-3"
                    >
                        API Access
                    </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.30' })}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight text-gray-500 ms-3"
                    >
                        Complete documentation
                    </span>
                </li>
                <li className="flex line-through decoration-gray-500">
                    <svg
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.30' })}
                        className="flex-shrink-0 w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span
                        style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                        className="text-base font-normal leading-tight text-gray-500 ms-3"
                    >
                        24×7 phone & email support
                    </span>
                </li>
            </ul>
            <button
                type="button"
                style={{
                    ...applyStyle('bg', { fromVar: cssFgVar }),
                    ...applyStyle('color', { fromVar: cssBgVar }),
                }}
                className=" font-bold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Choose plan
            </button>
        </div>
    )
}

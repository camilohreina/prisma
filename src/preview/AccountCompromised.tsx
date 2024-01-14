import { cssBgVar, cssFgVar, applyStyle } from '../utils/helpers'

export const AccountCompromised = () => {
    return (
        <div
            style={applyStyle('bg')}
            className="p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="flex flex-row items-center gap-4 mb-8">
                <div
                    style={applyStyle('bg', { fromVar: cssFgVar })}
                    className=" w-14 h-14  flex justify-center items-center rounded-xl bordershadow"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                        <rect
                            x="5.73685"
                            y="12.0526"
                            width="12.5263"
                            height="8.94737"
                            rx="2"
                            stroke={cssBgVar}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.52631 12.0526V8.47368C7.52631 6.00294 9.52924 4 12 4C14.4707 4 16.4737 6.00294 16.4737 8.47368V12.0526"
                            stroke={cssBgVar}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <span style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })} className="text-sm ">
                    Security Scan
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <h5
                    style={applyStyle('color', { fromVar: cssFgVar })}
                    className="mb-2 text-2xl font-bold tracking-tight"
                >
                    Your account has been compromised
                </h5>
                <p style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })} className="mb-3 font-normal">
                    We found a match to your email address online
                </p>
                <div className="flex flex-row  items-center gap-2">
                    <img className="rounded-full w-7" src="/1.png" alt="xDiffernt profile" />
                    <span style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })} className="text-xs">
                        Technician online
                    </span>
                </div>
                <button
                    style={{
                        ...applyStyle('bg', { fromVar: cssFgVar }),
                        ...applyStyle('color', { fromVar: cssBgVar }),
                    }}
                    className="self-end inline-flex items-center px-3 py-3 text-sm font-bold text-center text-white rounded-lg shadow"
                >
                    Contact us
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

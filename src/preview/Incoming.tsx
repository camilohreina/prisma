import { cssBgVar, cssFgVar, applyStyle } from '../utils/helpers'

export const Incoming = () => {
    return (
        <div
            style={applyStyle('bg')}
            className="flex items-center justify-center p-6 border border-gray-200 rounded-lg shadow "
        >
            <div className="flex flex-col gap-4 justify-center">
                <h5
                    style={applyStyle('color', { fromVar: cssFgVar })}
                    className="mb-2 self-center text-2xl font-bold tracking-tight"
                >
                    Review your daily income
                </h5>

                <h3
                    style={applyStyle('color', { fromVar: cssFgVar })}
                    className="mb-2 self-center text-4xl font-bold tracking-tight"
                >
                    $77.77
                </h3>
                <p
                    style={applyStyle('color', { fromVar: cssFgVar, alpha: '0.6' })}
                    className="mb-3 font-normal self-center"
                >
                    Change payout method in settings
                </p>
                <button
                    style={{
                        ...applyStyle('bg', { fromVar: cssFgVar }),
                        ...applyStyle('color', { fromVar: cssBgVar }),
                    }}
                    className="inline-flex justify-center items-center px-3 py-3 text-sm font-bold text-right rounded-lg shadow"
                >
                    Settings
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

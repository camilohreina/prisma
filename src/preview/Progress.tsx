import { cssBgVar, cssFgVar, applyStyle } from '../utils/helpers'

export const Progress = () => {
    return (
        <article style={applyStyle('bg')} className="flex flex-col gap-4 p-6 border border-gray-200 rounded-lg shadow">
            <div className="flex flex-row justify-between">
                <p style={applyStyle('color', { fromVar: cssFgVar })}>University progress</p>
                <p style={applyStyle('color', { fromVar: cssFgVar })}>76%</p>
            </div>
            <div
                style={applyStyle('bg', { fromVar: cssFgVar, alpha: '0.3' })}
                className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
            >
                <div
                    className="h-2.5 rounded-full"
                    style={{ width: '76%', ...applyStyle('bg', { fromVar: cssFgVar }) }}
                ></div>
            </div>
        </article>
    )
}

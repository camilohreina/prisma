import { Check } from '../icons/Check'
import { Close } from '../icons/Close'

interface Iprops {
    textType: 'normal' | 'large'
    contrast: string
    pass?: boolean
}

export function ContrastLevel({ textType, contrast, pass }: Iprops) {
    return (
        <li className="flex items-center justify-between">
            <div>
                <span className="text-gray-400 text-xs">{textType.toUpperCase()} TEXT</span>
                <p className="text-gray-900 text-base font-bold">{contrast}</p>
            </div>
            {pass ? <Check aria-label="check" /> : <Close aria-label="close" />}
        </li>
    )
}

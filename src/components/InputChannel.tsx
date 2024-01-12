import { useControllable } from '../hooks/useControllable'
import type { ChangeEvent } from 'react'
import { regexNumberText, regexStartWithZero } from '../utils/helpers'

export const InputChannel = ({
    label,
    onChange,
    max = 100,
    min = 100,
    value,
}: {
    label: string
    onChange?: (value: string) => void
    max?: number
    min?: number
    value?: number
}) => {
    const stringValue = value?.toString() ?? undefined
    const [inputValue, setInputValue] = useControllable('0', stringValue, onChange)

    const validateInputOnBlur = () => {
        let nextValue = inputValue

        if (regexStartWithZero.test(nextValue)) {
            nextValue = parseInt(inputValue).toString()
        }

        if (!regexNumberText.test(inputValue) || parseInt(nextValue) < min || parseInt(nextValue) > max) {
            nextValue = '0'
        }

        setInputValue(nextValue)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value

        setInputValue(nextValue, true)
    }

    return (
        <div className="flex justify-between items-center">
            <span className="font-bold">{label}</span>
            <input
                className="bg-gray-50 w-16 h-8 ps-3 pe-3 border border-gray-500 text-gray-900 text-sm rounded-md text-center"
                placeholder="0"
                value={inputValue}
                onBlur={validateInputOnBlur}
                onChange={handleInputChange}
            />
        </div>
    )
}

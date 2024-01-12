import type { ColorMode } from '../types/utils.d.ts'
import { useState, useMemo } from 'react'
import { colorModes } from '../utils/helpers.ts'
import * as Popover from '@radix-ui/react-popover'
import { HexColorPicker } from 'react-colorful'
import { useControllable } from '../hooks/useControllable.ts'

//popover channel
export const ColorSetting = ({
    sourceColor,
    onChange,
}: {
    sourceColor?: string
    onChange?: (value: string) => void
}) => {
    const [color, setColor] = useControllable('#000', sourceColor, onChange)
    const [colorMode, setColorMode] = useState<keyof ColorMode>('rgb')
    const colorModesList = useMemo(() => Object.keys(colorModes), [])
    return (
        <Popover.Portal>
            <Popover.Content
                className="bg-white shadow rounded-lg border border-gray-400 w-64 overflow-hidden p-4"
                align="end"
                sideOffset={5}
            >
                <div className="relative mb-3 flex justify-between">
                    <span className="font-bold">Color Settings</span>
                    <select
                        aria-label="Select color mode"
                        className="outline-none border-none bg-transparent text-sm font-medium text-gray-900"
                        value={colorMode}
                        onChange={(e) => setColorMode(e.target.value as keyof ColorMode)}
                    >
                        {colorModesList.map((mode) => (
                            <option key={mode} value={mode}>
                                {mode}
                            </option>
                        ))}
                    </select>
                </div>
                <HexColorPicker className="!w-full !h-44" color={color} />
            </Popover.Content>
        </Popover.Portal>
    )
}

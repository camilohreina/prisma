import type { ColorMode } from '../types/utils.d.ts'
import { useState, useMemo } from 'react'
import { colorModes } from '../utils/helpers.ts'
import * as Popover from '@radix-ui/react-popover'
import { HexColorPicker } from 'react-colorful'
import { useControllable } from '../hooks/useControllable.ts'
import { InputChannel } from './InputChannel.tsx'
import Color from 'color'

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
    const channels = useMemo(
        () => colorModes[colorMode].converter(color).map((channel) => Math.floor(channel)),
        [colorMode, color],
    )

    const updateChannel = (channels: number[], channelModified: number, channelIndexModified: number) => {
        const nextChannels = [...channels]

        nextChannels[channelIndexModified] = channelModified

        return nextChannels
    }

    const handleColorPickerChange = (color: string) => {
        setColor(color)
    }

    const handleChannelChange = (index: number) => (value: number | string) => {
        const nextValue = parseInt(value.toString())
        const nextChannels = updateChannel(channels, nextValue, index)
        const resolvedColor = Color(nextChannels, colorMode).hex()

        setColor(resolvedColor)
    }

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
                <HexColorPicker className="!w-full !h-44" color={color} onChange={handleColorPickerChange} />
                <div className="grid gap-3 mt-5">
                    <p>Channels</p>
                    {channels.map((channel, index) => {
                        const mode = colorModes[colorMode]

                        return (
                            <InputChannel
                                key={`${channel}-${mode.channels[index].label}`}
                                label={mode.channels[index].label}
                                max={mode.channels[index].max}
                                min={mode.channels[index].min}
                                value={channel}
                                onChange={handleChannelChange(index)}
                            />
                        )
                    })}
                </div>
            </Popover.Content>
        </Popover.Portal>
    )
}

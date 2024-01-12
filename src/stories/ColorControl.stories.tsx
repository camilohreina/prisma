import type { Meta, StoryObj } from '@storybook/react'

import { ColorControl } from '../components/ColorControl'
import { ColorSetting } from '../components/ColorSetting'

const meta = {
    title: 'Example/ColorControl',
    component: ColorControl,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ColorControl>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        color: '#000',
        popover: <ColorSetting sourceColor="#000" />,
    },
}

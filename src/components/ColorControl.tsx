import type { ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { ColorInput } from './ColorInput'
import { useToggle } from '../hooks/useToggle'

export const ColorControl = ({ color, popover }: { color: string; popover: ReactNode }) => {
    const { isEnabled: isOpen, setOpen } = useToggle()

    return (
        <Popover.Root open={isOpen} onOpenChange={setOpen}>
            <ColorInput color={color} />
            {isOpen ? popover : null}
        </Popover.Root>
    )
}

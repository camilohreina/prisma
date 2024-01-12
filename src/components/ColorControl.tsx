import type { ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { ColorInput } from './ColorInput'
import { useToggle } from '../hooks/useToggle'

export const ColorControl = ({
    color,
    popover,
    onChange,
}: {
    color: string
    popover: ReactNode
    onChange?: (color: string) => void
}) => {
    const { isEnabled: isOpen, setOpen } = useToggle()

    return (
        <Popover.Root open={isOpen} onOpenChange={setOpen}>
            <ColorInput color={color} onChange={onChange} />
            {isOpen ? popover : null}
        </Popover.Root>
    )
}

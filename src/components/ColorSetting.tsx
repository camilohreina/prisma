import * as Popover from '@radix-ui/react-popover'
//popover channel
export const ColorSetting = () => {
    return (
        <Popover.Portal>
            <Popover.Content
                className="bg-white shadow rounded-lg border border-gray-400 w-[64px] overflow-hidden p-4"
                align="end"
                alignOffset={-16}
            >
                <div>Hola</div>
            </Popover.Content>
        </Popover.Portal>
    )
}

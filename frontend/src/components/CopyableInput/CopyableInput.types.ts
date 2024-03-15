import type { InputBaseProps, } from '@mui/material/InputBase';

export interface CopyableInputProps extends InputBaseProps {
    value   : string,
    onCopy? : () => void,
}

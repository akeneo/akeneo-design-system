import React from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../common/InputProps';
type PreviewType = 'preview' | 'thumbnail';
type MediaLinkInputProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    thumbnailUrl: string | null;
    placeholder?: string;
    invalid?: boolean;
    onSubmit?: () => void;
}>;
declare const MediaLinkInput: React.ForwardRefExoticComponent<MediaLinkInputProps & React.RefAttributes<HTMLInputElement>>;
export { MediaLinkInput };
export type { PreviewType };

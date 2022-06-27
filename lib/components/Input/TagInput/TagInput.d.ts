import React, { FC } from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../common';
declare type TagInputProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string[]>>, {
    value: string[];
    placeholder?: string;
    invalid?: boolean;
    separators?: string[];
    onChange: (tags: string[]) => void;
    onSubmit?: () => void;
}>;
declare const TagInput: FC<TagInputProps>;
export { TagInput };

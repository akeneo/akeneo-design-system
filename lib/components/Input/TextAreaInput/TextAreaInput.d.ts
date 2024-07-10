import React from 'react';
import { InputProps } from '../common/InputProps';
import { Override } from '../../../shared';
import { EditorProps } from './RichTextEditor';
type TextAreaInputProps = Override<Override<React.InputHTMLAttributes<HTMLTextAreaElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    invalid?: boolean;
    characterLeftLabel?: string;
    isRichText?: boolean;
    richTextEditorProps?: EditorProps;
}>;
declare const TextAreaInput: React.ForwardRefExoticComponent<TextAreaInputProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextAreaInput };
export type { TextAreaInputProps };

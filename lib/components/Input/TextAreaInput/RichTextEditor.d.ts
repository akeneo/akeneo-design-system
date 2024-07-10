import React from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Override } from '../../../shared';
type RichTextEditorProps = Override<EditorProps, {
    value: string;
    readOnly?: boolean;
    onChange: (value: string) => void;
}>;
declare const RichTextEditor: ({ value, readOnly, onChange, ...rest }: RichTextEditorProps) => React.JSX.Element;
export { RichTextEditor };
export type { EditorProps };

import React from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../InputProps';
import { FileInfo } from './FileInfo';
declare type PreviewType = 'preview' | 'thumbnail';
declare type MediaFileInputProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<FileInfo | null>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: FileInfo | null) => void;
}) & {
    value: FileInfo | null;
    previewer: (value: FileInfo, type: PreviewType) => string;
    uploader: (file: File, onProgress: (ratio: number) => void) => Promise<FileInfo>;
    downloader: (value: FileInfo) => string;
    placeholder?: string;
    uploadingLabel: string;
    downloadLabel: string;
    clearTitle: string;
    fullscreenTitle: string;
    fullscreenLabel?: string;
    closeTitle: string;
    uploadErrorLabel: string;
    size?: 'default' | 'small';
    invalid?: boolean;
}>;
declare const MediaFileInput: React.ForwardRefExoticComponent<MediaFileInputProps & React.RefAttributes<HTMLInputElement>>;
export { MediaFileInput };

import { FileInfo } from './FileInfo';
declare type FullscreenPreviewProps = {
    value: FileInfo;
    previewUrl: string;
    downloadUrl: string;
    downloadLabel: string;
    closeTitle: string;
    label: string;
    onClose: () => void;
};
declare const FullscreenPreview: ({ value, previewUrl, downloadUrl, downloadLabel, closeTitle, label, onClose, }: FullscreenPreviewProps) => JSX.Element;
export { FullscreenPreview };

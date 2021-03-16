import { FileInfo } from '../../components';
declare const useFakeMediaStorage: (defaultPath?: string | null) => (((file: File, onProgress: (ratio: number) => void) => Promise<FileInfo>) | (() => string | null))[];
export { useFakeMediaStorage };

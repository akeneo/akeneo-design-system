import { Ref } from 'react';
import { Key } from 'shared';
/**
 * Hook to listen to keydown events on a DOM element (or document) and fire a callback
 *
 * @param key The key kress to listen to
 * @param callback What callback to call when the key is pressed
 * @param externalRef This ref will be used if provided
 */
declare const useShortcut: <NodeType extends HTMLElement>(key: Key, callback: () => void, externalRef?: Ref<NodeType>) => Ref<NodeType>;
export { useShortcut };

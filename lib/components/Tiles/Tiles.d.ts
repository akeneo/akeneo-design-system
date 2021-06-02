import React, { ReactNode, FC } from 'react';
import { IconProps } from '../../icons';
declare type Size = 'small' | 'big';
declare type TilesProps = {
    children?: ReactNode;
    size?: Size;
};
declare type TileProps = {
    icon: React.ReactElement<IconProps>;
    size?: Size;
    selected?: boolean;
    onClick?: () => void;
};
declare const Tile: FC<TileProps>;
declare const Tiles: React.ForwardRefExoticComponent<TilesProps & React.RefAttributes<HTMLDivElement>>;
export { Tiles, Tile };

import React, { ReactNode, FC } from 'react';
import { IconProps } from '../../icons';
import { Override } from '../../';
declare type Size = 'small' | 'big';
declare type TilesProps = {
    children?: ReactNode;
    size?: Size;
};
declare type TileProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    icon: React.ReactElement<IconProps>;
    size?: Size;
    selected?: boolean;
    onClick?: () => void;
}>;
declare const Tile: FC<TileProps>;
declare const Tiles: React.ForwardRefExoticComponent<TilesProps & React.RefAttributes<HTMLDivElement>>;
export { Tiles, Tile };

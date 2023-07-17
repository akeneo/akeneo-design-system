import React, { FC, ReactNode } from 'react';
import { IconProps } from '../../icons';
import { Override } from '../../';
declare type Size = 'small' | 'big';
declare type TilesProps = {
    children?: ReactNode;
    size?: Size;
    inline?: boolean;
};
declare type TileProps = Override<React.HTMLAttributes<HTMLDivElement>, ({
    icon: React.ReactElement<IconProps>;
    size?: 'big' | 'small';
    inline?: false;
} | {
    size?: 'big' | 'small';
    icon?: undefined;
    inline?: true;
}) & {
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}>;
declare const Tile: FC<TileProps>;
declare const Tiles: React.ForwardRefExoticComponent<TilesProps & React.RefAttributes<HTMLDivElement>>;
export { Tiles, Tile };

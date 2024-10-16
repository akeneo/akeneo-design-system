import React, {Ref} from 'react';
import styled, {css} from 'styled-components';
import {getColor, AkeneoThemedProps} from '../../theme/theme';
import {placeholderStyle} from '../../theme/common';
import {Override} from '../../shared/override';

const EMPTY_IMAGE = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';

type Fit = 'cover' | 'contain';

type Background = 'white' | 'checkerboard';

const ImageContainer = styled.img<
  {
    fit: Fit;
    isStacked: boolean;
    isLoading: boolean;
    background: Background;
  } & AkeneoThemedProps
>`
  border: 1px solid ${getColor('grey', 80)};
  object-fit: ${({fit}) => fit};
  box-sizing: border-box;

  ${({isStacked}) =>
    isStacked &&
    css`
      box-shadow: 1px -1px 0 0 ${getColor('white')}, 2px -2px 0 0 ${getColor('grey', 80)},
        3px -3px 0 0 ${getColor('white')}, 4px -4px 0 0 ${getColor('grey', 80)};
    `}

  ${({background, isLoading}) =>
    background === 'checkerboard' && !isLoading
      ? css`
          background-image: linear-gradient(45deg, ${getColor('grey', 60)} 25%, transparent 25%),
            linear-gradient(135deg, ${getColor('grey', 60)} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${getColor('grey', 60)} 75%),
            linear-gradient(135deg, transparent 75%, ${getColor('grey', 60)} 75%);
          background-size: 25px 25px; /* Must be a square */
          background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */
        `
      : css`
          background: ${getColor(background)};
        `}

  ${({isLoading}) => isLoading && placeholderStyle}
`;

type ImageProps = Override<
  React.ImgHTMLAttributes<HTMLImageElement>,
  {
    /**
     * Define the image source.
     */
    src: string | null;

    /**
     * Content of the alternative text.
     */
    alt: string;

    /**
     * The width of the image.
     */
    width?: number;

    /**
     * The height of the image.
     */
    height?: number;

    /**
     * Should the image cover all the container or be contained in it.
     */
    fit?: Fit;

    /**
     * Should the image appear as a stack of multiple images.
     */
    isStacked?: boolean;

    /**
     * Should the image appear with a background or not
     */
    background?: Background;
  }
>;

/**
 * Image allow to embed an image in a page.
 */
const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {fit = 'cover', isStacked = false, background = 'white', src, ...rest}: ImageProps,
    forwardedRef: Ref<HTMLImageElement>
  ) => {
    return (
      <ImageContainer
        isLoading={null === src}
        src={src ?? EMPTY_IMAGE}
        ref={forwardedRef}
        fit={fit}
        isStacked={isStacked}
        background={background}
        {...rest}
      />
    );
  }
);

export {Image};

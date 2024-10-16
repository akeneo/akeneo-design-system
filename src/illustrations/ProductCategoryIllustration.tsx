import React from 'react';
import {IllustrationProps} from './IllustrationProps';
import ProductCategory from '../../static/illustrations/ProductCategory.svg';
import {BrandedPath} from '../theme/common';

const ProductCategoryIllustration = ({title, size = 256, ...props}: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 256 256" {...props}>
    {title && <title>{title}</title>}
    <image href={ProductCategory} />
    <g fill="none" fillRule="evenodd">
      <BrandedPath d="M164.492 165.695c.078.229.146.386.166.437.007.006-.006-.002 0 0 0 0 0 .002 0 0 .001 0 0 0 0 0-.52-5.013 2.323-7.102 3.236-10.432.005-.05.015-.104.03-.164a2.21 2.21 0 00.046-.23c.136-.921-.242-1.993-.957-3.11-.003-.006-.008-.012-.01-.018a13.39 13.39 0 00-.186-.278s-.003-.002-.003-.004a14.074 14.074 0 00-.374-.513c-.013-.017-.026-.036-.04-.052-.037-.047-.076-.094-.11-.141l-.115-.144-.118-.14a6.553 6.553 0 00-.211-.246c-1.123-1.294-2.584-2.573-4.11-3.686 0 0-.013-.016 0 0 .201 1.887.227 3.774.048 5.283-.216 1.819-.866 3.936-1.77 5.855-2.113-.173-4.274-.663-5.959-1.382-1.409-.601-3.022-1.551-4.565-2.677.017.157.035.312.054.468l.018.14.045.334.023.154c.016.112.033.224.051.334l.022.136a30.706 30.706 0 00.268 1.41l.02.088c.028.13.06.26.09.389a.564.564 0 01.017.076c.038.148.074.297.113.443a20.188 20.188 0 00.411 1.363l.005.016c.251.729.536 1.399.855 1.986.047.085.095.169.143.25.002.003.002.007.005.01h.001c.043.075.088.149.132.219l.006.009c.048.077.097.15.147.222l.021.03v.002c.065.093.131.183.197.269l.034.04c.003.007.008.01.011.018a5.367 5.367 0 00.405.452l.073.069.108.099.083.067.105.084.085.06a2.635 2.635 0 00.194.128l.116.066c.028.015.055.028.081.04.045.023.09.042.135.062.022.007.045.019.068.028.07.027.138.05.208.07.047.014.087.029.125.043 3.346.884 6.606-.517 10.693 2.405" />
    </g>
  </svg>
);

export {ProductCategoryIllustration};

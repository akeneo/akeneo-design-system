import React, {forwardRef, Ref} from 'react';
import styled from 'styled-components';
import {getEmoji} from '../../shared/flag';
import {getFontFamily, getFontSize} from '../../theme/theme';

const LocaleContainer = styled.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

const Emoji = styled.span`
  font-size: ${getFontSize('bigger')};
  margin-right: 3px;
  font-family: 'Flag Emoji', ${getFontFamily('default')};
`;

type LocaleProps = {
  /**
   * Code of the locale (eg: en_US, fr_FR, etc).
   */
  code: string;

  /**
   * Override the language label (English instead of en). Fallback to language code if empty.
   */
  languageLabel?: string;
};

/**
 * Component to display a locale (country and language).
 */
const Locale = forwardRef<HTMLSpanElement, LocaleProps>(
  ({code, languageLabel, ...rest}: LocaleProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const {0: languageCode, length, [length - 1]: countryCode} = code.split('_');

    return (
      <LocaleContainer ref={forwardedRef} {...rest}>
        <Emoji role="img" aria-label={countryCode}>
          {getEmoji(countryCode)}
        </Emoji>
        {languageLabel || languageCode}
      </LocaleContainer>
    );
  }
);

export {Locale};
export type {LocaleProps};

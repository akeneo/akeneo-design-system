import React from 'react';
type LocaleProps = {
    code: string;
    languageLabel?: string;
};
declare const Locale: React.ForwardRefExoticComponent<LocaleProps & React.RefAttributes<HTMLSpanElement>>;
export { Locale };
export type { LocaleProps };

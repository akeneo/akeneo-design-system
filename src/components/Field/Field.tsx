import React, {Ref, ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {Helper, HelperProps} from '../Helper/Helper';
import {InputProps} from '../Input/common/InputProps';
import {Locale, LocaleProps} from '../Locale/Locale';
import {Pill} from '../Pill/Pill';
import {Block, BlockProps} from '../Block/Block';
import {useId} from '../../hooks/useId';
import {getColor, getFontSize} from '../../theme/theme';

const FieldContainer = styled.div<{fullWidth: boolean}>`
  display: flex;
  flex-direction: column;
  max-width: ${({fullWidth}) => (fullWidth ? '100%' : '460px')};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;
  margin-bottom: 8px;
  gap: 5px;
`;

const Label = styled.label`
  flex: 1;
`;

const Channel = styled.span`
  text-transform: capitalize;
`;

const HelperContainer = styled.div`
  margin-top: 5px;
  max-width: 460px;
`;

const LabelPrefix = styled.span`
  font-size: ${getFontSize('small')};
  color: ${getColor('grey', 100)};
  margin-right: 10px;
`;

type FieldChild =
  | ReactElement<InputProps<unknown>>
  | ReactElement<HelperProps>
  | FieldChild[]
  | false
  | null
  | undefined;

type FieldProps = {
  /**
   * The label of the field.
   */
  label: string;

  /**
   * Whether the field is complete or not.
   */
  incomplete?: boolean;

  /**
   * The locale of the field.
   */
  locale?: ReactElement<LocaleProps> | string | null;

  /**
   * The channel of the field.
   */
  channel?: string | null;

  /**
   * The required label to display when field is required within the form.
   */
  requiredLabel?: string;

  /**
   * Should the field input take the full width of the parent container.
   */
  fullWidth?: boolean;

  /**
   * Children of the Field, can only be an Input or Helpers, other children will not be displayed.
   */
  children?: FieldChild;

  /**
   * Adds actions for this field.
   */
  actions?: ReactNode;

  labelPrefix?: string;
};

/**
 * The Field component is used to display information around an Input component.
 */
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      label,
      locale,
      channel,
      incomplete = false,
      fullWidth = false,
      requiredLabel,
      children,
      actions,
      labelPrefix,
      ...rest
    }: FieldProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const inputId = useId('input_');
    const labelId = useId('label_');

    const decoratedChildren = React.Children.map(children, child => {
      if (React.isValidElement<HelperProps>(child) && child.type === Helper) {
        return <HelperContainer>{React.cloneElement(child, {inline: true})}</HelperContainer>;
      }

      if (React.isValidElement<BlockProps>(child) && child.type === Block) {
        return React.cloneElement(child, {id: inputId, ariaLabelledBy: labelId});
      }

      if (React.isValidElement<InputProps<unknown>>(child)) {
        return React.cloneElement(child, {id: inputId, 'aria-labelledby': labelId});
      }

      return null;
    });

    return (
      <FieldContainer ref={forwardedRef} fullWidth={fullWidth ?? false} {...rest}>
        <LabelContainer>
          {incomplete && <Pill level="warning" />}
          <Label htmlFor={inputId} id={labelId}>
            {labelPrefix && <LabelPrefix>{labelPrefix}&nbsp;</LabelPrefix>}
            {label}
            {requiredLabel && (
              <>
                &nbsp;<em>{requiredLabel}</em>
              </>
            )}
          </Label>
          {channel && <Channel>{channel}</Channel>}
          {locale && ('string' === typeof locale ? <Locale code={locale} /> : locale)}
          {actions}
        </LabelContainer>
        {decoratedChildren}
      </FieldContainer>
    );
  }
);

export {Field};
export type {FieldProps};

import React, {Ref, ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {Helper, HelperProps} from '../Helper/Helper';
import {InputProps} from '../Input/common/InputProps';
import {Locale, LocaleProps} from '../Locale/Locale';
import {Pill} from '../Pill/Pill';
import {Block, BlockProps} from '../Block/Block';
import {useId} from '../../hooks/useId';
import {getColor, getFontSize} from '../../theme/theme';

const FieldContainer = styled.div<{$fullWidth: boolean}>`
  display: flex;
  flex-direction: column;
  max-width: ${({$fullWidth}) => ($fullWidth ? '100%' : '460px')};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 16px;
  margin-bottom: 8px;
  min-height: 16px; /* To keep the height consistent when the label is empty */
  gap: 5px;
`;

const Label = styled.label`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Channel = styled.span`
  text-transform: capitalize;
`;

const HelperContainer = styled.div`
  margin-top: 5px;
  max-width: 460px;
`;

const LabelPrefix = styled.div`
  font-size: ${getFontSize('small')};
  color: ${getColor('grey', 100)};
  margin-bottom: -5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  label: ReactNode;

  /**
   * Whether the field is complete or not.
   */
  incomplete?: boolean;

  /**
   * Whether the field value is modified.
   */
  isModified?: boolean;

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
   * The aria-label for the incomplete indicator pill.
   */
  incompleteLabel?: string;

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

  /**
   * To define the label title when `label` is not a string.
   * Will be concatenated with `requiredLabel` if it is not null.
   */
  labelTitle?: string;
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
      incompleteLabel,
      isModified = false,
      fullWidth = false,
      requiredLabel,
      children,
      actions,
      labelPrefix,
      labelTitle,
      ...rest
    }: FieldProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const inputId = useId('input_');
    const labelId = useId('label_');

    const titleBaseText = labelTitle ?? (typeof label === 'string' ? label : undefined);
    const title = titleBaseText ? `${titleBaseText}${requiredLabel ? ' ' + requiredLabel : ''}` : undefined;

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
      <FieldContainer ref={forwardedRef} $fullWidth={fullWidth ?? false} {...rest}>
        {labelPrefix && <LabelPrefix title={labelPrefix}>{labelPrefix}</LabelPrefix>}
        <LabelContainer>
          {incomplete && <Pill level="warning" aria-label={incompleteLabel} />}
          {isModified && <Pill level="primary" />}
          <Label htmlFor={inputId} id={labelId} title={title}>
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

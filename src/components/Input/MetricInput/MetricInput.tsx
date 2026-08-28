import React, {useCallback} from 'react';
import {NumberInput} from '../NumberInput/NumberInput';
import {SelectInput} from '../SelectInput/SelectInput';
import styled from 'styled-components';
import {getColor} from '../../../theme/theme';

const CustomNumberInput = styled(NumberInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 60px;
  &:focus {
    border-right: 1px solid ${getColor('grey', 80)};
    width: calc(100% - 2px);
  }
`;

const CustomSelectInput = styled(SelectInput)<{$invalid: boolean}>`
  position: relative;
  min-width: 140px;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    width: 1px;
    background-color: ${({$invalid}) => ($invalid ? getColor('red', 100) : getColor('grey', 80))};
    pointer-events: none;
  }

  input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      border-left: 1px solid ${getColor('grey', 80)};
    }
  }
  span {
    color: ${getColor('grey', 100)};
  }
`;

const MetricInputContainer = styled.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
  &:focus-within ${CustomSelectInput}::after {
    display: none;
  }
`;

type MetricInputProps = {
  amount: string;
  onAmountChange: (amount: string) => void;
  unit: string | null;
  onUnitChange: (unit: string) => void;
  unitOptions: {value: string; label: string | ((amount: string) => string)}[];
  openLabel: string;
  emptyResultLabel?: string;
  amountPlaceholder?: string;
  unitPlaceholder?: string;
  min?: number;
  max?: number;
  invalid?: boolean;
  readOnly?: boolean;
  id?: string;
  'aria-labelledby'?: string;
  unitAriaLabel?: string;

  /**
   * Allows text highlights (e.g. tinting the occurrences of a searched text)
   * to be painted over the displayed amount.
   */
  highlightable?: boolean;
};

export const MetricInput: React.FC<MetricInputProps> = ({
  amount,
  onAmountChange,
  unit,
  onUnitChange,
  unitOptions,
  openLabel,
  emptyResultLabel = 'No result found',
  amountPlaceholder,
  unitPlaceholder,
  min,
  max,
  invalid = false,
  readOnly = false,
  id,
  'aria-labelledby': ariaLabelledby,
  unitAriaLabel,
  highlightable = false,
}) => {
  const getLabel = useCallback(
    (unit: string, amount: string) => {
      const option = unitOptions.find(o => o.value === unit);

      return option ? (typeof option.label === 'string' ? option.label : option.label(amount)) : '';
    },
    [unitOptions]
  );

  return (
    <MetricInputContainer>
      <CustomNumberInput
        value={amount}
        onChange={onAmountChange}
        withIncrementIcons={false}
        placeholder={amountPlaceholder}
        min={min}
        max={max}
        invalid={invalid}
        data-testid="value"
        readOnly={readOnly}
        id={id}
        highlightable={highlightable}
      />
      <CustomSelectInput
        onChange={onUnitChange}
        value={unit || null}
        clearable={false}
        openLabel={openLabel}
        emptyResultLabel={emptyResultLabel}
        placeholder={unitPlaceholder}
        invalid={invalid}
        $invalid={invalid}
        data-testid="currency"
        readOnly={readOnly}
        aria-labelledby={ariaLabelledby}
        aria-label={unitAriaLabel}
      >
        {unitOptions.map(unitOption => (
          <SelectInput.Option
            key={unitOption.value}
            value={unitOption.value}
            title={getLabel(unitOption.value, amount)}
          >
            {getLabel(unitOption.value, amount)}
          </SelectInput.Option>
        ))}
      </CustomSelectInput>
    </MetricInputContainer>
  );
};

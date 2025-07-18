import React, {useCallback} from 'react';
import {NumberInput} from '../NumberInput/NumberInput';
import {SelectInput} from '../SelectInput/SelectInput';
import styled from 'styled-components';
import {getColor} from '../../../theme/theme';

const MetricInputContainer = styled.div`
  display: flex;
  > *:nth-child(2) {
    width: auto;
  }
`;

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

const CustomSelectInput = styled(SelectInput)`
  input {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:focus {
      border-left: 1px solid ${getColor('grey', 80)};
    }
  }
  span {
    text-transform: uppercase;
    color: ${getColor('grey', 100)};
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
  min?: number;
  max?: number;
  invalid?: boolean;
  readOnly?: boolean;
};

export const MetricInput: React.FC<MetricInputProps> = ({
  amount,
  onAmountChange,
  unit,
  onUnitChange,
  unitOptions,
  openLabel,
  emptyResultLabel = 'No result found',
  min,
  max,
  invalid = false,
  readOnly = false,
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
        min={min}
        max={max}
        invalid={invalid}
        data-testid="value"
        readOnly={readOnly}
      />
      <CustomSelectInput
        onChange={onUnitChange}
        value={unit}
        clearable={false}
        openLabel={openLabel}
        emptyResultLabel={emptyResultLabel}
        invalid={invalid}
        data-testid="currency"
        readOnly={readOnly}
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

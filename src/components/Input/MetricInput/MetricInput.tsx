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
  min?: number;
  max?: number;
};

export const MetricInput: React.FC<MetricInputProps> = ({
  amount,
  onAmountChange,
  unit,
  onUnitChange,
  unitOptions,
  openLabel,
  min,
  max,
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
      <CustomNumberInput value={amount} onChange={onAmountChange} withIncrementIcons={false} min={min} max={max} />
      <CustomSelectInput
        onChange={onUnitChange}
        value={unit}
        clearable={false}
        openLabel={openLabel}
        emptyResultLabel="No result found"
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

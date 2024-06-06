import React from 'react';
declare type MetricInputProps = {
    amount: string;
    onAmountChange: (amount: string) => void;
    unit: string | null;
    onUnitChange: (unit: string) => void;
    unitOptions: {
        value: string;
        label: string | ((amount: string) => string);
    }[];
    openLabel: string;
    min?: number;
    max?: number;
};
export declare const MetricInput: React.FC<MetricInputProps>;
export {};

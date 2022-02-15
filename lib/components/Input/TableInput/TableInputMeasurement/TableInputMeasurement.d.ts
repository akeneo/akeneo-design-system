import React from 'react';
declare type TableInputMeasurementProps = {
    amount: string;
    unit: string;
    emptyResultLabel: string;
    openLabel: string;
    onChange: (amount: string | undefined, unit: string) => void;
    units: {
        value: string;
        label: string;
        symbol?: string;
    }[];
    highlighted?: boolean;
    inError?: boolean;
};
declare const TableInputMeasurement: React.FC<TableInputMeasurementProps>;
export { TableInputMeasurement };

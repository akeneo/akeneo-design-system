/// <reference types="react" />
type Row = {
    nutritionScore: '1' | '2' | '3';
    part: string;
    quantity: number;
    is_allergenic: boolean | null;
    origin: 'french' | 'english' | 'german' | null;
};
type RowCode = keyof Row;
type RowValue = '1' | '2' | '3' | string | number | boolean | null | 'french' | 'english' | 'german' | {
    unit: string;
    amount: string;
};
declare const useFakeTableInput: (linesCount: number) => {
    getValue: (lineIndex: number, columName: RowCode) => RowValue;
    setValue: (lineIndex: number, columName: RowCode, value: RowValue) => void;
    searchValue: string;
    setSearchValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    match: (text: string) => boolean;
    lengthUnits: {
        label: string;
        value: string;
        symbol: string;
    }[];
};
export { useFakeTableInput };

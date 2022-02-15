declare type RowCode = 'nutritionScore' | 'part' | 'quantity' | 'is_allergenic' | 'origin' | 'length';
declare type RowValue = '1' | '2' | '3' | string | number | boolean | null | 'french' | 'english' | 'german' | {
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

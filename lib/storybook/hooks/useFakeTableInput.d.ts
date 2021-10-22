declare type RowCode = 'nutritionScore' | 'part' | 'quantity' | 'is_allergenic';
declare type RowValue = '1' | '2' | '3' | string | number | boolean | null;
declare const useFakeTableInput: (linesCount: number) => {
    getValue: (lineIndex: number, columName: RowCode) => RowValue;
    setValue: (lineIndex: number, columName: RowCode, value: RowValue) => void;
    searchValue: string;
    setSearchValue: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export { useFakeTableInput };

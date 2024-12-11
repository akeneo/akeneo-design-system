import { AnchorHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { default as default_2 } from 'react';
import { DefaultTheme } from 'styled-components';
import { DependencyList } from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import { FC } from 'react';
import { FlattenInterpolation } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MutableRefObject } from 'react';
import { PropsWithoutRef } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { Ref as Ref_2 } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { StyledComponent } from 'styled-components';
import { SVGProps } from 'react';
import { SyntheticEvent } from 'react';
import { ThemedStyledProps } from 'styled-components';

declare type ActionCellProps = default_2.HTMLAttributes<HTMLDivElement>;

export declare const ActivityIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AddAttributeIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AddingValueIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AkeneoCloudEditionIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AkeneoIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type AkeneoThemedProps = {
    theme: Theme;
};

export declare const AnimateMessageBar: ({ children }: {
    children: ReactElement<MessageBarProps>;
}) => default_2.JSX.Element;

export declare const ApiIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AppIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const arrayUnique: ArrayUniqueInterface;

declare interface ArrayUniqueInterface {
    (arrayWithDuplicatedItems: string[]): string[];
    (arrayWithDuplicatedItems: number[]): number[];
    <T>(arrayWithDuplicatedItems: T[], comparator: (first: T, second: T) => boolean): T[];
}

export declare const ArrowDownIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ArrowIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ArrowLeftIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ArrowRightIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ArrowSimpleUpIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ArrowUpIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AssetCategoriesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AssetCollectionIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AssetsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AssetsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AssociateIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AssociationTypesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AttributeBooleanIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeFileIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeGroupsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AttributeLinkIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeMultiSelectIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeNumberIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributePriceIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeSelectIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const AttributeTextareaIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const AttributeTextIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Avatar: ({ username, firstName, lastName, avatarUrl, size, disabled, selected, ...rest }: AvatarProps) => default_2.JSX.Element;

export declare type AvatarProps = Override<default_2.HTMLAttributes<HTMLSpanElement>, User & {
    size?: 'default' | 'big';
    disabled?: boolean;
    selected?: boolean;
}>;

export declare const Avatars: default_2.FC<AvatarsProps>;

export declare type AvatarsProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    max: number;
    maxTitle?: number;
}>;

declare type Background = 'white' | 'checkerboard';

export declare const Badge: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLSpanElement>, "children" | "level"> & {
    level?: Level | undefined;
    children?: ReactNode;
} & default_2.RefAttributes<HTMLSpanElement>>;

export declare type BadgeProps = Override<default_2.HTMLAttributes<HTMLSpanElement>, {
    level?: Level;
    children?: ReactNode;
}>;

export declare const BarChartsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Block: default_2.ForwardRefExoticComponent<BlockProps & default_2.RefAttributes<HTMLDivElement>>;

export declare const BlockButton: default_2.ForwardRefExoticComponent<Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "disabled" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "icon"> & {
    icon: ReactElement<IconProps>;
    disabled?: boolean | undefined;
    onClick?: ((event: SyntheticEvent) => void) | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children?: ReactNode;
} & default_2.RefAttributes<HTMLButtonElement>>;

export declare type BlockButtonProps = Override<ButtonHTMLAttributes<HTMLButtonElement>, {
    icon: ReactElement<IconProps>;
    disabled?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
}>;

export declare type BlockProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    title: string | ReactNode;
    actions?: ReactNode;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
} & ({
    isOpen: boolean;
    collapseButtonLabel: string;
    onCollapse: (isOpen: boolean) => void;
} | {
    isOpen?: undefined;
    collapseButtonLabel?: undefined;
    onCollapse?: undefined;
})>;

export declare const BookIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const BooleanInput: default_2.ForwardRefExoticComponent<BooleanInputProps & default_2.RefAttributes<HTMLDivElement>>;

declare type BooleanInputProps = Override<InputProps<boolean>, ({
    clearable?: true;
    value: boolean | null;
    onChange?: (value: boolean | null) => void;
    clearLabel: string;
} | {
    clearable?: false;
    value: boolean;
    onChange?: (value: boolean) => void;
    clearLabel?: string;
}) & {
    readOnly?: boolean;
    yesLabel: string;
    noLabel: string;
    invalid?: boolean;
    children?: ReactNode;
    size?: 'normal' | 'small';
}>;

declare const BottomButtons: StyledComponent<"div", DefaultTheme, {}, never>;

export declare const BoxIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const BrandedPath: StyledComponent<"path", DefaultTheme, AkeneoThemedProps, never>;

export declare const Breadcrumb: {
    ({ children, ...rest }: BreadcrumbProps): default_2.JSX.Element;
    Step: StyledComponent<default_2.ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    decorated?: boolean | undefined;
    children: default_2.ReactNode;
    target?: string | undefined;
    href?: string | undefined;
    } & default_2.AnchorHTMLAttributes<HTMLAnchorElement> & default_2.RefAttributes<HTMLAnchorElement>>, DefaultTheme, AkeneoThemedProps, never>;
};

declare type BreadcrumbChild = ReactElement<LinkProps> | null | boolean | undefined | BreadcrumbChild[];

declare type BreadcrumbProps = {
    children: BreadcrumbChild;
};

export declare const BrokenLinkIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Button: default_2.ForwardRefExoticComponent<Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement> & default_2.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "onClick" | "size" | "disabled" | "level" | "href" | "ghost" | "active" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy"> & {
    level?: Level | undefined;
    ghost?: boolean | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    size?: ButtonSize | undefined;
    onClick?: ((event: SyntheticEvent) => void) | undefined;
    href?: string | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children?: ReactNode;
} & default_2.RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = Override<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, {
    level?: Level;
    ghost?: boolean;
    disabled?: boolean;
    active?: boolean;
    size?: ButtonSize;
    onClick?: (event: SyntheticEvent) => void;
    href?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
}>;

export declare type ButtonSize = 'small' | 'default';

export declare const CaddyAddIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CaddyCheckoutIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CaddyIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Card: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "onSelect" | "disabled" | "src" | "loading" | "fit" | "isSelected" | "stacked"> & {
    src: string | null;
    fit?: "cover" | "contain" | undefined;
    loading?: "eager" | "lazy" | undefined;
    isSelected?: boolean | undefined;
    disabled?: boolean | undefined;
    onSelect?: ((isSelected: boolean) => void) | undefined;
    stacked?: boolean | undefined;
    children: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>> & {
    BadgeContainer: StyledComponent<"div", DefaultTheme, {
    stacked?: boolean | undefined;
    } & AkeneoThemedProps, never>;
};

export declare const CardGrid: StyledComponent<"div", DefaultTheme, CardGridProps & AkeneoThemedProps, never>;

declare type CardGridProps = {
    size?: 'normal' | 'big';
};

export declare const CardIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CatalogsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const CategoryIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type CellProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    width: 'auto' | number;
}>;

export declare const ChannelsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const Checkbox: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "onChange" | "checked" | "readOnly"> & {
    checked: CheckboxChecked;
    readOnly?: boolean | undefined;
    onChange?: ((value: boolean, event: SyntheticEvent) => void) | undefined;
    children?: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>>;

export declare type CheckboxChecked = boolean | 'mixed';

export declare const CheckIcon: ({ title, size, color, className, ...props }: IconProps) => default_2.JSX.Element;

export declare const ChecklistIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CheckPartialIcon: ({ title, size, color, className, ...props }: IconProps) => default_2.JSX.Element;

export declare const CheckRoundIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CityIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ClientErrorIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ClockIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CloseIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CodeIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CodingIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const Collapse: default_2.ForwardRefExoticComponent<CollapseProps & default_2.RefAttributes<HTMLDivElement>>;

declare type CollapseProps = {
    label: ReactNode;
    collapseButtonLabel: string;
    isOpen: boolean;
    onCollapse: (isOpen: boolean) => void;
    children?: ReactNode;
};

export declare type Color = {
    blue10: string;
    blue100: string;
    blue120: string;
    blue140: string;
    blue20: string;
    blue40: string;
    blue60: string;
    blue80: string;
    green100: string;
    green120: string;
    green140: string;
    green10: string;
    green20: string;
    green40: string;
    green60: string;
    green80: string;
    grey100: string;
    grey120: string;
    grey140: string;
    grey20: string;
    grey40: string;
    grey60: string;
    grey80: string;
    purple100: string;
    purple120: string;
    purple140: string;
    purple20: string;
    purple40: string;
    purple60: string;
    purple80: string;
    red10: string;
    red100: string;
    red120: string;
    red140: string;
    red20: string;
    red40: string;
    red60: string;
    red80: string;
    yellow10: string;
    yellow100: string;
    yellow120: string;
    yellow140: string;
    yellow20: string;
    yellow40: string;
    yellow60: string;
    yellow80: string;
    brand20: string;
    brand40: string;
    brand60: string;
    brand80: string;
    brand100: string;
    brand120: string;
    brand140: string;
    white: string;
};

export declare const color: Color;

export declare type ColorAlternative = {
    blue10: string;
    blue100: string;
    blue120: string;
    chocolate10: string;
    chocolate100: string;
    chocolate120: string;
    coralRed10: string;
    coralRed100: string;
    coralRed120: string;
    darkBlue10: string;
    darkBlue100: string;
    darkBlue120: string;
    darkCyan10: string;
    darkCyan100: string;
    darkCyan120: string;
    darkPurple10: string;
    darkPurple100: string;
    darkPurple120: string;
    forestGreen10: string;
    forestGreen100: string;
    forestGreen120: string;
    green10: string;
    green100: string;
    green120: string;
    hotPink10: string;
    hotPink100: string;
    hotPink120: string;
    oliveGreen10: string;
    oliveGreen100: string;
    oliveGreen120: string;
    orange10: string;
    orange100: string;
    orange120: string;
    purple10: string;
    purple100: string;
    purple120: string;
    red10: string;
    red100: string;
    red120: string;
    yellow10: string;
    yellow100: string;
    yellow120: string;
};

export declare const colorAlternative: ColorAlternative;

export declare const ColorInput: default_2.ForwardRefExoticComponent<ColorInputProps & default_2.RefAttributes<HTMLInputElement>>;

declare type ColorInputProps = Override<Override<InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly?: true;
} | {
    readOnly?: false;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    invalid?: boolean;
}>;

export declare const ColumnIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CommonStyle: FlattenInterpolation<ThemedStyledProps<AkeneoThemedProps, DefaultTheme>>;

export declare const CompareIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ComponentIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CompositionIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ConnectIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const connectorTheme: Theme;

export declare const CopyIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CreditsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const CurrenciesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const DangerIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const DangerPlainIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const DateIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const DateInput: default_2.ForwardRefExoticComponent<DateInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare type DateInputProps = Override<Override<InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange?: (newValue: string) => void;
}) & {
    value?: string;
    invalid?: boolean;
    onSubmit?: () => void;
}>;

export declare const DefaultPictureIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const DeleteFamilyVariantIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const DeleteIcon: {
    ({ title, size, color, animateOnHover, ...props }: IconProps): default_2.JSX.Element;
    animatedMixin: FlattenSimpleInterpolation;
};

export declare const DeleteIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const DependenceIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const DialogIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const DimensionsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type Direction = 'top' | 'right' | 'bottom' | 'left';

export declare const DownloadIcon: {
    ({ title, size, color, animateOnHover, ...props }: IconProps): default_2.JSX.Element;
    animatedMixin: FlattenSimpleInterpolation;
};

export declare const DraftIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const DragDropIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Dropdown: {
    ({ children, ...rest }: DropdownProps): default_2.JSX.Element;
    Overlay: {
        ({ verticalPosition, horizontalPosition, dropdownOpenerVisible, fullWidth, parentRef, onClose, children, ...rest }: Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "onClose" | "verticalPosition" | "horizontalPosition" | "dropdownOpenerVisible" | "fullWidth" | "parentRef"> & {
            verticalPosition?: VerticalPosition | undefined;
            horizontalPosition?: HorizontalPosition | undefined;
            dropdownOpenerVisible?: boolean | undefined;
            fullWidth?: boolean | undefined;
            onClose: () => void;
            children: default_2.ReactNode;
            parentRef?: default_2.RefObject<HTMLDivElement> | undefined;
        }): default_2.ReactPortal;
        displayName: string;
    };
    Header: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLDivElement>>;
    Item: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "disabled" | "isActive"> & {
        disabled?: boolean | undefined;
        isActive?: boolean | undefined;
        children: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLDivElement>>;
    Section: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
    Title: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLDivElement>>;
    ItemCollection: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "onNextPage" | "noResultIllustration" | "noResultTitle"> & {
        onNextPage?: (() => void) | undefined;
        children?: default_2.ReactNode;
        noResultIllustration?: default_2.ReactElement<IllustrationProps, string | default_2.JSXElementConstructor<any>> | undefined;
        noResultTitle?: string | undefined;
    } & default_2.RefAttributes<HTMLDivElement>>;
    Surtitle: default_2.FC<{
        label: string;
        children?: default_2.ReactNode;
    }>;
};

declare type DropdownProps = Override<HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
}>;

export declare const EditIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const EntitiesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const EntitiesRecordIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const EntityIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const EntityMultiIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const EraseIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ExpandIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ExplanationPointIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ExportBuilderIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ExportCsvIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ExportIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ExportXlsxIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ExportYmlIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ExternalLinkIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FactoryIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FamilyIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const FamilyVariantIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const Field: default_2.ForwardRefExoticComponent<FieldProps & default_2.RefAttributes<HTMLDivElement>>;

declare type FieldChild = ReactElement<InputProps<unknown>> | ReactElement<HelperProps> | FieldChild[] | false | null | undefined;

export declare type FieldProps = {
    label: string;
    incomplete?: boolean;
    locale?: ReactElement<LocaleProps> | string | null;
    channel?: string | null;
    requiredLabel?: string;
    fullWidth?: boolean;
    children?: FieldChild;
    actions?: ReactNode;
};

declare type FigureProps = {
    label?: string;
    children: ReactNode;
};

export declare const FileCsvIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FileIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type FileInfo = {
    filePath: string;
    originalFilename: string;
    size?: number;
    mimeType?: string;
    extension?: string;
};

export declare const FileXlsxIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FiltersIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type Fit = 'cover' | 'contain';

export declare type FlashMessage = {
    level?: MessageBarLevel;
    title: string;
    icon?: ReactElement<IconProps>;
    children?: ReactNode;
};

export declare const FolderIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FolderInIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FolderMovedIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FolderOutIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FolderPlainIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FoldersIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FoldersPlainIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type FontFamily = {
    default: string;
    monospace: string;
};

export declare const fontFamily: FontFamily;

export declare type FontSize = {
    big: string;
    bigger: string;
    default: string;
    small: string;
    title: string;
};

export declare const fontSize: FontSize;

export declare const FoodIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FrowningFaceIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const FullscreenIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const getColor: (color: string, gradient?: number) => (props: AkeneoThemedProps) => string;

export declare const getColorAlternative: (color: string, gradient?: number) => (props: AkeneoThemedProps) => string;

export declare const getColorForLevel: (level: Level, gradient: number) => (props: AkeneoThemedProps) => string;

export declare const getEmoji: (countryCode: string) => string | undefined;

export declare const getFontFamily: (fontFamilyType: keyof FontFamily) => (props: AkeneoThemedProps) => string;

export declare const getFontSize: (fontSize: keyof FontSize) => (props: AkeneoThemedProps) => string;

export declare const GiftIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const GraphIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const GroupsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const GroupsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const Helper: default_2.ForwardRefExoticComponent<HelperProps & default_2.RefAttributes<HTMLDivElement>>;

export declare type HelperProps = {
    inline?: boolean;
    level?: Level_2;
    sticky?: number;
    icon?: ReactElement<IconProps>;
    children: ReactNode;
};

export declare const HelpIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const HelpPlainIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const HighlightTitle: StyledComponent<"span", DefaultTheme, AkeneoThemedProps, never>;

export declare type HorizontalPosition = 'left' | 'right';

export declare const IconButton: default_2.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "children">, "title" | "ghost" | "icon"> & {
    ghost?: boolean | "borderless" | undefined;
    icon: ReactElement<IconProps>;
    title: string;
} & default_2.RefAttributes<HTMLButtonElement>>;

export declare type IconButtonProps = Override<Omit<ButtonProps, 'children'>, {
    ghost?: boolean | 'borderless';
    icon: ReactElement<IconProps>;
    title: string;
}>;

export declare const IconCard: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "content" | "onClick" | "disabled" | "label" | "icon"> & {
    icon: ReactElement<IconProps>;
    label: string | JSX.Element;
    content?: string | undefined;
    disabled?: boolean | undefined;
    onClick?: (() => void) | undefined;
} & default_2.RefAttributes<HTMLDivElement>>;

export declare const IconCardGrid: StyledComponent<"div", DefaultTheme, {}, never>;

export declare type IconProps = Override<SVGProps<SVGSVGElement>, {
    title?: string;
    size?: number;
    color?: string;
    className?: string;
    animateOnHover?: boolean;
    ref?: RefObject<SVGSVGElement>;
}>;

export declare const IdIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type IllustrationProps = Override<SVGProps<SVGSVGElement>, {
    title?: string;
    size?: number | string;
    className?: string;
    animateOnHover?: boolean;
    ref?: RefObject<SVGSVGElement>;
}>;

declare const Image_2: default_2.ForwardRefExoticComponent<Omit<default_2.ImgHTMLAttributes<HTMLImageElement>, "height" | "width" | "alt" | "src" | "fit" | "isStacked" | "background"> & {
    src: string | null;
    alt: string;
    width?: number | undefined;
    height?: number | undefined;
    fit?: Fit | undefined;
    isStacked?: boolean | undefined;
    background?: Background | undefined;
} & default_2.RefAttributes<HTMLImageElement>>;
export { Image_2 as Image }

export declare const ImportCsvIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ImportIllustration: {
    ({ title, size, animateOnHover, ...props }: IllustrationProps): default_2.JSX.Element;
    animatedMixin: FlattenSimpleInterpolation;
};

export declare const ImportXlsxIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ImportYmlIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const InfoIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Information: default_2.ForwardRefExoticComponent<InformationProps & default_2.RefAttributes<HTMLDivElement>>;

declare type InformationProps = {
    illustration: ReactNode;
    title: ReactNode;
    children: ReactNode;
};

export declare const InfoRoundIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type InputProps<T> = {
    id?: string;
    value: T;
    onChange?: (newValue: T) => void;
    'aria-labelledby'?: string;
};

export declare const JuliaIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare enum Key {
    Space = " ",
    Enter = "Enter",
    NumpadEnter = "NumpadEnter",
    Backspace = "Backspace",
    Escape = "Escape",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowDown = "ArrowDown",
    ArrowUp = "ArrowUp",
    Delete = "Delete",
    Tab = "Tab"
}

export declare const KeyboardIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const KeyFigure: {
    ({ icon, title, children, ...props }: KeyFigureProps): default_2.JSX.Element;
    Figure: ({ label, children }: FigureProps) => default_2.JSX.Element;
};

export declare const KeyFigureGrid: StyledComponent<"div", DefaultTheme, {}, never>;

declare type KeyFigureProps = {
    icon: ReactElement<IconProps>;
    title: string;
    children?: ReactNode;
};

export declare const KeyIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type Level = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

declare type Level_2 = 'info' | 'warning' | 'error' | 'success';

declare type Level_3 = 'warning' | 'tertiary';

export declare const LightIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Link: default_2.ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    decorated?: boolean | undefined;
    children: ReactNode;
    target?: string | undefined;
    href?: string | undefined;
} & default_2.AnchorHTMLAttributes<HTMLAnchorElement> & default_2.RefAttributes<HTMLAnchorElement>>;

export declare const LinkIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type LinkProps = {
    disabled?: boolean;
    decorated?: boolean;
    children: ReactNode;
    target?: string;
    href?: string;
} & default_2.AnchorHTMLAttributes<HTMLAnchorElement>;

export declare const List: {
    ({ children, ...rest }: ListProps): default_2.JSX.Element;
    Row: {
        ({ children, isMultiline, isSelected, ...rest }: RowProps): default_2.JSX.Element;
        displayName: string;
    };
    Cell: {
        ({ title, width, children, ...rest }: CellProps): default_2.JSX.Element;
        displayName: string;
    };
    TitleCell: StyledComponent<"div", DefaultTheme, {
    width?: number | "auto" | undefined;
    } & AkeneoThemedProps, never>;
    ActionCell: {
        ({ children, ...rest }: ActionCellProps): default_2.JSX.Element;
        displayName: string;
    };
    RemoveCell: {
        ({ children, ...rest }: RemoveCellProps): default_2.JSX.Element;
        displayName: string;
    };
    RowHelpers: StyledComponent<"div", DefaultTheme, {}, never>;
};

export declare const ListIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type ListProps = {
    children?: ReactNode;
};

export declare const LoaderIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Locale: default_2.ForwardRefExoticComponent<LocaleProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare const LocaleIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const LocaleIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare type LocaleProps = {
    code: string;
    languageLabel?: string;
};

export declare const LockIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MailIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MainNavigationItem: default_2.ForwardRefExoticComponent<Omit<default_2.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "disabled" | "href" | "active" | "icon"> & {
    icon: default_2.ReactElement<IconProps>;
    children: default_2.ReactNode;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
} & default_2.RefAttributes<HTMLAnchorElement>>;

export declare const MarketplaceIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const MeasurementIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const MediaFileIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const MediaFileInput: default_2.ForwardRefExoticComponent<MediaFileInputProps & default_2.RefAttributes<HTMLInputElement>>;

declare type MediaFileInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLInputElement>, InputProps<FileInfo | null>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: FileInfo | null) => void;
}) & {
    value: FileInfo | null;
    thumbnailUrl: string | null;
    uploader: (file: File, onProgress: (ratio: number) => void) => Promise<FileInfo>;
    placeholder?: string;
    uploadingLabel: string;
    clearTitle: string;
    clearable?: boolean;
    uploadErrorLabel: string;
    size?: 'default' | 'small';
    invalid?: boolean;
}>;

export declare const MediaLinkIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MediaLinkInput: default_2.ForwardRefExoticComponent<MediaLinkInputProps & default_2.RefAttributes<HTMLInputElement>>;

declare type MediaLinkInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    thumbnailUrl: string | null;
    placeholder?: string;
    invalid?: boolean;
    onSubmit?: () => void;
}>;

export declare const MegaphoneIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MessageBar: ({ level, title, icon, dismissTitle, onClose, children }: MessageBarProps) => default_2.JSX.Element;

export declare type MessageBarLevel = 'info' | 'success' | 'warning' | 'error';

declare type MessageBarProps = FlashMessage & {
    dismissTitle: string;
    onClose: () => void;
};

export declare const MetricIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MetricInput: default_2.FC<MetricInputProps>;

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

export declare const MinifyIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Modal: default_2.FC<ModalProps> & {
    BottomButtons: typeof BottomButtons;
    TopRightButtons: typeof TopRightButtons;
    TopLeftButtons: typeof TopLeftButtons;
    SectionTitle: typeof SectionTitle_2;
    Title: typeof Title;
};

declare type ModalProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    illustration?: ReactElement<IllustrationProps>;
    closeTitle: string;
    children?: ReactNode;
    onClose: () => void;
}>;

export declare const MoneyIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const MoreIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MoreVerticalIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const MouseClickIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type MultiMultiSelectInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLDivElement>, InputProps<string[]>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string[]) => void;
}) & {
    value: string[];
    invalidValue?: string[];
    placeholder?: string;
    emptyResultLabel: string;
    openLabel: string;
    removeLabel: string;
    invalid?: boolean;
    children?: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
    verticalPosition?: VerticalPosition;
    lockedValues?: string[];
    onSubmit?: () => void;
} & ({
    onNextPage?: () => void;
    onSearchChange?: (searchValue: string) => void;
    disableInternalSearch?: false;
} | {
    onNextPage: () => void;
    onSearchChange: (searchValue: string) => void;
    disableInternalSearch: true;
})>;

export declare const MultiSelectInput: {
    ({ id, placeholder, invalid, value, invalidValue, emptyResultLabel, children, onChange, removeLabel, onSubmit, openLabel, readOnly, verticalPosition, onNextPage, onSearchChange, disableInternalSearch, lockedValues, "aria-labelledby": ariaLabelledby, ...rest }: MultiMultiSelectInputProps): default_2.JSX.Element;
    Option: {
        ({ children, ...rest }: OptionProps): default_2.JSX.Element;
        displayName: string;
    };
    OptionGroup: {
        ({ children, ...rest }: default_2.HTMLAttributes<HTMLSpanElement>): default_2.JSX.Element;
        displayName: string;
    };
};

export declare const NewsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const NoResultsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const NotificationIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const NumberInput: default_2.ForwardRefExoticComponent<NumberInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare type NumberInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange?: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    invalid?: boolean;
    onSubmit?: () => void;
    withIncrementIcons?: boolean;
}>;

export declare const onboarderTheme: Theme;

declare type OptionProps = {
    value: string;
    children: string;
} & default_2.HTMLAttributes<HTMLSpanElement>;

export declare const Overlay: ({ verticalPosition, parentRef, onClose, children, ...rest }: OverlayProps) => default_2.ReactPortal;

declare type OverlayProps = Override<HTMLAttributes<HTMLDivElement>, {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
}>;

export declare type Override<What, With> = Omit<What, keyof With> & With;

export declare const Pagination: FC<PaginationProps>;

declare type PaginationProps = {
    currentPage: number;
    totalItems: number;
    itemsPerPage?: number;
    sticky?: number;
    followPage: (page: number) => void;
};

export declare type Palette = {
    primary: string;
    secondary: string;
    tertiary: string;
    warning: string;
    danger: string;
};

export declare const palette: Palette;

export declare const PanelCloseIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const PanelOpenIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Pill: default_2.ForwardRefExoticComponent<{
    level?: PillLevel | undefined;
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

declare type PillLevel = 'primary' | 'warning' | 'danger';

export declare const pimTheme: Theme;

export declare const Placeholder: FC<PlaceholderProps>;

declare type PlaceholderProps = Override<HTMLAttributes<HTMLDivElement>, {
    title: string;
    illustration: ReactElement<IllustrationProps>;
    size?: PlaceholderSize;
}>;

declare type PlaceholderSize = 'default' | 'large';

export declare const placeholderStyle: FlattenSimpleInterpolation;

export declare const PlayIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const PlusIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const Preview: {
    ({ title, isOpen, collapseButtonLabel, onCollapse, children, ...rest }: PreviewProps): default_2.JSX.Element;
    Highlight: StyledComponent<"span", DefaultTheme, AkeneoThemedProps, never>;
    Row: {
        ({ action, children }: RowProps_2): default_2.JSX.Element;
        displayName: string;
    };
};

declare type PreviewProps = Override<HTMLAttributes<HTMLDivElement>, {
    title: string;
    children?: ReactNode;
} & ({
    isOpen: boolean;
    collapseButtonLabel: string;
    onCollapse: (isOpen: boolean) => void;
} | {
    isOpen?: undefined;
    collapseButtonLabel?: undefined;
    onCollapse?: undefined;
})>;

export declare type PreviewType = 'preview' | 'thumbnail';

export declare const ProductCategoryIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ProductDimensionsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ProductIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ProductModelIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ProductModelIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ProductPublishedIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ProductsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ProgressBar: default_2.ForwardRefExoticComponent<{
    level: Level;
    percent: ProgressBarPercent;
    light?: boolean | undefined;
    title?: string | undefined;
    progressLabel?: string | undefined;
    size?: ProgressBarSize | undefined;
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare type ProgressBarPercent = number | 'indeterminate';

declare type ProgressBarSize = 'small' | 'large';

export declare const ProgressIndicator: {
    ({ children, ...rest }: ProgressIndicatorProps): default_2.JSX.Element;
    Step: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLLIElement>, "children" | "disabled" | "current" | "index" | "state"> & {
        current?: boolean | undefined;
        state?: StepState | undefined;
        disabled?: boolean | undefined;
        children?: ReactNode;
        index?: number | undefined;
    } & default_2.RefAttributes<HTMLLIElement>>;
};

declare type ProgressIndicatorProps = Override<HTMLAttributes<HTMLUListElement>, {
    children?: ReactNode;
}>;

export declare const ProjectIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ProposalsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const PublishIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type Ref<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

export declare const RefreshIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type RemoveCellProps = default_2.HTMLAttributes<HTMLDivElement>;

export declare const RowIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type RowProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    isMultiline?: boolean;
    isSelected?: boolean;
}>;

declare type RowProps_2 = Override<HTMLAttributes<HTMLDivElement>, {
    action?: ReactElement<IconButtonProps>;
    children?: ReactNode;
}>;

export declare const RulesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const Search: {
    ({ children, placeholder, title, searchValue, inputRef, onSearchChange, ...rest }: SearchProps): default_2.JSX.Element;
    ResultCount: StyledComponent<"span", DefaultTheme, AkeneoThemedProps, never>;
    Separator: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
};

export declare const SearchIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type SearchProps = Override<HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
    placeholder?: string;
    title?: string;
    searchValue: string;
    inputRef?: RefObject<HTMLInputElement>;
    sticky?: number;
    onSearchChange: (searchValue: string) => void;
}>;

export declare const SectionIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const SectionTitle: {
    ({ children, ...rest }: SectionTitleProps): default_2.JSX.Element;
    Title: ({ level, ...rest }: TitleProps) => default_2.JSX.Element;
    Spacer: StyledComponent<"div", DefaultTheme, {}, never>;
    Separator: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
    Information: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
};

declare const SectionTitle_2: StyledComponent<"div", DefaultTheme, {
size?: "big" | "default" | "small" | undefined;
color?: string | undefined;
} & AkeneoThemedProps, never>;

declare type SectionTitleProps = Override<HTMLAttributes<HTMLDivElement>, {
    sticky?: number;
    children?: ReactNode;
}>;

export declare const SelectInput: {
    ({ id, placeholder, invalid, value, emptyResultLabel, children, onChange, clearable, clearLabel, openLabel, readOnly, verticalPosition, onNextPage, onSearchChange, disableInternalSearch, "aria-labelledby": ariaLabelledby, ...rest }: SelectInputProps): default_2.JSX.Element;
    Option: StyledComponent<"span", DefaultTheme, Omit<default_2.HTMLAttributes<HTMLSpanElement>, "disabled" | "value"> & {
    value: string;
    disabled?: boolean | undefined;
    }, never>;
    OptionGroup: StyledComponent<"span", DefaultTheme, {}, never>;
};

declare type SelectInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLDivElement>, InputProps<string>>, ({
    clearable?: false;
    readOnly: true;
    value: string | null;
} | {
    clearable?: false;
    readOnly?: boolean;
    value: string | null;
    onChange: (newValue: string) => void;
} | {
    clearable?: true;
    readOnly?: boolean;
    value: string | null;
    onChange: (newValue: string | null) => void;
}) & {
    placeholder?: string;
    emptyResultLabel: string;
    clearLabel?: string;
    openLabel: string;
    invalid?: boolean;
    children?: ReactNode;
    verticalPosition?: VerticalPosition;
} & ({
    onNextPage?: () => void;
    onSearchChange?: (searchValue: string) => void;
    disableInternalSearch?: false;
} | {
    onNextPage: () => void;
    onSearchChange: (searchValue: string) => void;
    disableInternalSearch: true;
})>;

declare type Selection_2<Type = string> = {
    mode: 'in' | 'not_in';
    collection: Type[];
};
export { Selection_2 as Selection }

export declare const ServerErrorIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const ServerIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const SettingsIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const SettingsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const sharedCatalogsTheme: Theme;

export declare const ShopIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type Size = 'small' | 'big';

export declare const SkeletonPlaceholder: StyledComponent<"div", DefaultTheme, {}, never>;

export declare const SmilingFaceIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const SparkleIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const SplitButton: {
    ({ label, children, ...rest }: SplitButtonProps): default_2.JSX.Element;
    Item: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & {
        children: ReactNode;
    } & default_2.RefAttributes<HTMLDivElement>>;
};

export declare type SplitButtonProps = Omit<Override<ButtonProps, {
    label: string;
}>, 'href'>;

export declare const StarIcon: ({ title, size, color, fill, ...props }: IconProps) => default_2.JSX.Element;

export declare const StatusIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

declare type StepState = 'done' | 'inprogress' | 'todo';

export declare const SubNavigationItem: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLAnchorElement>, "children" | "disabled" | "href" | "active"> & {
    children?: default_2.ReactNode;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
} & default_2.RefAttributes<HTMLAnchorElement>>;

export declare const SubNavigationPanel: SubNavigationPanelCompoundType;

declare type SubNavigationPanelCompoundType = ForwardRefExoticComponent<PropsWithoutRef<SubNavigationPanelProps> & RefAttributes<HTMLDivElement>> & {
    Collapsed?: any;
    Section?: any;
};

declare type SubNavigationPanelProps = {
    children?: default_2.ReactNode;
    isOpen?: boolean;
    open: () => void;
    close: () => void;
    closeTitle?: string;
    openTitle?: string;
    noPadding?: boolean;
};

export declare const SupplierIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const SurveyIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const SwitcherButton: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLDivElement>, "children" | "onClick" | "label" | "inline" | "deletable" | "onDelete"> & {
    label: string;
    onClick?: (() => void) | undefined;
    inline?: boolean | undefined;
    deletable?: boolean | undefined;
    onDelete?: (() => void) | undefined;
    children?: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>>;

export declare const SystemIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const TabBar: {
    ({ moreButtonTitle, children, ...rest }: TabBarProps): default_2.JSX.Element;
    Tab: {
        ({ children, onClick, isActive, parentRef, onVisibilityChange, ...rest }: TabProps): default_2.JSX.Element;
        displayName: string;
    };
};

declare type TabBarProps = {
    moreButtonTitle: string;
    sticky?: number;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export declare const Table: {
    ({ isSelectable, hasWarningRows, hasLockedRows, displayCheckbox, isDragAndDroppable, onReorder, children, ...rest }: TableProps): default_2.JSX.Element;
    Header: default_2.ForwardRefExoticComponent<TableHeaderProps & default_2.RefAttributes<HTMLTableSectionElement>>;
    HeaderCell: default_2.ForwardRefExoticComponent<{
        isSortable?: boolean | undefined;
        onDirectionChange?: ((direction: "none" | "ascending" | "descending") => void) | undefined;
        sortDirection?: ("none" | "ascending" | "descending") | undefined;
        children?: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLTableHeaderCellElement>>;
    Body: default_2.ForwardRefExoticComponent<TableBodyProps & default_2.RefAttributes<HTMLTableSectionElement>>;
    Row: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "level" | "isSelected" | "rowIndex" | "onSelectToggle"> & {
        children?: default_2.ReactNode;
        onSelectToggle?: ((isSelected: boolean) => void) | undefined;
        isSelected?: boolean | "mixed" | undefined;
        level?: ("tertiary" | "warning") | undefined;
        onClick?: ((event: default_2.MouseEvent<HTMLTableRowElement, MouseEvent>) => void) | undefined;
        rowIndex?: number | undefined;
    } & default_2.RefAttributes<HTMLTableRowElement>>;
    Cell: default_2.ForwardRefExoticComponent<Omit<default_2.TdHTMLAttributes<HTMLTableCellElement>, "children" | "rowTitle"> & {
        children?: default_2.ReactNode;
        rowTitle?: boolean | undefined;
    } & default_2.RefAttributes<HTMLTableCellElement>>;
    ActionCell: default_2.ForwardRefExoticComponent<Omit<default_2.TdHTMLAttributes<HTMLTableCellElement>, "children"> & {
        children?: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLTableCellElement>>;
};

declare type TableBodyChild = TableBodyChild[] | ReactElement<TableRowProps> | boolean | undefined;

declare type TableBodyProps = {
    children?: TableBodyChild;
};

declare type TableHeaderProps = {
    sticky?: number;
    children?: ReactNode;
};

export declare const TableIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const TableInput: {
    ({ children, readOnly, isDragAndDroppable, onReorder, ...rest }: TableInputProps): default_2.JSX.Element;
    Header: default_2.ForwardRefExoticComponent<{
        children?: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLTableSectionElement>>;
    HeaderCell: default_2.ForwardRefExoticComponent<TableInputHeaderCellProps & default_2.RefAttributes<HTMLTableHeaderCellElement>>;
    Body: default_2.ForwardRefExoticComponent<{
        children?: default_2.ReactNode;
    } & default_2.RefAttributes<HTMLTableSectionElement>>;
    Row: default_2.ForwardRefExoticComponent<Omit<default_2.HTMLAttributes<HTMLTableRowElement>, "children" | "highlighted" | "rowIndex"> & {
        children?: default_2.ReactNode;
        highlighted?: boolean | undefined;
        rowIndex?: number | undefined;
    } & default_2.RefAttributes<HTMLTableRowElement>>;
    Cell: default_2.ForwardRefExoticComponent<default_2.TdHTMLAttributes<HTMLTableCellElement> & default_2.RefAttributes<HTMLTableCellElement>>;
    CellContent: {
        ({ children, rowTitle, highlighted, inError, ...rest }: Omit<Omit<default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "highlighted" | "inError" | "rowTitle"> & {
            rowTitle?: boolean | undefined;
            highlighted?: boolean | undefined;
            inError?: boolean | undefined;
            children?: default_2.ReactNode;
        }): default_2.JSX.Element;
        displayName: string;
    };
    Text: ({ children, value, ...rest }: Omit<TextInputProps, "highlighted" | "inError"> & {
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }) => default_2.JSX.Element;
    Date: ({ children, value, ...rest }: Omit<DateInputProps, "highlighted" | "inError"> & {
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }) => default_2.JSX.Element;
    Number: ({ children, value, ...rest }: Omit<NumberInputProps, "highlighted" | "inError"> & {
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }) => default_2.JSX.Element;
    Boolean: default_2.FC<Omit<default_2.HTMLAttributes<HTMLDivElement>, "onChange" | "value" | "clearLabel" | "yesLabel" | "noLabel" | "highlighted" | "inError" | "openDropdownLabel"> & {
        value: boolean | null;
        onChange: (value: boolean | null) => void;
        yesLabel: string;
        noLabel: string;
        highlighted?: boolean | undefined;
        clearLabel: string;
        openDropdownLabel: string;
        inError?: boolean | undefined;
    }>;
    Select: default_2.FC<{
        value: default_2.ReactNode;
        onClear: () => void;
        highlighted?: boolean | undefined;
        clearLabel: string;
        openDropdownLabel: string;
        onNextPage?: (() => void) | undefined;
        searchValue?: string | undefined;
        onSearchChange?: ((search: string) => void) | undefined;
        searchPlaceholder: string;
        searchTitle: string;
        inError?: boolean | undefined;
        closeTick?: boolean | undefined;
        bottomHelper?: default_2.ReactElement<any, string | default_2.JSXElementConstructor<any>> | undefined;
        withSearch?: boolean | undefined;
        onOpenChange?: ((isOpen: boolean) => void) | undefined;
        children?: default_2.ReactNode;
    }>;
    Measurement: default_2.FC<{
        amount: string;
        unit: string;
        emptyResultLabel: string;
        openLabel: string;
        onChange: (amount: string | undefined, unit: string) => void;
        units: {
            value: string;
            label: string;
            symbol?: string | undefined;
        }[];
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }>;
};

declare type TableInputHeaderCellProps = default_2.TdHTMLAttributes<HTMLTableCellElement>;

export declare type TableInputProps = Override<default_2.HTMLAttributes<HTMLTableElement>, {
    children?: ReactNode;
    readOnly?: boolean;
    isDragAndDroppable?: boolean;
    onReorder?: (updatedIndices: number[]) => void | undefined;
}>;

export declare type TableProps = Override<default_2.HTMLAttributes<HTMLTableElement>, {
    isSelectable?: boolean;
    hasWarningRows?: boolean;
    hasLockedRows?: boolean;
    displayCheckbox?: boolean;
    children?: ReactNode;
} & ({
    isDragAndDroppable?: false;
    onReorder?: undefined;
} | {
    isDragAndDroppable: boolean;
    onReorder: (updatedIndices: number[], draggedIndex?: number, droppedIndex?: number) => void;
})>;

declare type TableRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    onSelectToggle?: (isSelected: boolean) => void;
    isSelected?: boolean | 'mixed';
    level?: Level_3;
    onClick?: (event: MouseEvent_2<HTMLTableRowElement>) => void;
    rowIndex?: number;
}>;

declare type TabProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    isActive: boolean;
    onClick?: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
    onVisibilityChange?: (newVisibility: boolean) => void;
}>;

export declare const Tag: StyledComponent<"li", DefaultTheme, {
tint: TagTint;
} & default_2.HTMLAttributes<HTMLLIElement> & AkeneoThemedProps, never>;

export declare const TagIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const TagInput: FC<TagInputProps>;

declare type TagInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLInputElement>, InputProps<string[]>>, {
    value: string[];
    placeholder?: string;
    invalid?: boolean;
    separators?: string[];
    onChange: (tags: string[]) => void;
    onSubmit?: () => void;
    labels?: {
        [key: string]: string;
    };
    invalidValue?: string[];
}>;

export declare const Tags: default_2.ForwardRefExoticComponent<TagsProps & default_2.RefAttributes<HTMLUListElement>>;

declare type TagsProps = {
    children?: ReactNode;
};

export declare type TagTint = 'green' | 'blue' | 'dark_blue' | 'purple' | 'dark_purple' | 'yellow' | 'red' | 'dark_cyan' | 'forest_green' | 'olive_green' | 'hot_pink' | 'coral_red' | 'orange' | 'chocolate';

export declare const TextAreaInput: default_2.ForwardRefExoticComponent<TextAreaInputProps & default_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextAreaInputProps = Override<Override<default_2.InputHTMLAttributes<HTMLTextAreaElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    invalid?: boolean;
    characterLeftLabel?: string;
    isRichText?: boolean;
    richTextEditorProps?: EditorProps;
}>;

export declare const TextInput: default_2.ForwardRefExoticComponent<TextInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare type TextInputProps = Override<Override<InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange?: (newValue: string) => void;
}) & {
    value?: string;
    placeholder?: string;
    invalid?: boolean;
    characterLeftLabel?: string;
    onSubmit?: () => void;
}>;

export declare type Theme = {
    name: string;
    palette: Palette;
    fontSize: FontSize;
    color: Color;
    colorAlternative: ColorAlternative;
    fontFamily: FontFamily;
};

export declare const themes: Theme[];

export declare const Tile: FC<TileProps>;

declare type TileProps = Override<default_2.HTMLAttributes<HTMLDivElement>, ({
    icon: default_2.ReactElement<IconProps>;
    size?: 'big' | 'small';
    inline?: false;
} | {
    size?: 'big' | 'small';
    icon?: undefined;
    inline?: true;
}) & {
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}>;

export declare const Tiles: default_2.ForwardRefExoticComponent<TilesProps & default_2.RefAttributes<HTMLDivElement>>;

declare type TilesProps = {
    children?: ReactNode;
    size?: Size;
    inline?: boolean;
};

export declare const TimezoneIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

declare const Title: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;

declare type TitleProps = Override<HTMLAttributes<HTMLHeadingElement>, {
    level?: 'primary' | 'secondary';
}>;

export declare const Toolbar: {
    ({ isVisible, children, ...rest }: ToolbarProps): default_2.JSX.Element;
    LabelContainer: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
    SelectionContainer: StyledComponent<"div", DefaultTheme, {}, never>;
    ActionsContainer: StyledComponent<"div", DefaultTheme, {}, never>;
};

declare type ToolbarProps = Override<default_2.HTMLAttributes<HTMLDivElement>, {
    isVisible?: boolean;
    children?: ReactNode;
}>;

export declare const Tooltip: {
    ({ direction, iconSize, width, children, ...rest }: TooltipProps): default_2.JSX.Element;
    Title: StyledComponent<"div", DefaultTheme, AkeneoThemedProps, never>;
};

export declare type TooltipProps = Override<HTMLAttributes<HTMLDivElement>, {
    direction?: Direction;
    iconSize?: number;
    children: ReactNode;
    width?: number;
}>;

declare const TopLeftButtons: StyledComponent<"div", DefaultTheme, {}, never>;

declare const TopRightButtons: StyledComponent<"div", DefaultTheme, {}, never>;

export declare const Tree: {
    <T>({ label, value, children, isLeaf, selected, isLoading, selectable, readOnly, onChange, onOpen, onClose, onClick, defaultOpen, _isRoot, ...rest }: default_2.PropsWithChildren<TreeProps<T>>): default_2.JSX.Element;
    displayName: string;
};

declare type TreeProps<T = string> = {
    value: T;
    label: string;
    isLeaf?: boolean;
    selected?: boolean;
    isLoading?: boolean;
    selectable?: boolean;
    readOnly?: boolean;
    onOpen?: (value: T) => void;
    onClose?: (value: T) => void;
    onChange?: (value: T, checked: boolean, event: SyntheticEvent) => void;
    onClick?: (value: T) => void;
    defaultOpen?: boolean;
    _isRoot?: boolean;
    children?: ReactNode;
};

export declare const UnpublishIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const UnviewIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const UploadIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const useAutoFocus: (ref: RefObject<HTMLElement>) => (() => void);

export declare const useBooleanState: (defaultValue?: boolean) => readonly [boolean, () => void, () => void];

export declare const useCombinedRefs: <T>(...refs: Ref<T>[]) => RefObject<T>;

export declare const useDebounce: <Type = string>(value: Type, delay?: number) => Type;

export declare const useHorizontalPosition: (ref: RefObject<HTMLElement>, forcedPosition?: HorizontalPosition) => HorizontalPosition | undefined;

export declare const useId: (prefix?: string) => string;

export declare const useInModal: () => boolean;

export declare const useIsMounted: () => (() => boolean);

export declare const usePaginatedResults: <Type>(fetcher: (page: number) => Promise<Type[]>, dependencies: DependencyList, shouldFetch?: boolean) => readonly [Type[], () => void];

export declare const useProgress: (steps: string[]) => readonly [(step: string) => boolean, () => void, () => void];

declare type User = {
    username: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
};

export declare const UserGroupsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const UserIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const UserRolesIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const UsersIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const useSelection: <Type = string>(totalCount: number) => readonly [Selection_2<Type>, boolean | "mixed", (item: Type) => boolean, (item: Type, newValue: boolean) => void, (newValue: boolean) => void, number];

export declare const useShortcut: <NodeType extends HTMLElement>(key: Key, callback: (args?: any) => unknown, externalRef?: Ref_2<NodeType>) => Ref_2<NodeType>;

export declare const useTabBar: (defaultTab: string) => readonly [(tab: string) => boolean, (tab: string) => void, string];

export declare const useTheme: () => DefaultTheme;

export declare const useVerticalPosition: (ref: RefObject<HTMLElement>, forcedPosition?: VerticalPosition) => VerticalPosition | undefined;

export declare const useWindowResize: () => WindowSize;

export declare const UsingIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const uuid: () => string;

export declare const ValueIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare type VerticalPosition = 'up' | 'down';

export declare const ViewIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export declare const ViewsIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const WarningIllustration: ({ title, size, ...props }: IllustrationProps) => default_2.JSX.Element;

export declare const WaveIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

declare type WindowSize = {
    width: number;
    height: number;
};

export declare const WorkflowIcon: ({ title, size, color, ...props }: IconProps) => default_2.JSX.Element;

export { }

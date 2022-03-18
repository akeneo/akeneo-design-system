declare const StoryStyle: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../theme/theme").Theme>, never>;
declare const PreviewGrid: import("styled-components").StyledComponent<"div", any, {
    width: number;
}, never>;
declare const PreviewCard: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const PreviewContainer: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../theme/theme").Theme>, never>;
declare const LabelContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const Subtitle: import("styled-components").StyledComponent<"h2", any, {}, never>;
declare const Content: import("styled-components").StyledComponent<"div", any, {
    width: number;
    height: number;
} & Record<string, unknown> & import("styled-components").ThemeProps<import("../theme/theme").Theme>, never>;
declare const ListContextContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const Section: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const SpaceBetweenContainer: import("styled-components").StyledComponent<"div", any, {
    direction: string;
}, never>;
declare const MessageBarContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const Scrollable: import("styled-components").StyledComponent<"div", any, {
    height: number;
}, never>;
declare const SpaceContainer: import("styled-components").StyledComponent<"div", any, {
    width?: number | undefined;
    height?: number | undefined;
    gap?: number | undefined;
}, never>;
declare const fakeFetcher: (page?: number, searchValue?: string) => Promise<unknown>;
export { Content, fakeFetcher, LabelContainer, ListContextContainer, MessageBarContainer, PreviewCard, PreviewContainer, PreviewGrid, Scrollable, Section, SpaceBetweenContainer, SpaceContainer, StoryStyle, Subtitle, };

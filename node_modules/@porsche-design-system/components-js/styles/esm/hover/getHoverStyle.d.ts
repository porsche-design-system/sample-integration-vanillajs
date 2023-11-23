type BorderRadius = 'small' | 'medium';
type Options = {
    borderRadius?: BorderRadius | string;
};
export declare const getHoverStyle: (opts?: Options) => {
    readonly borderRadius: string;
    readonly marginLeft: "-2px";
    readonly marginRight: "-2px";
    readonly paddingLeft: "2px";
    readonly paddingRight: "2px";
    readonly transition: "background var(--p-transition-duration, 0.25s) cubic-bezier(0.25,0.1,0.25,1)";
    readonly '@media(hover:hover)': {
        readonly '&:hover': {
            readonly background: "rgba(148, 149, 152, .18)";
        };
    };
};
export {};

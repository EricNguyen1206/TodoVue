/** __vue_virtual_code_placeholder */
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    className: string;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
        $props: __VLS_PropsChildren<S>;
    };
};
type __VLS_PropsChildren<S> = {
    [K in keyof (boolean extends (JSX.ElementChildrenAttribute extends never ? true : false) ? never : JSX.ElementChildrenAttribute)]?: S;
};

/** __vue_virtual_code_placeholder */
import type { Option } from '../declaration';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: () => Option[];
        required: true;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    default: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: () => Option[];
        required: true;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    default: {
        type: StringConstructor;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    className: string;
}>;
export default _default;

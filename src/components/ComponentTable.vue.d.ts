/** __vue_virtual_code_placeholder */
import { type PropType } from 'vue';
import type { Todo } from '../declaration';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => Todo[];
        require: boolean;
    };
    searchTerm: {
        type: StringConstructor;
    };
    selectSort: {
        type: PropType<"" | "NAME ASC" | "NAME DESC" | "Level ASC" | "Level DESC">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => Todo[];
        require: boolean;
    };
    searchTerm: {
        type: StringConstructor;
    };
    selectSort: {
        type: PropType<"" | "NAME ASC" | "NAME DESC" | "Level ASC" | "Level DESC">;
    };
}>>, {}>;
export default _default;

import type { ENUM_LEVEL, ENUM_SORT } from '@/constant';
import type { Option } from '@/declaration';
/**
 * convert enum object to Option type for render select option component
 * @param input
 * @return {Option[]}
 */
export declare const adapterEnumToOptions: (input: typeof ENUM_LEVEL | typeof ENUM_SORT) => Option[];

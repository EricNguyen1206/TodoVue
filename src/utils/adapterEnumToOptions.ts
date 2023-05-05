import type { ENUM_LEVEL, ENUM_SORT } from '@/constant'
import type { Option } from '@/declaration'

/**
 * convert enum object to Option type for render select option component
 * @param input
 * @return {Option[]}
 */
export const adapterEnumToOptions = (input: typeof ENUM_LEVEL | typeof ENUM_SORT) => {
  const output: Option[] = []
  Object.keys(input).forEach((key, index): void => {
    output.push({ label: key, value: Object.values(input)[index] })
  })
  return output
}

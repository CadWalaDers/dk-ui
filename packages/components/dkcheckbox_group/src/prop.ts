import type { ExtractPropTypes } from 'vue'
import { setArrayProps, setNumberProps } from '../../_utils'

export const checkboxGroup = {
  modelValue: setArrayProps(),
  min: setNumberProps(),
  max: setNumberProps()
}

export type CheckboxGroupPropsType = ExtractPropTypes<typeof checkboxGroup>

import { wrapInput, wrapButton } from 'react-functional-forms'
import * as ui from '@material-ui/core'

export const TextField = wrapInput(ui.TextField)
export const Slider = wrapInput(ui.Slider)

export const Button = wrapButton(ui.Button)

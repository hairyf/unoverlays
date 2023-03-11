import { noop } from '@unoverlays/utils'
import { createContext } from 'react'
import type { OverlayMeta } from '../hooks'

export enum OverEvents {
  Cancel = 'cancel',
  Confirm = 'confirm',
}

export const OverlayContext = createContext<OverlayMeta>({
  cancel: noop,
  confirm: noop,
  setVisible: noop,
  vanish: noop,
  visible: false,
})

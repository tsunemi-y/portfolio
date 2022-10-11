/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toPropValue, Color, Space } from 'utils/styles'

export type BoxProps = {
  alignItems?: Responsive<string>
  justifyContent?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
  position?: Responsive<string>
  zIndex?: Responsive<number>
  top?: Responsive<string | number>
  right?: Responsive<string | number>
  borderBottm?: Responsive<string>
  textAlign?: Responsive<string>
}

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
  ${(props) => toPropValue('position', props.position, props.theme)}
  ${(props) => toPropValue('z-index', props.zIndex, props.theme)}
  ${(props) => toPropValue('top', props.top, props.theme)}
  ${(props) => toPropValue('right', props.right, props.theme)}
  ${(props) => toPropValue('border-bottom', props.borderBottm, props.theme)}
  ${(props) => toPropValue('text-align', props.textAlign, props.theme)}
`

export default Box
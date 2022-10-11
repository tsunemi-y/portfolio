/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import styled from 'styled-components'
import { IsShownSideMenuContext } from '../../organisms/Header'

// ラインの位置
export type LinePosition = 'top' | 'middle' | 'bottom'

// lineの高さを指定するプロパティの型を設定
export type HumburgerLineProps = React.AllHTMLAttributes<HTMLSpanElement> & {
  linePosition?: LinePosition
}

const linePositions = {
  top: {
    top: '30%'
  },
  middle: {
    display: 'block',
  },
  bottom: {
    bottom: '30%'
  }
}

const crossPositions = {
  top: {
    top: '50%',
    transform: 'rotate(45deg)',
  },
  middle: {
    display: 'none',
  },
  bottom: {
    top: '50%',
    transform: 'rotate(-45deg)',
  }
}

 const HumburgerLine = styled.span<HumburgerLineProps>`
  ${({ linePosition }) => {
    if (linePosition && linePositions[linePosition] && crossPositions[linePosition]) {
      const isShownSideMenu = useContext(IsShownSideMenuContext)
      const humburgerLinePosition = linePositions[linePosition]
      const humburgerCrossPosition = crossPositions[linePosition]
      if (linePosition === 'top') {
        return isShownSideMenu ? humburgerCrossPosition : humburgerLinePosition
      }

      if (linePosition === 'middle') {
        return isShownSideMenu ? humburgerCrossPosition : humburgerLinePosition
      }

      if (linePosition === 'bottom') {
        return isShownSideMenu ? humburgerCrossPosition : humburgerLinePosition
      }
    }
  }}

  background-color: #fff;
  border-radius: 3px;
  height: 3px;
  position: absolute;
  width: 25px;
  &:after {
    content: '';
  }
 `
  export default HumburgerLine
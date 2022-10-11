import Link from 'next/link'
import { useState, createContext } from 'react';
import styled from 'styled-components'
import AppLogo from 'components/atoms/AppLogo'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import HumburgerMenu from 'components/molecules/HumburgerMenu'
import SideMenu from '../SideMenu'

// ヘッダーのルート
const HeaderRoot = styled.header`
  background-color: ${process.env.SUB_COLOR};
  height: 3rem;
  margin: 0 auto;
`

export const IsShownSideMenuContext = createContext<boolean>(false)

const Header = () => {
  const [isShownSideMenu, setIsShownSideMenu] = useState<boolean>(false)

  const onClickHumburgerMenu = () => {
    setIsShownSideMenu(!isShownSideMenu)
  }

  return (
    <IsShownSideMenuContext.Provider value={isShownSideMenu}>
      <HeaderRoot>
        <Flex alignItems='center' height='100%'>
          <Box>
            <Link href='/' passHref>
              <a>
                <AppLogo />
              </a>
            </Link>
          </Box>
          <Box height='100%'>
            <HumburgerMenu onClick={onClickHumburgerMenu} />
          </Box>
        </Flex>
        <SideMenu />  
      </HeaderRoot>
    </IsShownSideMenuContext.Provider>
  )
}

export default Header
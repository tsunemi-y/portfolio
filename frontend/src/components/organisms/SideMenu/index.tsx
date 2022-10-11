import { useContext } from 'react';
import Link from 'next/link'
import { IsShownSideMenuContext } from '../../organisms/Header'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'
import SideMenuContent from 'components/molecules/SideMenuContent'

const SideMenu = () => {
  const isShownSideMenu = useContext(IsShownSideMenuContext)

  return (
    <Box
      backgroundColor='#72cc82'
      height='100%'
      position='absolute'
      right={ isShownSideMenu ? 0 : '-50%' }
      top={0}
      width='50%'
      zIndex={2}
    >
      <Box marginTop='5rem'></Box>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>
      <SideMenuContent path='/' text='新規登録'/>

    </Box>
  )
}

export default SideMenu
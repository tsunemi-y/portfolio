/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

 const Img = styled(Image)`
  
 `

 const AppLogo = () => {
    return (
        <>
          <Img src={logo} width={120} height={25} alt={'アプリのロゴ'}/>
        </>
    )
 }
  
  export default AppLogo
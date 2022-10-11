import Flex from "components/layout/Flex"
import HumburgerLine from "components/atoms/HumburgerLine"

type HumburgerMenuProps = { 
  onClick: () => void
}

// 押下時にmargin調整、メニューの横線をバツにする
const HumburgerMenu = ({ onClick }: HumburgerMenuProps) => {

  return (
    <>
      <Flex 
        alignItems='center'
        backgroundColor={process.env.MAIN_COLOR}
        height='3rem'
        justifyContent='center'
        position='fixed'
        right={0}
        width='3rem'
        zIndex={3}
        onClick={onClick}
      >
        <HumburgerLine linePosition='top' />
        <HumburgerLine linePosition='middle' />
        <HumburgerLine linePosition='bottom' />
      </Flex>
    </>
  )
}
 
export default HumburgerMenu
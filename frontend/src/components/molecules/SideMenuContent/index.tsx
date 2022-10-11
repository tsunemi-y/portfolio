import Box from "components/layout/Box"
import LinkText from "components/atoms/LinkText"

type SideMenuContentProps = { 
  path: string,
  text: string
}

const SideMenuContent = ({ path, text }: SideMenuContentProps) => {
 return (
  <Box 
    borderBottm='1px dotted #fff' 
    paddingBottom='3px'
    marginBottom='1rem' 
    marginLeft='.5rem'
  >
    <LinkText path={path} text={text}/>
  </Box>
 )
}
 
export default SideMenuContent
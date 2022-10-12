/* eslint-disable prettier/prettier */
import Link from 'next/link'
import styled from 'styled-components'

export type LinkTextProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  path: string
  text?: string
}

const Anchor = styled.a`
 color: #fff;
 text-decoration: none;
`

const LinkText = ({ text, path }: LinkTextProps) => {
  return (
    <>
      <Link href={path} passHref>
        <Anchor>{text}</Anchor>
      </Link>
    </>
  )
}
 export default LinkText
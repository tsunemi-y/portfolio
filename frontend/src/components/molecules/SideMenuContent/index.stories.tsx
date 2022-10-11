import { ComponentMeta } from '@storybook/react'
import HumburgerMenu from './index'

export default { title: 'Molecules/HumburgerMenu' } as ComponentMeta<typeof HumburgerMenu>

export const menu = () => <HumburgerMenu />

import { ComponentMeta } from '@storybook/react'
import HumburgerLine from './index'

export default { title: 'Atoms/HumburgerLine' } as ComponentMeta<typeof HumburgerLine>

export const topLine = () => <HumburgerLine linePosition={'top'} />
export const middleLine = () => <HumburgerLine />
export const bottomLine = () => <HumburgerLine linePosition={'bottom'} />

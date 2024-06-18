import type { Meta, StoryObj } from '@storybook/react'

import CardHeader from './CardHeader'

const meta: Meta<typeof CardHeader> = {
  component: CardHeader
}

export default meta
type Story = StoryObj<typeof CardHeader>

export const Primary: Story = {
  args: {
  }
}
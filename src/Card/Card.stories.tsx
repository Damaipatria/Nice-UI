import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Card from './Card'
import CardHeader from '../CardHeader'

const meta: Meta<typeof Card> = {
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    // children: <CardHeader />,
    width: "",
    heigth: ""
  }
}
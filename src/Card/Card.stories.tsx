import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Card from './Card'
import CardHeader from '../CardHeader'
import CardFooter from '../CardFooter'
import CardBody from '../CardBody'

const meta: Meta<typeof Card> = {
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>

const CardHeaderFooter = () => {
  return (
    <>
      <CardHeader /> 
      <CardBody>
        <h3 className='mb-1 font-bold font-k2d text-lg'>Card Title</h3>
        <p className='font-k2d'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aliquam corrupti.</p>
      </CardBody>
      <CardFooter/>
    </>
  )
}

export const HeaderFooter: Story = {
  args: {
    children: <CardHeaderFooter />,
    width: "w-72",
    heigth: "h-fit"
  }
}


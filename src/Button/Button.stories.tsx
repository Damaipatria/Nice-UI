import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    color: 'secondary'
  }
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    color: 'warning'
  }
}

export const OutlineDanger: Story = {
  args: {
    children: 'Outline Danger',
    color: 'outline-danger'
  }
}
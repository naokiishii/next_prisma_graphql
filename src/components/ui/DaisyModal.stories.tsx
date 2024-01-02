import type { Meta, StoryObj } from '@storybook/react'

import { DaisyModal } from './DaisyModal'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/DaisyModal',
  component: DaisyModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DaisyModal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Top: Story = {
  args: {
    location: 'top',
    title: 'DaisyModal',
    content: 'This is a modal for test',
  },
}

export const Middle: Story = {
  args: {
    location: 'middle',
    title: 'DaisyModal',
    content: 'This is a modal for test',
  },
}

export const Bottom: Story = {
  args: {
    location: 'bottom',
    title: 'DaisyModal',
    content: 'This is a modal for test',
  },
}

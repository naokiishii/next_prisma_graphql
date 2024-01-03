import type { Meta, StoryObj } from '@storybook/react'

import { DaisyTextInput } from './DaisyTextInput'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/DaisyTextInput',
  component: DaisyTextInput,
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
} satisfies Meta<typeof DaisyTextInput>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    primary: true,
    placeholder: 'placeholder text',
    size: 'large',
  },
}

export const WithLabel: Story = {
  args: {
    primary: true,
    placeholder: 'placeholder text',
    label: 'label text',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    primary: false,
    placeholder: '',
    label: 'label text',
    size: 'small',
  },
}

export const Disabled: Story = {
  args: {
    primary: false,
    placeholder: '',
    label: 'label text',
    size: 'small',
    disabled: true,
  },
}

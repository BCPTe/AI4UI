import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default button
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}

// Different variants
export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
}

// Different sizes
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
}

export const Icon: Story = {
  args: {
    children: "🔍",
    size: "icon",
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

// Example with multiple buttons
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

// Example with icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <span className="mr-2">✉️</span> Email
      </Button>
      <Button variant="outline">
        <span className="mr-2">🔔</span> Notifications
      </Button>
      <Button variant="secondary">
        Settings <span className="ml-2">⚙️</span>
      </Button>
    </div>
  ),
}

// Loading state example
export const Loading: Story = {
  render: () => (
    <Button disabled className="relative">
      <span className="absolute left-0 right-0 flex justify-center">
        <svg
          className="h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </span>
      <span className="opacity-0">Loading</span>
    </Button>
  ),
}


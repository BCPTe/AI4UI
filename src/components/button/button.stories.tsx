import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

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
      options: ["solid", "outline", "ghost", "soft", "link"],
      description: "The visual style of the button",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "warning", "destructive"],
      description: "The color scheme of the button",
    },
    size: {
      control: "select",
      options: ["md", "sm", "lg", "icon"],
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
    size: "md",
  },
};

// Solid Variant Group (with all colors)
export const SolidVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Solid Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="solid" color="primary">
          Primary
        </Button>
        <Button variant="solid" color="secondary">
          Secondary
        </Button>
        <Button variant="solid" color="warning">
          Warning
        </Button>
        <Button variant="solid" color="destructive">
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="solid" color="primary" size="sm">
          Small
        </Button>
        <Button variant="solid" color="primary" size="md">
          Medium
        </Button>
        <Button variant="solid" color="primary" size="lg">
          Large
        </Button>
        <Button variant="solid" color="primary" size="icon">
          🔍
        </Button>
      </div>
    </div>
  ),
};

// Outline Variant Group (with all colors)
export const OutlineVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Outline Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" color="primary">
          Primary
        </Button>
        <Button variant="outline" color="secondary">
          Secondary
        </Button>
        <Button variant="outline" color="warning">
          Warning
        </Button>
        <Button variant="outline" color="destructive">
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="outline" color="primary" size="sm">
          Small
        </Button>
        <Button variant="outline" color="primary" size="md">
          Medium
        </Button>
        <Button variant="outline" color="primary" size="lg">
          Large
        </Button>
        <Button variant="outline" color="primary" size="icon">
          🔍
        </Button>
      </div>
    </div>
  ),
};

// Ghost Variant Group (with all colors)
export const GhostVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Ghost Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="ghost" color="primary">
          Primary
        </Button>
        <Button variant="ghost" color="secondary">
          Secondary
        </Button>
        <Button variant="ghost" color="warning">
          Warning
        </Button>
        <Button variant="ghost" color="destructive">
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="ghost" color="primary" size="sm">
          Small
        </Button>
        <Button variant="ghost" color="primary" size="md">
          Medium
        </Button>
        <Button variant="ghost" color="primary" size="lg">
          Large
        </Button>
        <Button variant="ghost" color="primary" size="icon">
          🔍
        </Button>
      </div>
    </div>
  ),
};

// Soft Variant Group (with all colors)
export const SoftVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Soft Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="soft" color="primary">
          Primary
        </Button>
        <Button variant="soft" color="secondary">
          Secondary
        </Button>
        <Button variant="soft" color="warning">
          Warning
        </Button>
        <Button variant="soft" color="destructive">
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="soft" color="primary" size="sm">
          Small
        </Button>
        <Button variant="soft" color="primary" size="md">
          Medium
        </Button>
        <Button variant="soft" color="primary" size="lg">
          Large
        </Button>
        <Button variant="soft" color="primary" size="icon">
          🔍
        </Button>
      </div>
    </div>
  ),
};

// Link Variant Group (with all colors)
export const LinkVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Link Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="link" color="primary">
          Primary
        </Button>
        <Button variant="link" color="secondary">
          Secondary
        </Button>
        <Button variant="link" color="warning">
          Warning
        </Button>
        <Button variant="link" color="destructive">
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="link" color="primary" size="sm">
          Small
        </Button>
        <Button variant="link" color="primary" size="md">
          Medium
        </Button>
        <Button variant="link" color="primary" size="lg">
          Large
        </Button>
      </div>
    </div>
  ),
};

// All Variants Overview
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Variants (Primary Color)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid" color="primary">
            Solid
          </Button>
          <Button variant="outline" color="primary">
            Outline
          </Button>
          <Button variant="ghost" color="primary">
            Ghost
          </Button>
          <Button variant="soft" color="primary">
            Soft
          </Button>
          <Button variant="link" color="primary">
            Link
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Colors (Solid Variant)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid" color="primary">
            Primary
          </Button>
          <Button variant="solid" color="secondary">
            Secondary
          </Button>
          <Button variant="solid" color="warning">
            Warning
          </Button>
          <Button variant="solid" color="destructive">
            Destructive
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Disabled state across variants
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Disabled States</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="solid" color="primary" disabled>
          Solid
        </Button>
        <Button variant="outline" color="primary" disabled>
          Outline
        </Button>
        <Button variant="ghost" color="primary" disabled>
          Ghost
        </Button>
        <Button variant="soft" color="primary" disabled>
          Soft
        </Button>
        <Button variant="link" color="primary" disabled>
          Link
        </Button>
      </div>
    </div>
  ),
};

// Example with icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid" color="primary">
        <span className="mr-2">✉️</span> Email
      </Button>
      <Button variant="outline" color="secondary">
        <span className="mr-2">🔔</span> Notifications
      </Button>
      <Button variant="soft" color="warning">
        Settings <span className="ml-2">⚙️</span>
      </Button>
      <Button variant="ghost" color="destructive">
        <span className="mr-2">🗑️</span> Delete
      </Button>
    </div>
  ),
};

// Loading state example
export const Loading: Story = {
  render: () => (
    <Button disabled className="relative">
      <span className="absolute left-0 right-0 flex justify-center">
        <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
      <span className="opacity-0">Loading</span>
    </Button>
  ),
};

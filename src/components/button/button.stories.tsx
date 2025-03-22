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
      options: ["md", "sm", "lg"],
      description: "The size of the button",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "The border radius of the button",
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
    radius: "md",
  },
};

// Solid Variant Group (with all colors)
export const SolidVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Solid Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="solid" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Primary
        </Button>
        <Button variant="solid" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Secondary
        </Button>
        <Button variant="solid" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Warning
        </Button>
        <Button variant="solid" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="solid" color="primary" size="sm" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Small
        </Button>
        <Button variant="solid" color="primary" size="md" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Medium
        </Button>
        <Button variant="solid" color="primary" size="lg" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Large
        </Button>
        <Button variant="solid" color="primary" size="sm" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="solid" color="primary" size="md" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="solid" color="primary" size="lg" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// Outline Variant Group (with all colors)
export const OutlineVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Outline Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Primary
        </Button>
        <Button variant="outline" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Secondary
        </Button>
        <Button variant="outline" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Warning
        </Button>
        <Button variant="outline" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="outline" color="primary" size="sm" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Small
        </Button>
        <Button variant="outline" color="primary" size="md" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Medium
        </Button>
        <Button variant="outline" color="primary" size="lg" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Large
        </Button>
        <Button variant="outline" color="primary" size="sm" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="outline" color="primary" size="md" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="outline" color="primary" size="lg" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// Ghost Variant Group (with all colors)
export const GhostVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Ghost Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="ghost" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Primary
        </Button>
        <Button variant="ghost" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Secondary
        </Button>
        <Button variant="ghost" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Warning
        </Button>
        <Button variant="ghost" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="ghost" color="primary" size="sm" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Small
        </Button>
        <Button variant="ghost" color="primary" size="md" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Medium
        </Button>
        <Button variant="ghost" color="primary" size="lg" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Large
        </Button>
        <Button variant="ghost" color="primary" size="sm" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="ghost" color="primary" size="md" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="ghost" color="primary" size="lg" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// Soft Variant Group (with all colors)
export const SoftVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Soft Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="soft" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Primary
        </Button>
        <Button variant="soft" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Secondary
        </Button>
        <Button variant="soft" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Warning
        </Button>
        <Button variant="soft" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="soft" color="primary" size="sm" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Small
        </Button>
        <Button variant="soft" color="primary" size="md" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Medium
        </Button>
        <Button variant="soft" color="primary" size="lg" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Large
        </Button>
        <Button variant="soft" color="primary" size="sm" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="soft" color="primary" size="md" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="soft" color="primary" size="lg" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// Link Variant Group (with all colors)
export const LinkVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Link Variant</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="link" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Primary
        </Button>
        <Button variant="link" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Secondary
        </Button>
        <Button variant="link" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Warning
        </Button>
        <Button variant="link" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Destructive
        </Button>
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="link" color="primary" size="sm" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Small
        </Button>
        <Button variant="link" color="primary" size="md" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Medium
        </Button>
        <Button variant="link" color="primary" size="lg" radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
          Large
        </Button>
        <Button variant="link" color="primary" size="sm" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="link" color="primary" size="md" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
        <Button variant="link" color="primary" size="lg" radius={args.radius} isIconOnly disabled={args.disabled} isLoading={args.isLoading}>
          🔍
        </Button>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// All Variants Overview
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Variants (Primary Color)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Solid
          </Button>
          <Button variant="outline" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Outline
          </Button>
          <Button variant="ghost" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Ghost
          </Button>
          <Button variant="soft" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Soft
          </Button>
          <Button variant="link" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Link
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Colors (Solid Variant)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Primary
          </Button>
          <Button variant="solid" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Secondary
          </Button>
          <Button variant="solid" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Warning
          </Button>
          <Button variant="solid" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
            Destructive
          </Button>
        </div>
      </div>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

// Example with icons
export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button leftSection={"✉️"} variant="solid" color="primary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
        Email
      </Button>
      <Button leftSection={"🔔"} variant="outline" color="secondary" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
        Notifications
      </Button>
      <Button rightSection={"⚙️"} variant="soft" color="warning" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
        Settings
      </Button>
      <Button rightSection={"🗑️"} variant="ghost" color="destructive" size={args.size} radius={args.radius} disabled={args.disabled} isLoading={args.isLoading}>
        Delete
      </Button>
    </div>
  ),
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    disabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
    isLoading: false,
  },
};

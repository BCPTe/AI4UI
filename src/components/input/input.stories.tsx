import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "underline", "ghost", "filled"],
      description: "The visual style of the input",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "warning", "destructive"],
      description: "The color scheme of the input",
    },
    size: {
      control: "select",
      options: ["md", "sm", "lg"],
      description: "The size of the input",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "The border radius of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "filled",
    color: "default",
    size: "md",
    radius: "md",
  },
};

// Default Variant Group (with all colors)
export const DefaultVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <h3 className="text-lg font-bold">Default Variant</h3>
      <div className="flex flex-col gap-4">
        <Input variant="filled" color="default" size={args.size} radius={args.radius} placeholder="Default" disabled={args.disabled} />
        <Input variant="filled" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
        <Input variant="filled" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
        <Input variant="filled" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
        <Input variant="filled" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-col gap-4">
        <Input variant="filled" color="primary" size="sm" radius={args.radius} placeholder="Small" disabled={args.disabled} />
        <Input variant="filled" color="primary" size="md" radius={args.radius} placeholder="Medium" disabled={args.disabled} />
        <Input variant="filled" color="primary" size="lg" radius={args.radius} placeholder="Large" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// Outline Variant Group (with all colors)
export const OutlineVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <h3 className="text-lg font-bold">Outline Variant</h3>
      <div className="flex flex-col gap-4">
        <Input variant="outline" color="default" size={args.size} radius={args.radius} placeholder="Default" disabled={args.disabled} />
        <Input variant="outline" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
        <Input variant="outline" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
        <Input variant="outline" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
        <Input variant="outline" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-col gap-4">
        <Input variant="outline" color="primary" size="sm" radius={args.radius} placeholder="Small" disabled={args.disabled} />
        <Input variant="outline" color="primary" size="md" radius={args.radius} placeholder="Medium" disabled={args.disabled} />
        <Input variant="outline" color="primary" size="lg" radius={args.radius} placeholder="Large" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// Underline Variant Group (with all colors)
export const UnderlineVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <h3 className="text-lg font-bold">Underline Variant</h3>
      <div className="flex flex-col gap-4">
        <Input variant="underline" color="default" size={args.size} radius={args.radius} placeholder="Default" disabled={args.disabled} />
        <Input variant="underline" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
        <Input variant="underline" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
        <Input variant="underline" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
        <Input variant="underline" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-col gap-4">
        <Input variant="underline" color="primary" size="sm" radius={args.radius} placeholder="Small" disabled={args.disabled} />
        <Input variant="underline" color="primary" size="md" radius={args.radius} placeholder="Medium" disabled={args.disabled} />
        <Input variant="underline" color="primary" size="lg" radius={args.radius} placeholder="Large" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// Ghost Variant Group (with all colors)
export const GhostVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <h3 className="text-lg font-bold">Ghost Variant</h3>
      <div className="flex flex-col gap-4">
        <Input variant="ghost" color="default" size={args.size} radius={args.radius} placeholder="Default" disabled={args.disabled} />
        <Input variant="ghost" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
        <Input variant="ghost" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
        <Input variant="ghost" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
        <Input variant="ghost" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-col gap-4">
        <Input variant="ghost" color="primary" size="sm" radius={args.radius} placeholder="Small" disabled={args.disabled} />
        <Input variant="ghost" color="primary" size="md" radius={args.radius} placeholder="Medium" disabled={args.disabled} />
        <Input variant="ghost" color="primary" size="lg" radius={args.radius} placeholder="Large" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// Filled Variant Group (with all colors)
export const FilledVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[300px]">
      <h3 className="text-lg font-bold">Filled Variant</h3>
      <div className="flex flex-col gap-4">
        <Input variant="filled" color="default" size={args.size} radius={args.radius} placeholder="Default" disabled={args.disabled} />
        <Input variant="filled" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
        <Input variant="filled" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
        <Input variant="filled" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
        <Input variant="filled" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
      </div>

      <h4 className="text-md font-semibold mt-4">Sizes</h4>
      <div className="flex flex-col gap-4">
        <Input variant="filled" color="primary" size="sm" radius={args.radius} placeholder="Small" disabled={args.disabled} />
        <Input variant="filled" color="primary" size="md" radius={args.radius} placeholder="Medium" disabled={args.disabled} />
        <Input variant="filled" color="primary" size="lg" radius={args.radius} placeholder="Large" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// All Variants Overview
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 w-[300px]">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Variants (Primary Color)</h3>
        <div className="flex flex-col gap-4">
          <Input variant="outline" color="primary" size={args.size} radius={args.radius} placeholder="Outline" disabled={args.disabled} />
          <Input variant="underline" color="primary" size={args.size} radius={args.radius} placeholder="Underline" disabled={args.disabled} />
          <Input variant="ghost" color="primary" size={args.size} radius={args.radius} placeholder="Ghost" disabled={args.disabled} />
          <Input variant="filled" color="primary" size={args.size} radius={args.radius} placeholder="Filled" disabled={args.disabled} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">All Colors (Default Variant)</h3>
        <div className="flex flex-col gap-4">
          <Input variant="filled" color="primary" size={args.size} radius={args.radius} placeholder="Primary" disabled={args.disabled} />
          <Input variant="filled" color="secondary" size={args.size} radius={args.radius} placeholder="Secondary" disabled={args.disabled} />
          <Input variant="filled" color="warning" size={args.size} radius={args.radius} placeholder="Warning" disabled={args.disabled} />
          <Input variant="filled" color="destructive" size={args.size} radius={args.radius} placeholder="Destructive" disabled={args.disabled} />
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
  },
  args: {
    size: "md",
    radius: "md",
    disabled: false,
  },
};

// Error State
export const WithError: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input variant="outline" color="primary" placeholder="Email" error="Invalid email address" />
      <Input variant="underline" color="primary" placeholder="Username" error="This field is required" />
      <Input variant="filled" color="primary" placeholder="Password" type="password" error="Password must be at least 8 characters" />
      <Input
        variant="ghost"
        color="primary"
        placeholder="Phone Number"
        error={true} // Just highlight in red without message
      />
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input variant="outline" color="primary" size={args.size} radius={args.radius} placeholder="Email" leftSection="✉️" />
      <Input variant="underline" color="secondary" size={args.size} radius={args.radius} placeholder="Search..." leftSection="🔍" />
      <Input variant="filled" color="warning" size={args.size} radius={args.radius} placeholder="Password" type="password" leftSection="🔒" rightSection="👁️" />
      <Input variant="ghost" color="destructive" size={args.size} radius={args.radius} placeholder="Calendar" rightSection="📅" />
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
  },
  args: {
    size: "md",
    radius: "md",
  },
};

// Various input types
export const InputTypes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-[300px]">
      <h3 className="text-lg font-bold">Input Types</h3>
      <Input variant="filled" color="primary" type="text" placeholder="Text input" />
      <Input variant="filled" color="primary" type="password" placeholder="Password input" />
      <Input variant="filled" color="primary" type="email" placeholder="Email input" />
      <Input variant="filled" color="primary" type="number" placeholder="Number input" />
      <Input variant="filled" color="primary" type="date" placeholder="Date input" />
      <Input variant="filled" color="primary" type="time" placeholder="Time input" />
      <Input variant="filled" color="primary" type="url" placeholder="URL input" />
      <Input variant="filled" color="primary" type="tel" placeholder="Tel input" />
    </div>
  ),
};

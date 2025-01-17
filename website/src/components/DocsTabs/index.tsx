"use client";
import { Tabs as FlowbiteTabs } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

// Copied from https://www.flowbite-react.com/docs/components/tabs and then modified
const customTheme: CustomFlowbiteTheme["tab"] = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-neutral-200",
      underline: "flex-wrap -mb-px border-b border-neutral-200",
      pills: "flex-wrap font-medium text-sm text-neutral-500 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-neutral-200 shadow grid grid-flow-colrounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-neutral-400",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-neutral-100 text-neutral-600",
            off: "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-600",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-accent-600 rounded-t-lg border-b-2 border-accent-600 active",
            off: "border-b-2 border-transparent text-neutral-500 hover:border-accent-200 hover:text-accent-600",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-neutral-600 text-white",
            off: "rounded-lg hover:text-neutral-900 hover:bg-neutral-100",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-neutral-900 bg-neutral-100 active rounded-none",
            off: "bg-white hover:text-neutral-700 hover:bg-neutral-50 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "p-3",
};

function TabsGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <FlowbiteTabs.Group
        theme={customTheme}
        style="underline"
        className="bg-neutral-50 rounded shadow"
      >
        {children}
      </FlowbiteTabs.Group>
    </div>
  );
}

function TabsItem({
  children,
  title,
  ...props
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <FlowbiteTabs.Item title={title} {...props}>
      {children}
    </FlowbiteTabs.Item>
  );
}

export { TabsGroup, TabsItem };

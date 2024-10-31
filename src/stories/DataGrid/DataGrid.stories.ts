import type { Meta, StoryObj } from "@storybook/react";

import { DataGrid } from "../../components/DataGrid/DataGrid";
import { tableData } from "./mock-data";
import { MoneyCell } from "../../components/DataGrid/cell-types/MoneyCell";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/DataGrid",
    component: DataGrid,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     loading: {
    //         control: "boolean",
    //     },
    // },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        bordered: true,
        columns: [
            { field: "id", title: "ID", width: 70 },
            { field: "firstName", title: "First Name", width: 130 },
            {
                field: "lastName",
                title: "Last Name",
                width: "max-content",
            },
            {
                field: "balance",
                title: "Balance",
                width: 130,
                align: "right",
                cellComponent: MoneyCell,
            },
            { field: "email", title: "Email", width: "max-content" },
        ],
        data: tableData,
    },
};

// export const Secondary: Story = {
//     args: {
//         label: "Button",
//     },
// };

// export const Large: Story = {
//     args: {
//         size: "large",
//         label: "Button",
//     },
// };

// export const Small: Story = {
//     args: {
//         size: "small",
//         label: "Button",
//     },
// };

import type { Meta, StoryObj } from "@storybook/react";

import { DataGrid } from "../components/DataGrid/DataGrid";

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
const getBalance = () => Math.floor(Math.random() * 1000);
const data = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        balance: getBalance(),
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smithjk asd kjhvsd kjchvsadk chjvds",
        email: "jane@example.com",
        balance: getBalance(),
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        balance: getBalance(),
    },
];
for (let i = 0; i < 100; i++) {
    data.push({
        id: i + 4,
        firstName: "John " + i + 4,
        lastName: "Doe",
        email: "john@example.com",
        balance: getBalance(),
    });
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        columns: [
            { field: "id", title: "ID", width: 70 },
            { field: "firstName", title: "First Name", width: 130 },
            { field: "lastName", title: "Last Name", width: 130 },
            { field: "balance", title: "Balance", width: 130, align: "right" },
            { field: "email", title: "Email", width: 200 },
        ],
        rows: data,
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

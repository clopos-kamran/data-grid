import React from "react";
import { DataGrid } from "../components/DataGrid/DataGrid";

const UsersPage: React.FC = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First Name", width: 130 },
        { field: "lastName", headerName: "Last Name", width: 130 },
        { field: "email", headerName: "Email", width: 200 },
    ];

    const rows = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            email: "jane@example.com",
        },
        // Add more rows as needed
    ];

    const handleRowClick = (row: any) => {
        console.log("Clicked row:", row);
    };

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                columns={columns}
                rows={rows}
                onRowClick={handleRowClick}
                loading={false}
            />
        </div>
    );
};

export default UsersPage;

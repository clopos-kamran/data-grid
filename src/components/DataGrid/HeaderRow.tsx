import React from "react";
import { Column } from "./DataGrid";
import { getGridStyle } from "./utils";
import { HeaderCell } from "./HeaderCell";

interface HeaderRowProps {
    columns: Column[];
}

export const HeaderRow: React.FC<HeaderRowProps> = ({ columns }) => {
    const gridStyle = getGridStyle(columns.length);
    return (
        <div
            className="grid grid-cols-subgrid bg-blue-50 sticky z-10 top-0"
            style={gridStyle}
        >
            {columns.map((column) => (
                <HeaderCell key={column.field} column={column} />
            ))}
        </div>
    );
};

function validateColumns(columns: Column[]) {
    const fields = columns.map((column) => column.field);
    const uniqueFields = new Set(fields);
    if (fields.length !== uniqueFields.size) {
        throw new Error("Columns must have unique field names");
    }
    // column cannot have both render and Component
    if (columns.some((column) => column.renderCell && column.cellComponent)) {
        throw new Error(
            "Column cannot have both render function and Component"
        );
    }
}

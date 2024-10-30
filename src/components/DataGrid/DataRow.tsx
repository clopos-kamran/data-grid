import React from "react";
import { Column } from "./DataGrid";
import { getGridStyle } from "./utils";
import { DataCell } from "./DataCell";

export interface DataRowProps {
    data: any;
    index: number;
    columns: Column[];
    onRowClick?: (row: any) => void;
}

export const DataRow: React.FC<DataRowProps> = ({
    data,
    columns,
    onRowClick,
    index,
}) => {
    const gridStyle = getGridStyle(columns.length);
    return (
        <div
            onClick={() => onRowClick?.(data)}
            className="grid grid-cols-subgrid  sticky top-[-2px] z-10 hover:bg-gray-100"
            style={gridStyle}
        >
            {columns.map((column) => {
                if (column.renderCell) {
                    return column.renderCell(data, index);
                }
                const Comp = column.cellComponent ?? DataCell;
                return <Comp key={column.field} data={data} column={column} />;
            })}
        </div>
    );
};

import React from "react";
import { Column } from "./DataGrid";
import { getGridStyle } from "./utils";
import { DataCell } from "./DataCell";

export interface DataRowProps {
    data: any;
    index: number;
    columns: Column[];
    onRowClick?: (row: any) => void;
    bordered?: boolean;
}

export const DataRow: React.FC<DataRowProps> = ({
    data,
    columns,
    onRowClick,
    index,
    bordered,
}) => {
    const gridStyle = getGridStyle(columns.length);
    return (
        <div
            onClick={() => onRowClick?.(data)}
            className="grid grid-cols-subgrid hover:bg-gray-100"
            style={gridStyle}
        >
            {columns.map((column) => {
                if (column.renderCell) {
                    return column.renderCell(data, index);
                }
                const Comp = column.cellComponent ?? DataCell;
                return (
                    <Comp
                        key={column.field}
                        data={data}
                        column={column}
                        bordered={bordered}
                    />
                );
            })}
        </div>
    );
};

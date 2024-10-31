import React from "react";
import "./DataGrid.css";
import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";
import { cn, getGridColumnsTemplate } from "./utils";
import { VirtualizedRows } from "./VirtualizedRows";
import { DataCellProps } from "./DataCell";

export type CellAlign = "left" | "right" | "center";
export type ColumnType =
    | "text"
    | "number"
    | "date"
    | "boolean"
    | "email"
    | "link";

export interface Column<T = any, C extends DataCellProps = DataCellProps> {
    field: string;
    title: string;
    width?: number | "auto" | "min-content" | "max-content" | `${number}fr`;
    minWidth?: number;
    maxWidth?: number;
    sortable?: boolean;
    align?: "left" | "right" | "center";
    type?: ColumnType;
    className?: string;
    cellComponent?: React.FC<C>;
    renderCell?: (data: T, index: number) => React.ReactNode;
    renderHeaderCell?: (column: Column) => React.ReactNode;
    onRowClick?: (row: T) => void;
}

export interface DataGridProps<T = any> {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
    loading?: boolean;
    className?: string;
    bordered?: boolean;
    virtualize?: boolean;
}

export const DataGrid: React.FC<DataGridProps> = ({
    columns,
    data: rows,
    onRowClick,
    loading = false,
    className,
    bordered = false,
    virtualize = true,
}) => {
    const mapperFn = (item: any, index: number) => {
        return (
            <DataRow
                data={item}
                columns={columns}
                key={index}
                index={index}
                onRowClick={onRowClick}
                bordered={bordered}
            />
        );
    };

    return (
        <div
            className="relative overflow-auto"
            id="table-root"
            style={{ height: window.innerHeight }}
        >
            <div
                className={cn("grid mb-2 w-fill", className)}
                style={getGridColumnsTemplate(columns)}
            >
                <HeaderRow columns={columns} bordered={bordered} />
                {virtualize ? (
                    <VirtualizedRows items={rows} children={mapperFn} />
                ) : (
                    rows.map(mapperFn)
                )}
            </div>
            {loading && (
                <div className="z-30 absolute top-0 w-full h-full flex justify-center pt-6 bg-white/80">
                    Loading...
                </div>
            )}
        </div>
    );
};

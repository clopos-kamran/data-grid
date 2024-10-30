import React from "react";
import "./DataGrid.css";
import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";
import { cn } from "./utils";

export type CellAlign = "left" | "right" | "center";
export type ColumnType =
    | "text"
    | "number"
    | "date"
    | "boolean"
    | "email"
    | "link";

export interface Column<T = any> {
    field: string;
    title: string;
    width?: number;
    sortable?: boolean;
    align?: "left" | "right" | "center";
    type?: ColumnType;
    className?: string;
    cellComponent?: React.FC<{ data: T }>;
    renderCell?: (data: T, index: number) => React.ReactNode;
    renderHeader?: (data: T) => React.ReactNode;
    onRowClick?: (row: T) => void;
}

export interface DataGridProps<T = any> {
    columns: Column<T>[];
    rows: T[];
    onRowClick?: (row: T) => void;
    loading?: boolean;
    className?: string;
}

export const DataGrid: React.FC<DataGridProps> = ({
    columns,
    rows,
    onRowClick,
    loading = false,
    className,
}) => {
    return (
        <div className="relative">
            <div className={cn("grid mb-2 w-fill", className)}>
                <HeaderRow columns={columns} />
                {rows.map((row, index) => (
                    <DataRow
                        data={row}
                        columns={columns}
                        key={index}
                        index={index}
                        onRowClick={onRowClick}
                    />
                ))}
            </div>
            {loading && (
                <div className="z-30 absolute top-0 w-full h-full flex justify-center pt-6 bg-white/80">
                    Loading...
                </div>
            )}
        </div>
    );
};

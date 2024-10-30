import React from "react";
import { Column } from "./DataGrid";
import { alignClassMap, cn } from "./utils";

export interface DataCellProps {
    data: any;
    column: Column;
    className?: string;
}

export const DataCell: React.FC<DataCellProps> = ({
    data,
    column,
    className,
}) => {
    return (
        <div
            className={cn(
                "py-1 px-2 text-sm border border-slate-100 border-t-0 border-l-0 border-r-0",
                className,
                alignClassMap[column.align ?? "left"],
                column.className
            )}
        >
            {data[column.field]}
        </div>
    );
};

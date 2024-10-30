import React from "react";
import { Column } from "./DataGrid";
import { alignClassMap, cn } from "./utils";

export interface HeaderCellProps {
    column: Column;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({ column }) => {
    return (
        <div
            className={cn(
                "py-1 px-2 text-sm",
                alignClassMap[column.align ?? "left"],
                column.className
            )}
        >
            {column.title}
        </div>
    );
};

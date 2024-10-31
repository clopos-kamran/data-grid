import React from "react";
import { Column } from "./DataGrid";
import { alignClassMap, cn } from "./utils";

export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
    column: Column;
    children: React.ReactNode;
    bordered?: boolean;
}

export const Cell: React.FC<CellProps> = ({
    column,
    children,
    bordered,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                "py-1 px-2 text-sm border border-slate-100 border-t-0 border-l-0 ",
                bordered ? "first:border-l" : "border-r-0 ",
                alignClassMap[column.align ?? "left"],
                column.className,
                props.className
            )}
        >
            {children}
        </div>
    );
};

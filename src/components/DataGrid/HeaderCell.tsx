import React from "react";
import { Cell, CellProps } from "./Cell";
import { cn } from "./utils";

export interface HeaderCellProps extends Omit<CellProps, "children"> {}

export const HeaderCell: React.FC<HeaderCellProps> = ({
    className,
    ...props
}) => {
    return (
        <Cell
            className={cn(
                "border-slate-200",
                props.bordered ? "border-t" : "",
                className
            )}
            {...props}
        >
            {props.column.title}
        </Cell>
    );
};
